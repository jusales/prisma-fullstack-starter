import * as React from "react"
import "./submit-page.css"
import SUBMITF from "./form-food-2.jsx"
// import SUBMITD from "./form-submit-drink.jsx"

class SubmitPage extends React.Component {
  render() {
    return (
      <div class="submit-page-container">
        <div class="submit-page-forms">
          <div className="form-food">
            <SUBMITF />
          </div>
          {/* <div className="form-drink">
            <SUBMITD />
          </div> */}
        </div>
      </div>
    )
  }
}

export default SubmitPage
