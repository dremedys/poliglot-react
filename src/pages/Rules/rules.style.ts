import {makeStyles} from "@material-ui/core";

export const useRulesStyles = makeStyles({
    root:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:60,
        paddingTop:20
        // background:'radial-gradient(50% 50% at 50% 50%, #4398F7 0%, #086DDE 100%)'
    },
    title:{
        fontWeight:700,
        fontSize: '2rem',
        marginBottom:'1%'
    },
    card:{
        maxWidth:'80%',
        marginBottom:'3%',
        fontSize:'1rem',
        lineHeight:'30px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    }
})
