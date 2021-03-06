import React from "react";
////Import Middleware////
import { Switch, Route, BrowserRouter } from "react-router-dom";
////Import CSS////
import "./App.css";
///Components///
import Match from "./components/Match";
import Ranking from "./components/Ranking";
import Homepage from "./components/Homepage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              path="/match"
              component={Match}
            />
            <Route path="/ranking" component={Ranking} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
