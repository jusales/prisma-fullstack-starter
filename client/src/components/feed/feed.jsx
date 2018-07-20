import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Checkbox } from "react-bootstrap"
import Card from "../card/card"
import "./feed.css"
// import "./generated/prisma.graphql"

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
      type
      comment
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
      OR: [
        { BRUNCH: false },
        { LUNCH: false },
        { DINNER: false },
        { DRUNCHIES: false },
        { CRAFTCOCKTAILS: false },
        { INSTAWORTHY: false },
        { FANCYAF: false },
        { TECHNORAVE: false },
        { DANCEALLNIGHT: false },
        { LIVEBAND: false },
        { ROOFTOP: false },
        { GRUNGY: false },
        { TREATYOSELF: false }
      ]
    },
    cuisine: {
      OR: [
        { ITALIAN: false },
        { ASIAN: false },
        { INDIAN: false },
        { MISCELLANEOUS: false },
        { LOCAL: false },
        { VEGAN: false },
        { VEGETARIAN: false },
        { MEDITERRANEAN: false },
        { MEXICAN: false },
        { AMERICAN: false }
      ]
    },
    tagsTrue: {
      OR: [
        { BRUNCH: true },
        { LUNCH: true },
        { DINNER: true },
        { DRUNCHIES: true },
        { CRAFTCOCKTAILS: true },
        { INSTAWORTHY: true },
        { FANCYAF: true },
        { TECHNORAVE: true },
        { DANCEALLNIGHT: true },
        { LIVEBAND: true },
        { ROOFTOP: true },
        { GRUNGY: true },
        { TREATYOSELF: true }
      ]
    },
    cuisineTrue: {
      OR: [
        { ITALIAN: true },
        { ASIAN: true },
        { INDIAN: true },
        { MISCELLANEOUS: true },
        { LOCAL: true },
        { VEGAN: true },
        { VEGETARIAN: true },
        { MEDITERRANEAN: true },
        { MEXICAN: true },
        { AMERICAN: true }
      ]
    }
  }

  render() {
    return (
      <div className="page">
        <Query
          query={GET_RES}
          variables={{
            where: {
              tags: this.state.tags.OR.map(
                tag => tag[Object.keys(tag)[0]]
              ).reduce((a, b) => a || b)
                ? this.state.tags
                : undefined,
              cuisine: this.state.cuisine.OR.map(
                cuisine => cuisine[Object.keys(cuisine)[0]]
              ).reduce((a, b) => a || b)
                ? this.state.cuisine
                : undefined
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
                  {this.state.tags.OR.map((tag, idx) => {
                    return (
                      <div className="tag-checkbox">
                        <label>
                          {Object.keys(tag)[0]}
                          <Checkbox
                            key={Object.keys(tag)[0]}
                            className="tags-box"
                            checked={
                              this.state.tags.OR[idx][Object.keys(tag)[0]]
                            }
                            onClick={() => {
                              this.state.tags.OR[idx][
                                Object.keys(tag)[0]
                              ] = !this.state.tags.OR[idx][Object.keys(tag)[0]]
                              this.setState({
                                ...this.state
                              })
                            }}
                          />
                        </label>
                      </div>
                    )
                  })}

                  {this.state.cuisine.OR.map((cuisine, idx) => {
                    //cuisineName = Object.keys(cuisine)[0]
                    //Object.keys(this.state.tags.OR[idx].key)[idx]
                    console.log(this.state.tags)
                    return (
                      <div className="tag-checkbox">
                        <label>
                          {Object.keys(cuisine)[0]}
                          <Checkbox
                            key={Object.keys(cuisine)[0]}
                            className="tags-box"
                            checked={
                              this.state.cuisine.OR[idx][
                                Object.keys(cuisine)[0]
                              ]
                            }
                            onClick={() => {
                              this.state.cuisine.OR[idx][
                                Object.keys(cuisine)[0]
                              ] = !this.state.cuisine.OR[idx][
                                Object.keys(cuisine)[0]
                              ]
                              this.setState({
                                ...this.state
                              })
                            }}
                          />
                        </label>
                      </div>
                    )
                  })}
                </div>
                {data.business.map(business => {
                  //console.log(data.business)
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
