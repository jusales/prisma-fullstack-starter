import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import SubmitPage from "./components/submit-page/submit-page"
//import HomePage from "./components/home-page/home-page"
import Feed from "./components/feed/feed"
import "./App.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/submit" component={SubmitPage} />
          {/* <Route exact={true} path="/" component={HomePage} /> */}
          <Route exact={true} path="/feed" component={Feed} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
