import * as React from "react"
import { FormGroup, Radio, Checkbox } from "react-bootstrap"
import "./form-food-2.css"


class SUBMITF extends React.Component {
  render() {
    return (
      <div>
        <h1>Feed Me Please</h1>

        <section className="contact-wrap">
          <form action="" className="submit-food-form">
            <div className="col-sm-12">
              <div className="input-block">
                <label for="">Restaurant Name</label>
                <input type="text" name="name" className="form-control" />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="input-block">
                <label for="">Where is it?</label>
                <input type="text" name="location" className="form-control" />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="input-block">
                <label for="">Website</label>
                <input type="text" name="url" className="form-control" />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="input-block">
                <label for="">When is it open?</label>
                <input type="text" name="hours" className="form-control" />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="input-block">
                <label for="">Neighborhood</label>
                <input type="text" name="locality" className="form-control" />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="input-block">
                <label for="">Cuisine Type</label>
                <input type="text" name="cuisine" className="form-control" />
              </div>
            </div>

            <div className="col-sm-12">
              <div className="non-input-block">
                <label for="">What's it going to cost me?</label>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    {"$"}
                  </Radio>
                  <Radio name="radioGroup" inline>
                    {"$$"}
                  </Radio>
                  <Radio name="radioGroup" inline>
                    {"$$$"}
                  </Radio>
                </FormGroup>
                </div>
              </div>
            

            <div className="col-sm-12">
              <div className="non-input-block">
                <label for="">Tag It!</label>
                <FormGroup className="form-control">
                  <Checkbox inline>{"Brunch"}</Checkbox>
                  <Checkbox inline>{"Lunch"}</Checkbox>
                  <Checkbox inline>{"Dinner"}</Checkbox>
                  <Checkbox inline>{"Drunchies"}</Checkbox>
                  <Checkbox inline>{"Craft Cocktails"}</Checkbox>
                  <Checkbox inline>{"Insta-Worthy"}</Checkbox>
                  <Checkbox inline>{"Fancy Af"}</Checkbox>
                  <Checkbox inline>{"Treat Yo Self"}</Checkbox>
                </FormGroup>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="input-block textarea">
                <label for="">
                  Write your tips and recs here! You can tell us what to eat,
                  when to go, if its cash only, if we need a reservation, etc.
                  Give us the low down!
                </label>
                <textarea
                  rows="4"
                  type="text"
                  name="foodmessage"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-sm-12">
              <button className="square-button">Submit Dem Eats!</button>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default SUBMITF
