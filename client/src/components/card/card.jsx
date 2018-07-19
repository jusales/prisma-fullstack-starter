import * as React from "react"
import "./card.css"

class Card extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="masonry-item">
          <div
            className="map"
            style={{
              backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?center=${
                this.props.latitude
              },${this.props.longitude}&size=400x200&zoom=14&${
                this.props.latitude
              },${
                this.props.longitude
              }&markers=icon:https://storage.googleapis.com/app-entr-manual-storage/map-pin-icon.png%7C${
                this.props.latitude
              },${
                this.props.longitude
              }&key=AIzaSyBYh4sc9sq0CvI2SIgQrim1-851zWoNP5I)`
            }}
          />
          <div class="caption">
            <div class="meta clearfix">
              <span class="pull-left">Author</span>
              <span class="pull-right">1h ago</span>
            </div>
            <h3>{this.props.name}</h3>
            <p>
              Minima totam laudantium, cumque sed eius alias sint veritatis
              corporis necessitatibus!
            </p>
          </div>
          <hr />
          <div class="caption">
            <span class="glyphicon glyphicon-thumbs-up">&nbsp;</span>
            <span class="glyphicon glyphicon-share">&nbsp;</span>
            <span class="glyphicon glyphicon-comment">&nbsp;</span>
            <a class="pull-right" href="#">
              view on facebook{" "}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
