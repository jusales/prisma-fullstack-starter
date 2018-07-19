import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import SubmitPage from "./components/submit-page/submit-page"

import "./App.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/submit" component={SubmitPage} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
