import * as React from "react"
import { FormGroup, Radio, Checkbox } from "react-bootstrap"
import "./form-submit-food.css"

class SUBMITF extends React.Component {
  render() {
    return (
      <form className="submit-food-form">
        <input
          name="name"
          placeholder="Restaurant Name"
          class="name"
        
        />
        <input
          name="location"
          placeholder="Where is it?"
          class="location"
          type="location"
          
        />
        <input
          name="url"
          placeholder="Website"
          class="url"
          type="url"
          
        />
        <input
          name="hours"
          placeholder="When is it open?"
          class="hours"
          type="hours"
          
        />
        <input
          name="locality"
          placeholder="Neighborhood"
          class="locality"
          type="locality"
          
        />
        <input
          name="cuisine"
          placeholder="Cuisine Type"
          class="cuisine"
          type="cuisine"
          
        />
        <input
          name="price"
          placeholder="What's it going to cost me?"
          class="price"
          type="price"
          
        />
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
        <input
          name="tags"
          placeholder="Give me some tags!"
          class="tags"
          type="tags"
          
        />
        <FormGroup className="tags">
          <Checkbox inline>{"Brunch"}</Checkbox>
          <Checkbox inline>{"Lunch"}</Checkbox>
          <Checkbox inline>{"Dinner"}</Checkbox>
          <Checkbox inline>{"Drunchies"}</Checkbox>
          <Checkbox inline>{"Craft Cocktails"}</Checkbox>
          <Checkbox inline>{"Insta-Worthy"}</Checkbox>
          <Checkbox inline>{"Fancy Af"}</Checkbox>
          <Checkbox inline>{"Treat Yo Self"}</Checkbox>
        </FormGroup>
        
        <textarea
          rows="4"
          cols="50"
          className="food"
          name="foodmessage"
          placeholder="Write your tips and recs here! You can tell us what to eat, when to go, if its cash only, if we need a reservation, etc. Give us the low down!"
          class="foodmessage"
          type="foodmessage"
        />

        <input
          name="submit"
          class="submitbtn"
          type="submit"
          value="Submit Dem Eats"
        />
      </form>
    )
  }
}

export default SUBMITF
