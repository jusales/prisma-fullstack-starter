import * as React from "react"
import { FormGroup, Radio, Checkbox } from "react-bootstrap"
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

const CREATE_BUSINESS = gql`
  mutation createBusiness($data: BusinessCreateInput!) {
    createBusiness(data: $data) {
      id
      name
      url
    }
  }
`

import "./form-submit-drink.css"

class SUBMITD extends React.Component {
  state = {
    name: "",
    url: "",
    hours: "",
    locality: "",
    price: "",
    tags: {
      BRUNCH: false,
      LUNCH: false,
      DINNER: false,
      DRUNCHIES: false,
      CRAFTCOCKTAILS: false,
      INSTAWORTHY: false,
      FANCYAF: false,
      TREATYOSELF: false
    },
    latitude: null,
    longitude: null,
    price: "ONE"
  }

  handleAddressChange = address => {
    this.setState({ address })
  }

  handleAddressSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latitude: latLng.lat,
          longitude: latLng.lng
        })
      })
      .catch(error => console.error("Error", error))
  }

  render() {
    return (
      <div>
        <h1>Feed Me Please</h1>

        <Mutation mutation={CREATE_BUSINESS}>
          {(createBusiness, { data, loading, error }) => {
            return (
              <section className="contact-wrap">
                <form
                  action=""
                  className="submit-food-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    const { data } = await createBusiness({
                      variables: {
                        data: {
                          ...this.state,
                          tags: {
                            create: {
                              ...this.state.tags
                            }
                          },
                          cuisine: {
                            create: {
                              ...this.state.cuisine
                            }
                          }
                        }
                      }
                    })
                  }}
                >
                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">Restaurant Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={e => this.setState({ name: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">Where is it?</label>
                      <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                        onSelect={this.handleAddressSelect}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading
                        }) => (
                          <div>
                            <input
                              {...getInputProps({
                                placeholder: "Search Places ...",
                                className: "location-search-input"
                              })}
                            />
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map(suggestion => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item"
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                  ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer"
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer"
                                    }
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">Website</label>
                      <input
                        type="text"
                        name="url"
                        onChange={e => this.setState({ url: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">When is it open?</label>
                      <input
                        type="text"
                        name="hours"
                        onChange={e => this.setState({ hours: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">Neighborhood</label>
                      <input
                        type="text"
                        name="locality"
                        onChange={e =>
                          this.setState({ locality: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">Cuisine Type</label>
                      <FormGroup className="form-control">
                        {Object.keys(this.state.cuisine).map(key => {
                          const value = this.state.cuisine[key]
                          return (
                            <Checkbox
                              inline
                              onChange={() => {
                                this.setState({
                                  ...this.state,
                                  cuisine: {
                                    ...this.state.cuisine,
                                    [key]: !value
                                  }
                                })
                              }}
                              checked={value}
                            >
                              {key}
                            </Checkbox>
                          )
                        })}
                      </FormGroup>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
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
                          <Radio name="radioGroup" inline>
                          {"$$$"}
                        </Radio>
                        <Radio name="radioGroup" inline>
                          {"$$$$"}
                        </Radio>
                        <Radio name="radioGroup" inline>
                          {"$$$$$"}
                        </Radio>
                      </FormGroup>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-block">
                      <label for="">Tag It!</label>
                      <FormGroup className="form-control">
                        <FormGroup className="form-control">
                          {Object.keys(this.state.tags).map(key => {
                            const value = this.state.tags[key]
                            return (
                              <Checkbox
                                inline
                                onChange={() => {
                                  this.setState({
                                    ...this.state,
                                    tags: {
                                      ...this.state.tags,
                                      [key]: !value
                                    }
                                  })
                                }}
                                checked={value}
                              >
                                {key}
                              </Checkbox>
                            )
                          })}
                        </FormGroup>
                      </FormGroup>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    {/* <div className="input-block textarea">
                      <label for="">
                        Write your tips and recs here! You can tell us what to
                        eat, when to go, if its cash only, if we need a
                        reservation, etc. Give us the low down!
                      </label>
                      <textarea
                        rows="4"
                        type="text"
                        onChange={e =>
                          this.setState({ comment: e.target.value })
                        }
                        name="foodmessage"
                        className="form-control"
                      />
                    </div> */}
                  </div>

                  <div className="col-sm-12">
                    <button className="square-button" 
                    onClick={() => this.props.history.push("/foodfeed")}>
                    Submit Dem Eats!
                    </button>
                  </div>
                </form>
              </section>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default SUBMITD
