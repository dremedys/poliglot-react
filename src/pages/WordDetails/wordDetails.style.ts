import {makeStyles} from "@material-ui/core";

export const useWordDetails = makeStyles({
    root:{
        marginTop:50,
        height:'100%',
        color:'white',
        padding:'5%',
    },
    title:{
        fontSize:'1.2rem',
        fontWeight:700
    },

    origin:{
        color:"orange",
        marginBottom:20
    },
    meaning:{
        color:'blueviolet',
        fontWeight:600,
        fontSize:'1rem',
        marginBottom:15,
        marginTop:15
    },
    partOfSpeech:{
        textDecoration:'underline'
    },
    partOfSpeechCard:{
        background:'#252629',
        padding:10,
        borderRadius:3,
        marginBottom:30
    }




})
