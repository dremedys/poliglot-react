import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IStatsState {
    playedTimes:number,
    correctTimes:number,
    questionCount:number,
    bestScore:number
}

const initialState:IStatsState = {
    playedTimes:0,
    correctTimes:0,
    questionCount:0,
    bestScore:0
}

export const statsSlice = createSlice({
    initialState,
    name:'stats',
    reducers:{
        updateStats: (state, action:PayloadAction<{correctCount:number,questionCount:number}>) => {
            const {correctCount,questionCount} = action.payload
            state.questionCount += questionCount;
            state.correctTimes = correctCount;
            state.bestScore = Math.max(state.bestScore, correctCount);
            state.playedTimes += 1;
        }
    }
})

export const {
    updateStats
} = statsSlice.actions


export default statsSlice.reducer
