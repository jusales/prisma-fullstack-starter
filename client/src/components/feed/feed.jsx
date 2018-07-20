import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Checkbox } from "react-bootstrap"
import Card from "../card/card"
import "./feed.css"

const GET_RES = gql`
  query business($where: BusinessWhereInput) {
    business(where: $where) {
      id
      zomatoID
      name
      url
      address
      locality
      city
      latitude
      longitude
      price
      hours
      type
    }
  }
`

// data.__type.fields.foreach(field => {
//   createButton(field.name)
// })

/**
 * TODOS to implement Filter query:
 * 0) (optional) use introspection query to get all Tag and Cuisine options OR just hard code the list of tags/cuisines for now
 * 1) BUILD QUERY: Loop over tag/cuisine options and create checkbox for user to "select" a tag
 *    1a) Create a state variable to track each tag/cuisine checkbox's status
 *    1b) As we create that checkbox, link the checkbox's status to the state variable so they automatically update
 * 2) SEND QUERY: In the render function, run the businesses() query with inputs based on the tag/cuisine state variables
 * 3) DISPLAY RESULTS: Display each Business based on what the businesses() query returns
 * 4) (optional) Implement a cache that stores the value of the businesses() query to improve performance
 */

class Feed extends React.Component {
  state = {
    tags: {
      BRUNCH: false,
      LUNCH: false,
      DINNER: false,
      DRUNCHIES: false,
      CRAFTCOCKTAILS: false,
      INSTAWORTHY: false,
      FANCYAF: false,
      TECHNORAVE: false,
      DANCEALLNIGHT: false,
      LIVEBAND: false,
      ROOFTOP: false,
      GRUNGY: false,
      TREATYOSELF: false
    }, 
    cuisine: {
      ITALIAN: false,
      ASIAN: false,
      INDIAN: false,
      MISCELLANEOUS: false,
      LOCAL: false,
      VEGAN: false,
      VEGETARIAN: false,
      MEDITERRANEAN: false,
      MEXICAN: false,
      AMERICAN: false,
    }
  }

  render() {
    return (
      <div>
        <Query
          query={GET_RES}
          variables={{
            where: {
              tags: this.state.tags
            }
          }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return "LOading..."
            }
            if (error) {
              console.log("ERROR HERE********")
              return error
            }

            return (
              <div className="feed-wrapper">
                <div className="tag-inputs">
                  {Object.keys(this.state.tags).map(tag => {
                    return (
                      <div className="tag-checkbox">
                        <label>
                          {tag}
                          <Checkbox
                            key={tag}
                            className="tags-box"
                            checked={this.state.tags[tag]}
                            onClick={() => {
                              this.setState({
                                ...this.state,
                                tags: {
                                  ...this.state.tags,
                                  [tag]: !this.state.tags[tag]
                                }
                              })
                            }}
                          />
                        </label>
                      </div>
                    )
                  })}
                  {Object.keys(this.state.cuisines).map(cus => {
                    return (
                      <div className="tag-checkbox">
                        <label>
                          {cus}
                          <Checkbox
                            key={cus}
                            className="tags-box"
                            checked={this.state.cuisine[cus]}
                            onClick={() => {
                              this.setState({
                                ...this.state,
                                cuisine: {
                                  ...this.state.cuisine,
                                  [cus]: !this.state.cuisine[cus]
                                }
                              })
                            }}
                          />
                        </label>
                      </div>
                    )
                  })}
                </div>
                {data.business.map(business => {
                  return <Card {...business} />
                })}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Feed
