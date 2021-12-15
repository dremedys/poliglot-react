import {makeStyles} from "@material-ui/core";

export const useDictionaryStyles = makeStyles({
    root:{
        height:'100%',
        background:'#202124',
        position:'relative',
        color:'white',
        textAlign:'center',
        marginTop:70
    },
    cards:{
        display:'flex',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        alignItems:'center'
    },
    card:{
        padding: 30,
        border:'1px solid white',
        margin:10,
        background:'ghostwhite',
        color:'black',
        borderRadius:3,
        position:'relative',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
    },
    title:{
        textAlign:'center'
    },
    removeBtn:{
        position:'absolute',
        top:5,
        right:5,
        cursor:'pointer',
        borderRadius:5,
        border:'none',
        background:"red",
        color:'white',
        transition:'all 200ms ease-in',
        fontSize:15,
        fontWeight:800,
        '&:hover':{
            background:'orangered'
        },
        '&:active':{
            background:'lightgray'
        }
    }
})
