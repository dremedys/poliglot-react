import axios from "axios";

export const getRandomWordsAPI =   () => {
    return axios.get("https://random-word-api.herokuapp.com/word?number=5");
};

export const getTranslationAPI =  (word:string) => {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
}
