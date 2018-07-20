import * as React from "react"
import "./navigation.css"

class Navigation extends React.Component {
  render() {
    return (
      <nav id="topNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand page-scroll" href="#first">
              <i className="ion-ios-analytics-outline" /> Landing Zero
            </a>
          </div>
          <div className="navbar-collapse collapse" id="bs-navbar">
            <ul className="nav navbar-nav">
              <li>
                <a className="page-scroll" href="#one">
                  Intro
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#two">
                  Highlights
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#three">
                  Gallery
                </a>
              </li>
              <li>
                <a className="page-scroll" href="submitfood">
                  SUBMIT
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  className="page-scroll"
                  data-toggle="modal"
                  title="A free Bootstrap video landing theme"
                  href="#aboutModal"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
