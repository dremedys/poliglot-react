import {FC} from "react";
import {useDictionaryStyles} from "./dictionary.style";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Button} from "@material-ui/core";
import { deleteFromDict } from "../../store/dictionary/dictionary.slice";
import {useHistory} from "react-router";

export const Dictionary:FC = () => {
    const classes = useDictionaryStyles();
    const {dictionary} = useAppSelector(state => state.dict);
    const dispatch = useAppDispatch();
    const history = useHistory()

    const goToDetails = (word:string) => {
        history.push('/dict/'+word)
    }

    return (
        <div className={classes.root}>
            <h1>Dictionary</h1>
            <div className={classes.cards}>
                {
                    dictionary.length > 0 ?
                        dictionary.map(item => {
                                return (
                                    <div className={classes.card} style={{background:Math.floor(Math.random()*16777215).toString(16)}}>
                                        <p>
                                            {item.correctAnswer} - {item.wordToTranslate}
                                        </p>
                                        <Button
                                            onClick={() => {goToDetails(item.correctAnswer || '')}}
                                            color='secondary'
                                        >
                                            Read more...

                                        </Button>
                                        <br/>
                                        <button
                                            onClick={() => {
                                                dispatch(deleteFromDict(item))
                                            }}
                                            className={classes.removeBtn}
                                        >
                                            X
                                        </button>
                                    </div>
                                )
                            })
                        :
                        <h2>Wow, you have no words in dictionary. Maybe you are too smart to be true :)
                            <br/>
                            Or maybe you deleted all words to pretend...ha-ha-ha
                        </h2>
                }
            </div>
        </div>
    )
}
