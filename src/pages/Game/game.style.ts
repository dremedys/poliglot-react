import {makeStyles} from "@material-ui/core";

export const useGameStyles = makeStyles(theme => ({
    root:{
        height:'100%',
        background:'#202124',
        position:'relative',
        marginTop:100,
    },
    title:{
        fontWeight:700,
        fontSize: '2rem'
    },
    questionList:{

    },
    question:{
        fontWeight:700,
        color:'white',
        fontSize:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    wordToTranslate:{
        fontWeight:900,
        fontSize:'1.1rem',
        textAlign:'center',
        textDecoration:"underline",
        animation:'$blinker 2s linear infinite',
        width: 150,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    '@keyframes blinker': {
        '50%':{
            opacity: 0.7
        }
    },
    answers:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',

    },
    answerWrapper:{
        marginBottom: 20
    },
    reaction:{
        position:'absolute',
        top: '20%',
        right:200,
    },
    reaction__img:{
        width:200,
    },
    rects:{
    }
}))
