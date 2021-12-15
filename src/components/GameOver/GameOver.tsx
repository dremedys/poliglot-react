import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Button, Fade, Slide} from "@material-ui/core";
import { resetGame } from "../../store/game/game.slice";
import {useGameOverStyles} from "./gameOver.style";
import {useHistory} from "react-router";


export const GameOver:FC = () => {
    //store hooks
    const dispatch = useAppDispatch();
    const {correctCount} = useAppSelector(state => state.game)

    const classes = useGameOverStyles()
    const history = useHistory()

    return (
       <Slide in={true} timeout={1000}>
           <Fade in timeout={500}>
               <div className={classes.root}>
                   <h4 className={classes.title}>GAME IS OVER</h4>
                   <h4 className={classes.score}>Your score: {correctCount}</h4>

                   <Button
                       variant='contained'
                       color='secondary'
                       onClick={() => {dispatch(resetGame())}}
                   >
                       Restart
                   </Button>
                   <Button
                       variant='contained'
                       color='primary'
                       onClick={() => {history.push('/stats')}}
                   >
                       Go to stats
                   </Button>
                   <Button
                       variant='contained'
                       color='secondary'
                       onClick={() => {history.push('/dict')}}
                   >
                       Go to dictionary
                   </Button>
               </div>
           </Fade>
       </Slide>
    )
}
