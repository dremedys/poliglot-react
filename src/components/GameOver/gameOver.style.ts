import {makeStyles} from "@material-ui/core";

export const useGameOverStyles = makeStyles({
    root:{
        height:'60%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        background:'#202124',
        position:'relative',
        color:'white',
        marginTop:100
    },
    title:{
        fontSize:'2rem',
        color:'yellow',
        fontWeight:800
    },
    score:{
        fontSize:'1.5rem'
    }
})
