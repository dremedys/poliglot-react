import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDictItem {
    wordToTranslate:string | null,
    correctAnswer:string | null
}
export interface IWordDetail{
    word:string,
    phonetics:{
        text:string,
        audio:string
    }[],
    meanings:{
        partOfSpeech:string,
        definitions:{
            definition:string,
            example:string
        }[]
    }[],
    origin:string,

}
interface IDictionaryState {
    dictionary: IDictItem[],
    currentDetailedWord:IWordDetail | null,
    currentWord:string,
    loading:boolean,
    error:boolean

}

const initialState:IDictionaryState = {
    dictionary: [],
    currentDetailedWord:null,
    currentWord:'',
    loading:false,
    error:false
}

export const dictionarySlice = createSlice({
    name:'dictionary',
    initialState,
    reducers:{
        fetchDetailedWord:(state) => {},
        startFetchingDetailWord: (state) => {
            state.loading = true
        },
        addToDict : (state, action:PayloadAction<IDictItem>) => {
            // @ts-ignore
            if(!state.dictionary.includes(item => item.wordToTranslate === action.payload.wordToTranslate)){
                state.dictionary.push(action.payload)
            }
        },
        setCurrentWord:(state, action:PayloadAction<string>) => {
            state.currentWord = action.payload
        },
        deleteFromDict: (state,action:PayloadAction<IDictItem>) => {
            state.dictionary = state.dictionary.filter(item => item.wordToTranslate !== action.payload.wordToTranslate)
        },
        fetchDetailedWordSuccess:(state, action:PayloadAction<IWordDetail>) => {
            state.currentDetailedWord = action.payload
            state.loading = false
        },
        fetchDetailedWordFailed:(state) => {
            state.error = true
            state.loading = false
        }
    }
})

export const {
    addToDict,
    deleteFromDict,
    fetchDetailedWord,
    fetchDetailedWordSuccess,
    setCurrentWord,
    startFetchingDetailWord,
    fetchDetailedWordFailed
} = dictionarySlice.actions

export default dictionarySlice.reducer
