import React, {FC,  useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {fetchRandomWords,startTimer,setPlaying,selectAnswer} from "../../store/game/game.slice";
import {useGameStyles} from "./game.style";
import {Rules} from "../Rules/Rules";
import {GameOver} from "../../components/GameOver/GameOver";
import {CurrentStats} from "../../components/CurrentStats/CurrentStats";
import { addToDict } from "../../store/dictionary/dictionary.slice";
import {Timer} from "../../components/Timer/Timer";
import Skeleton from '@material-ui/lab/Skeleton';
import {VariantItem} from "../../components/VariantItem/VariantItem";
import {Fade} from "@material-ui/core";


export const Game:FC = () => {
    const [showCats, setShowCats] = useState(false);
    
    const {randomWords,
        wordToTranslate,
        playing,
        finished,
        questionsCount,currentIsCorrect,correctAnswer,loading} = useAppSelector(state => state.game)

    const dispatch = useAppDispatch();
    const classes = useGameStyles();

    const handleNextQuestion = (answer:string) => {
        dispatch(selectAnswer(answer))
        setShowCats(true)
        setTimeout(() => {
            setShowCats(false)
        }, 1500)

        if(!currentIsCorrect) {
            dispatch(addToDict({wordToTranslate, correctAnswer}))
        }
        dispatch(fetchRandomWords());
    }
    const handleStartGame = () => {
        dispatch(setPlaying(true))
        dispatch(fetchRandomWords())
        dispatch(startTimer())
    }

    if(!playing) {
        return <Rules handleStartGame={handleStartGame}/>
    }

    if(!finished){
        return (
            <div className={classes.root}>
                <Timer/>
                <CurrentStats/>

                <p className={classes.question}>{questionsCount+1}.Which word's transcript is this word:
                    <br/>
                    {loading === 'SUCCESS' ?
                        <b className={classes.wordToTranslate}>{wordToTranslate} </b>
                        : <Skeleton variant='text' width={150} height={60}/>}
                </p>

                <div className={classes.answers}>
                    {randomWords.map((item,idx) =>
                            <div key={idx} className={classes.answerWrapper}>
                                {loading ==='SUCCESS' ?
                                    <VariantItem
                                        handleNextQuestion={handleNextQuestion}
                                        variant={item}
                                    /> :
                                    <Skeleton width={200} height={45} variant='rect'/>
                                }
                            </div>
                    )
                    }
                </div>

                <Fade
                    in={showCats}
                    timeout={400}
                >
                    <div className={classes.reaction}>
                        {currentIsCorrect ?
                            <img className={classes.reaction__img} alt='happy cat' src='https://acegif.com/wp-content/gifs/happy-cat-21.gif' /> :
                            <img className={classes.reaction__img} alt='sad cat' src='https://i.pinimg.com/originals/60/fb/1f/60fb1f9ec36ef7e8972d27661c15e2a9.gif'/>
                        }
                    </div>
                </Fade>
            </div>
        )
    }
    return <GameOver/>

}
