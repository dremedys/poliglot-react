import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import theme from "./theme";
import {Game} from "./pages/Game/Game";
import {Stats} from "./pages/Stats/Stats";
import {Dictionary} from "./pages/Dictionary/Dictionary";
import {Navigation} from "./components/Navigation/Navigation";
import {WordDetails} from "./pages/WordDetails/WordDetails";


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
            <Route exact component={Game} path='/game'/>
            <Route exact component={Stats} path='/stats'/>
            <Route exact component={Dictionary} path='/dict'/>
            <Route exact component={WordDetails} path='/dict/:word'/>
            <Redirect to='/game'/>
        </Switch>
          <Navigation/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
