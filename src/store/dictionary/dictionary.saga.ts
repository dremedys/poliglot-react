import {all, call, put, SagaReturnType, select, takeLatest} from "@redux-saga/core/effects";
import {fetchDetailedWord, fetchDetailedWordSuccess, IWordDetail, startFetchingDetailWord,fetchDetailedWordFailed} from "./dictionary.slice";
import {getTranslationAPI} from "../../services/game.service";
import {RootState} from "../store";

export const selectCurrentWord = (state:RootState) => state.dict.currentWord

export function* onFetchDetailedWord() {
    yield put(startFetchingDetailWord())
    try {
        const word:string = yield select(selectCurrentWord)
        const response :SagaReturnType<typeof getTranslationAPI> = yield getTranslationAPI(word)

        yield put(fetchDetailedWordSuccess(response.data[0] as IWordDetail ))
    }
    catch (error:any){
        yield put(fetchDetailedWordFailed())
    }
}

export function* onFetchDetailedWordsStart() {
    yield takeLatest(fetchDetailedWord.type, onFetchDetailedWord)
}

export default function* dictionarySaga() {
    yield  all([call(onFetchDetailedWordsStart)])
}
