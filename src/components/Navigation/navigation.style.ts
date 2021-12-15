import {makeStyles} from "@material-ui/core";

export const useNavigationStyles = makeStyles({
    root:{
        width: '100%',
        position: 'fixed',
        top: 0,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        background:'#202124',
        padding:"6px 10%",
    },
    navLink:{
        display:'flex',
        alignItems:'center',
        width:'15%',
        textAlign:'center',
        background:'transparent',
        borderRadius:10,
        transition:'all 200ms ease-in',
        opacity:1,
        '&:active':{
            background:'yellow',
            opacity:0.7
        }
    }
})
