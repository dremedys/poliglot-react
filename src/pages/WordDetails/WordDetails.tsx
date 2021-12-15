import {FC, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useWordDetails} from "./wordDetails.style";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { fetchDetailedWord, setCurrentWord } from "../../store/dictionary/dictionary.slice";
import {Button, CircularProgress, Typography} from "@material-ui/core";
import {MusicNote} from "@material-ui/icons";
import {useHistory} from "react-router";

export const WordDetails:FC = () => {
    const classes = useWordDetails()
    const params = useParams<{word:string}>()
    const {currentDetailedWord,loading} = useAppSelector(state => state.dict)
    const dispatch = useAppDispatch();
    const history=useHistory()

    useEffect(() => {
        dispatch(setCurrentWord(params.word))
        dispatch( fetchDetailedWord())
    },[dispatch, params.word])

    const listen = () => {
        console.log(currentDetailedWord?.phonetics[0].audio)
         new Audio(currentDetailedWord?.phonetics[0].audio).play()
    }

    const handleBack = () => {
        history.goBack()
    }

    return (
        <div className={classes.root}>
            <Button onClick={handleBack} color='primary' variant='outlined'>
                <Typography align='left' >{'< Back to dictionary'}</Typography>
            </Button>
            {
                !loading && currentDetailedWord?  <>
                    <Typography className={classes.title} align='center'>{currentDetailedWord.word.toUpperCase()}</Typography>
                    {currentDetailedWord.origin && <h3 className={classes.origin}>Origin: {currentDetailedWord.origin}</h3>}
                    <Button
                        onClick={listen}
                        color='secondary'
                        variant='contained'
                    >
                        <MusicNote/> Listen
                    </Button>
                   <h4 className={classes.meaning}> {currentDetailedWord.meanings.length > 1 ? 'Meanings' : 'Meaning'}:</h4>
                    <div>
                        {currentDetailedWord.meanings.map(meaning => (
                        <div className={classes.partOfSpeechCard}>
                            <h4>Part of speech: <span className={classes.partOfSpeech}> {meaning.partOfSpeech}</span></h4>
                            <br/>
                            <b>
                                {meaning.definitions.length > 1 ? 'Definitions' : 'Definition'}:
                            </b>
                            <div>{meaning.definitions.map(definition => (
                                <li>
                                    Definition: {definition.definition}
                                    <br/>
                                    {definition.example && <p>For example: {definition.example}</p>}
                                </li>

                            ))}
                            </div>
                        </div>
                         ))}
                    </div>
                </> :  <div style={{marginTop:100,textAlign:'center'}}>
                    <CircularProgress/>
                </div>
            }

        </div>
    )
}
