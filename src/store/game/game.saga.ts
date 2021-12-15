import {
    all,
    call,
    put,
    SagaReturnType, select,
    takeLatest,
} from "@redux-saga/core/effects";

import { RootState } from "../store";
import { getRandomWordsAPI, getTranslationAPI} from "../../services/game.service";
import {updateStats} from '../stats/stats.slice'


import {fetchRandomWordsStart,fetchRandomWords,fetchRandomWordsSuccess,fetchTranslateSuccess,setCorrectAnswer,decrementTimer,startTimer,incrementQuestionCount}  from './game.slice';

export const selectCorrectAnswer= (state: RootState) => state.game.correctAnswer;
export const selectIsFinished= (state: RootState) => state.game.finished;
export const selectQuestionCount= (state: RootState) => state.game.questionsCount;
export const selectCorrectCount= (state: RootState) => state.game.correctCount;
export const selectLoading = (state:RootState) => state.game.loading

const delay = (ms:number) => new Promise(res => setTimeout(res, ms))

function* onCallSelfOnTimer(): any {

    const isFinished = yield select(selectIsFinished);
    const loading = yield  select(selectLoading)

    if(loading === 'SUCCESS') {
        yield  put(decrementTimer());
    }
    // If still not finished (if leftTime > 0 ) call yourself in  a second
    if (!isFinished) {
        yield delay(1000)
        yield call(onCallSelfOnTimer);
    }
    else if(isFinished){
        const correctCount = yield select(selectCorrectCount);
        const questionCount = yield select(selectQuestionCount)
        yield put(updateStats({correctCount, questionCount}))
    }
}

export function* onFetchRandomWords():any {
    yield put(fetchRandomWordsStart())

    try {
        const response: SagaReturnType<typeof getRandomWordsAPI> = yield getRandomWordsAPI();
        const words =  response.data

        const randomWord = yield words[Math.floor(Math.random()*words.length)];
        const responseFromTranslator: SagaReturnType<typeof getTranslationAPI> = yield  getTranslationAPI(randomWord);
        const translate = responseFromTranslator.data[0]['phonetic'];

        yield put(fetchTranslateSuccess(translate))
        yield put(setCorrectAnswer(randomWord));
        yield put(fetchRandomWordsSuccess(words));

        yield put(incrementQuestionCount())

    }
    catch (error) {
        yield call(onFetchRandomWords)
    }
}

export function* onFetchRandomWordsStart() {
    yield takeLatest(fetchRandomWords.type, onFetchRandomWords);
}

export function* onStartTimerStart() {
    yield takeLatest(startTimer.type, onCallSelfOnTimer )
}

export default function* gameSaga() {
    yield all([call(onFetchRandomWordsStart), call(onStartTimerStart)]);
}
