import {makeStyles} from "@material-ui/core";

export const useStatsStyles = makeStyles({
    root:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        background:'#202124',
        position:'relative',
        color:'white',
        fontWeight:600,
    },
    bestScore:{
        borderRadius:7,
        color:'black',
        background:'yellow',
        padding:7,
        fontSize:16,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
    },
    playedTimes:{
        borderRadius:7,
        color:'white',
        background:'orange',
        padding:7,
        fontSize:16,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'

    },
    overall:{
        borderRadius:7,
        color:'white',
        background:'cadetblue',
        padding:7,
        fontSize:16,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'

    },
    correct:{
        borderRadius:7,
        color:'white',
        background:'forestgreen',
        padding:7,
        fontSize:16,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'

    }

})
