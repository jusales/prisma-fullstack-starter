import * as React from "react"
import { FormGroup, Radio, Checkbox } from "react-bootstrap"

import "./form-submit-drink.css"

class SUBMITD extends React.Component {
  render() {
    return (
      <form className="submit-drink-form">
        <input 
            name="name" 
            placeholder="Venue/Bar Name" 
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
        <FormGroup>
          <Checkbox inline>{"Techno Rave"}</Checkbox>
          <Checkbox inline>{"Dance All Night"}</Checkbox>
          <Checkbox inline>{"Cheap Dranks"}</Checkbox>
          <Checkbox inline>{"Craft Cocktails"}</Checkbox>
          <Checkbox inline>{"Live Band"}</Checkbox>
          <Checkbox inline>{"Rooftop"}</Checkbox>
          <Checkbox inline>{"Grungy/Dive"}</Checkbox>
          <Checkbox inline>{"Fancy Af"}</Checkbox>
        </FormGroup>

        <textarea
          rows="4"
          cols="50"
          className="drink"
          name="drinkmessage"
          placeholder="Write your tips and recs here! You can tell us when to go, if its cash only, what the vibe is, if we have to dress up, etc. Give us the low down!"
          class="drinkmessage"
          type="drinkmessage"
          
        />

        <input name="submit" class="btn" type="submit" value="Let's Go Out!" />
      </form>
    )
  }
}

export default SUBMITD
