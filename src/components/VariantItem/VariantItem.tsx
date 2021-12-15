import React, {FC} from "react";
import {Button} from "@material-ui/core";
import {useQuestionItemStyles} from "./VariantItemStyles";

type VariantItemProps = {
    handleNextQuestion: (variant:string) => void,
    variant: string
}

export const VariantItem:FC<VariantItemProps> = ({variant, handleNextQuestion}) => {
    const classes = useQuestionItemStyles()

    return (
        <Button
            onClick={() => {handleNextQuestion(variant)}}
            variant='contained'
            color='primary'
            key={variant}
            className={classes.answer}
        >
            {variant}
        </Button>
    )
}
