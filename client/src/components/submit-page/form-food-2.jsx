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


{/* <section id="last">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="margin-top-0 wow fadeIn">Get in Touch</h2>
                    <hr class="primary">
                    <p>We love feedback. Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <form class="contact-form row">
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Phone">
                        </div>
                        <div class="col-md-12">
                            <label></label>
                            <textarea class="form-control" rows="9" placeholder="Your message here.."></textarea>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <label></label>
                            <button type="button" data-toggle="modal" data-target="#alertModal" class="btn btn-primary btn-block btn-lg">Send <i class="ion-android-arrow-forward"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section> */}

export default SUBMITF
