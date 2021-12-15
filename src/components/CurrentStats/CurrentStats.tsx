import {useAppSelector} from "../../store/hooks";
import React from "react";
import {useCurrentStatsStyles} from "./currentStats.style";

export const CurrentStats = () => {
    const {leftTime, correctCount,} = useAppSelector(state => state.game);
    const classes = useCurrentStatsStyles();

    return (
        <div className={classes.root}>
            <h3 className={classes.timer}>Left time: {leftTime}</h3>
            <p className={classes.score}>Score : {correctCount}</p>
        </div>
    )
}
