import React, {FC} from "react";
import {Button, Card, CardContent, CardHeader, Fade, Typography} from "@material-ui/core";
import {useRulesStyles} from "./rules.style";
import {GIVEN_TIME_TO_PLAY} from "../../constans";

type RulesProps = {
    handleStartGame: () => void
}

export const Rules:FC<RulesProps> = ({handleStartGame}) => {
    const classes = useRulesStyles();

    return (
        <Fade in timeout={2000}>
            <div className={classes.root}>
                <Typography
                    color='secondary'
                    className={classes.title}>
                    Welcome to the polyglot!
                </Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <CardHeader title='RULES'/>
                        <CardContent>
                            <p>
                                5 words are given and 1 transcript is given.
                                You must guess which of words have this transcript.
                                Guess as many as possible words in <b>{GIVEN_TIME_TO_PLAY}</b> seconds.
                            </p>
                            <br/>
                            <p>
                                If you can't guess, you can see those words later in dictionary page
                                and read some details or remove it.
                                Also you can see your stats in statistics page.
                                <br/>
                                Good luck!
                            </p>
                        </CardContent>
                    </CardContent>
                </Card>
                <Button
                    onClick={handleStartGame}
                    color='secondary'
                    variant='contained'
                    size='large'
                >
                    Start
                </Button>
            </div>
        </Fade>
    )
}
