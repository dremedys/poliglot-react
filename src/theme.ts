import { createTheme } from "@material-ui/core";
import {yellow,grey} from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
      light: yellow[900],
      dark: yellow[400]
    },
    secondary: {
      main: '#1486D3',
      light: '#E0E0E0'
    },
    success: {
      main: '#27AE60'
    },
    info: {
      main: '#EBEBEB',
      light: '#F2F2F2',
      dark: '#4F4F4F'
    },
    error: {
      main: '#EB5757'
    },
    text: {
      primary: grey[700],
      secondary: '#BDBDBD',
      hint: '#828282'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F7F7'
    }

  },
  typography: {
    fontFamily: [
      'Montserrat'
    ].join(','),

  },
  overrides: {
    MuiCard:{
      root:{
        // width:'80%',
        borderRadius: 10,
        background:'rgb(53, 55, 64)',
        color:'white',
        fontWeight:700
      },

    }
  },

});



export default theme;
