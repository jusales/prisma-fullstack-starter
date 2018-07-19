import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import SubmitFood from "./components/submit-page/form-food-2"
// import SubmitDrink from "./components/submit-page/form-submit-drink"
import HomePage from "./components/home-page/home-page"
import Feed from "./components/feed/feed"
import "./App.css"

import FoodFeed from "./components/feed/foodfeed"
import DrinkFeed from "./components/feed/drinkfeed"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/foodfeed" component={FoodFeed} />
          <Route exact={true} path="/drinkfeed" component={DrinkFeed} />
          <Route exact={true} path="/submitfood" component={SubmitFood} />
          {/* <Route exact={true} path="/submitdrink" component={SubmitDrink} /> */}
          <Route exact={true} path="/feed" component={Feed} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
