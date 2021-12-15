import React, {FC, useEffect, useRef, useState} from "react";
import {useAppSelector} from "../../store/hooks";
import {useStatsStyles} from "./stats.styles";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Slide} from "@material-ui/core";

type SlideDirection = 'left'|'right'|'up'|'down'

export const Stats:FC = () => {
    const classes = useStatsStyles();
    const {bestScore,correctTimes,playedTimes,questionCount} = useAppSelector(state => state.stats)
    
    const accuracyPercentage =(correctTimes * 100 / questionCount).toFixed(2)

    const initialIdx = -1;
    const [counter, setCounter] = useState(initialIdx);
    const counterRef = useRef(initialIdx);

    const dirs: SlideDirection[]= ['up','left','down','right']

    const increment = () => setCounter(counterRef.current + 1)

    useEffect(() => {counterRef.current = counter})

    const isElementShown = (idx: number) => idx <= counter


    const elements = [
        <p className={classes.bestScore}>Best score: {bestScore}</p>,
        <p className={classes.playedTimes}>You played
            {playedTimes > 1 ?  playedTimes+ ' times' : ' once'}
        </p>,
        <p className={classes.overall}>Answered overall: {questionCount} questions</p>,
        <p className={classes.correct}>And answered correct {correctTimes} times...</p>,
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                styles={{
                    path: {
                        stroke: `rgba(62, 152, 199, ${50 / 100})`,
                        strokeLinecap: 'butt'},
                    trail: {stroke: '#d6d6d6'},
                    text: {fill: 'white', fontSize: 9},
                    background: {fill: '#3e98c7'}}}
                value={correctTimes * 100 / questionCount}  text={`Accuracy ${accuracyPercentage}%`} />
        </div>
    ]

    useEffect(() => {
        const interval= setInterval(
            () =>{
                if(counterRef.current <= elements.length - 1)
                    increment()
                else
                    clearInterval(interval)}
            , 900);
        return () => {
            clearInterval()
        }
    }, [elements.length]);

    return (
        <div className={classes.root}>
            {
                playedTimes > 0 ?
                    <>
                        {
                            elements.map((el,idx) => {
                                return <Slide
                                    timeout={800}
                                    in={isElementShown(idx)}
                                    direction={dirs[idx%4]}
                                >
                                    {React.cloneElement(el)}
                                </Slide>
                            })
                        }

                    </>:
                    <h2>You need to play at least once to see the stats.</h2>
            }
        </div>
    )
}
