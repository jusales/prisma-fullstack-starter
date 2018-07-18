import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"

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
      cuisine
      tags
      type
    }
  }
`

class Feed extends React.Component {
  state = {
    tags: {}
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
              return error
            }
            return (
              <div>
                {data.tweets.map(tweet => {
                  return (
                    <TweetComponent
                      key={tweet.id}
                      text={tweet.text}
                      author={tweet.author}
                    />
                  )
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
