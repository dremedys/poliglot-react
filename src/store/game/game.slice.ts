import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {GIVEN_TIME_TO_PLAY} from "../../constans";

interface IGameState {
    leftTime:number,
    randomWords:string[],
    wordToTranslate:string | null,
    correctAnswer:string|null,
    questionsCount:number,
    correctCount:number,
    finished: boolean,
    currentIsCorrect:boolean,
    playing:boolean,
    loading: 'FAILED' | "PROGRESS" | "SUCCESS"
}

const initialState: IGameState = {
    leftTime:GIVEN_TIME_TO_PLAY,
    randomWords: new Array(5).fill(''),
    wordToTranslate:null,
    correctAnswer:null,
    questionsCount:0,
    correctCount:0,
    finished:false,
    currentIsCorrect:false,
    playing:false,
    loading:  'SUCCESS'
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        fetchRandomWords: state => {},
        fetchRandomWordsStart: state => {
            state.loading = 'PROGRESS'
        },
        fetchRandomWordsSuccess:(state, action: PayloadAction<string[]>) => {
            state.randomWords = action.payload
        },
        setCorrectAnswer: (state, action:PayloadAction<string>) => {
            state.correctAnswer = action.payload
        },
        setRandomWords:(state,action:PayloadAction<string[]>) => {
            state.randomWords = action.payload
        },
        fetchTranslate: state => {},
        fetchTranslateSuccess:(state,action:PayloadAction<string>) => {
            state.wordToTranslate = action.payload
            state.loading = 'SUCCESS'

        },
        selectAnswer:(state, action:PayloadAction<string>) => {
            if(state.correctAnswer === action.payload) {
                state.correctCount += 1;
                state.currentIsCorrect = true;
            }
            else {
                state.currentIsCorrect = false;
            }
        },
        decrementTimer: (state) => {
            if(state.leftTime > 0){
                state.leftTime -= 1;
            }
            if(state.leftTime === 0) {
                state.finished = true;
            }
        },
        startTimer:(state) => {},
        incrementQuestionCount: (state) => {
            state.questionsCount += 1;
        },
        setPlaying: (state ,action:PayloadAction<boolean>)=> {state.playing = action.payload;},
        resetGame:(state) => {
            state.questionsCount = 0;
            state.leftTime = GIVEN_TIME_TO_PLAY
            state.playing = false;
            state.finished = false;
            state.currentIsCorrect = false
            state.correctCount = 0;
        },
    },
});

export const {
    fetchRandomWords,
    fetchRandomWordsSuccess,
    setCorrectAnswer,
    fetchTranslate,
    fetchTranslateSuccess,
    decrementTimer,
    startTimer,
    setPlaying,selectAnswer,
    resetGame,
    incrementQuestionCount,
    setRandomWords,
    fetchRandomWordsStart
} = gameSlice.actions;

export default gameSlice.reducer;
