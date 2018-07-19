import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/home-page/home-page"
import "./App.css"

import FoodFeed from  "./components/feed/foodfeed"
import DrinkFeed from  "./components/feed/drinkfeed"


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/foodfeed" component={FoodFeed}/>
          <Route exact={true} path="/drinkfeed" component={DrinkFeed}/>
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
