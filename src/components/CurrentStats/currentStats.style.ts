import {makeStyles} from "@material-ui/core";

export const useCurrentStatsStyles =  makeStyles({
    root:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'70%',
        fontSize:'1.2rem',
        margin:'0 auto',
        marginTop: 50

    },
    timer:{
        padding:5,
        background:'red',
        color:'white',
        borderRadius:3,
        boxShadow:'3px 3px 0px 0px #FFFFFF'
    },
    score:{
        padding:5,
        background:'blue',
        color:'white',
        borderRadius:3,
        fontWeight:600,
        boxShadow:'3px 3px 0px 0px #FFFFFF'

    }
})
