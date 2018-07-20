import * as React from "react"
import "./home-page.css"
import Navigation from "../navigation/navigation"

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <header id="first">
          <div className="header-content">
            <div className="inner">
              <h1 className="cursive">pick your poison</h1>
              <h4 class="h4">for the 'mems</h4>
              <hr />
              <button
                id="toggleVideo"
                data-toggle="collapse"
                className="btn btn-primary btn-xl"
                onClick={() => this.props.history.push("/feed")}
              >
                EAT
              </button>{" "}
              &nbsp;{" "}
              <button
                className="btn btn-primary btn-xl page-scroll"
                onClick={() => this.props.history.push("/feed")}
              >
                PARTY
              </button>
            </div>
          </div>
        </header>
        <section className="bg-primary" id="one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 text-center">
                <h2 className="margin-top-0 text-primary">
                  Why We're Better Than Literally Everyone Else
                </h2>
                <br />
                <p className="text-faded">
                  Have you ever lookd the pages and pages of your pre-holiday
                  google search for the coolest things to do? Things that will
                  make your friends jealous and your insta light up? Then have
                  you gone, only to realise the queque will take longer than the
                  time you're in the country? We've got all the real tips that
                  you can only get from locals, friends and fiens so you never
                  miss out on avo toast or a dj's set again.
                </p>
                <a href="#three" className="btn btn-default btn-xl page-scroll">
                  INSPO
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="two">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="margin-top-0 text-primary">
                  On Your Holiday You Should:{" "}
                </h2>
                <hr className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 text-center">
                <div className="feature">
                  <i
                    className="icon-lg ion-android-laptop wow fadeIn"
                    data-wow-delay=".3s"
                  />
                  <h3>Brunch</h3>
                  <p className="text-muted">
                    Nothing like rehashing last nights debauchery over eggs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="feature">
                  <i
                    className="icon-lg ion-social-sass wow fadeInUp"
                    data-wow-delay=".2s"
                  />
                  <h3>Go Out</h3>
                  <p className="text-muted">
                    Nothing to discuss over eggs if you dont go out in the first
                    place ?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center">
                <div className="feature">
                  <i
                    className="icon-lg ion-ios-star-outline wow fadeIn"
                    data-wow-delay=".3s"
                  />
                  <h3>Dine</h3>
                  <p className="text-muted">
                    They say you can see the soul of any country through its
                    food. Who are we to argue with that?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="three" className="no-padding">
          <div className="container-fluid">
            <div className="row no-gutter">
              <div className="col-lg-4 col-sm-6">
                <a
                  href="#galleryModal"
                  className="gallery-box"
                  data-toggle="modal"
                  data-src="//citizen-femme.com/wp-content/uploads/2017/11/praca-do-comercio-lisbon-GettyImages-648812458.jpg"
                >
                  <img
                    src="//citizen-femme.com/wp-content/uploads/2017/11/praca-do-comercio-lisbon-GettyImages-648812458.jpg"
                    className="img-responsive"
                    alt="Image 1"
                  />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-content">
                      <div>
                        <i className="icon-lg ion-ios-search" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  href="#galleryModal"
                  className="gallery-box"
                  data-toggle="modal"
                  data-src="//experitour.com/wp-content/uploads/2018/03/lizbona_alfama_swieto-1068x800.jpg"
                >
                  <img
                    src="//experitour.com/wp-content/uploads/2018/03/lizbona_alfama_swieto-1068x800.jpg"
                    className="img-responsive"
                    alt="Image 2"
                  />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-content">
                      <div>
                        <i className="icon-lg ion-ios-search" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  href="#galleryModal"
                  className="gallery-box"
                  data-toggle="modal"
                  data-src="//prod-qti-images.s3.amazonaws.com/media/prod/1851/two-chaps.jpg?width=500&height=375"
                >
                  <img
                    src="//prod-qti-images.s3.amazonaws.com/media/prod/1851/two-chaps.jpg?width=500&height=375"
                    className="img-responsive"
                    alt="Image 3"
                  />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-content">
                      <div>
                        <i className="icon-lg ion-ios-search" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  href="#galleryModal"
                  className="gallery-box"
                  data-toggle="modal"
                  data-src="//media.timeout.com/images/103453503/1372/1029/image.jpg"
                >
                  <img
                    src="//media.timeout.com/images/103453503/1372/1029/image.jpg"
                    className="img-responsive"
                    alt="Image 4"
                  />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-content">
                      <div>
                        <i className="icon-lg ion-ios-search" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  href="#galleryModal"
                  className="gallery-box"
                  data-toggle="modal"
                  data-src="//media.timeout.com/images/103453504/1372/1029/image.jpg"
                >
                  <img
                    src="//media.timeout.com/images/103453504/1372/1029/image.jpg"
                    className="img-responsive"
                    alt="Image 5"
                  />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-content">
                      <div>
                        <i className="icon-lg ion-ios-search" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  href="#galleryModal"
                  className="gallery-box"
                  data-toggle="modal"
                  data-src="//media.timeout.com/images/103453502/1372/1029/image.jpg"
                >
                  <img
                    src="//media.timeout.com/images/103453502/1372/1029/image.jpg"
                    className="img-responsive"
                    alt="Image 6"
                  />
                  <div className="gallery-box-caption">
                    <div className="gallery-box-content">
                      <div>
                        <i className="icon-lg ion-ios-search" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-6 col-sm-3 column">
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Restaurants</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Promoters</a>
                  </li>
                  <li>
                    <a href="#">DJs</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3 column">
                <h4>About</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Information</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3 column">
                <h4>Stay Posted</h4>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      title="No spam, we promise!"
                      placeholder="Tell us your email"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#alertModal"
                      type="button"
                    >
                      Subscribe for updates
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xs-12 col-sm-3 text-right">
                <h4>Follow</h4>
                <ul className="list-inline">
                  <li>
                    <a rel="nofollow" href title="Twitter">
                      <i className="icon-lg ion-social-twitter-outline" />
                    </a>&nbsp;
                  </li>
                  <li>
                    <a rel="nofollow" href title="Facebook">
                      <i className="icon-lg ion-social-facebook-outline" />
                    </a>&nbsp;
                  </li>
                  <li>
                    <a rel="nofollow" href title="Dribble">
                      <i className="icon-lg ion-social-dribbble-outline" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <span className="pull-right text-muted small">
              <a href="http://www.bootstrapzero.com">
                Landing Zero by BootstrapZero
              </a>{" "}
              ©2015 Company
            </span>
          </div>
        </footer>
        <div
          id="galleryModal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src="//placehold.it/1200x700/222?text=..."
                  id="galleryImage"
                  className="img-responsive"
                />
                <p>
                  <br />
                  <button
                    className="btn btn-primary btn-lg center-block"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    Close <i className="ion-android-close" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="aboutModal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="text-center">Landing Zero Theme</h2>
                <h5 className="text-center">
                  A free, responsive landing page theme built by BootstrapZero.
                </h5>
                <p className="text-justify">
                  This is a single-page Bootstrap template with a sleek
                  dark/grey color scheme, accent color and smooth scrolling.
                  There are vertical content sections with subtle animations
                  that are activated when scrolled into view using the jQuery
                  WOW plugin. There is also a gallery with modals that work
                  nicely to showcase your work portfolio. Other features include
                  a contact form, email subscribe form, multi-column footer.
                  Uses Questrial Google Font and Ionicons.
                </p>
                <p className="text-center">
                  <a href="http://www.bootstrapzero.com">
                    Download at BootstrapZero
                  </a>
                </p>
                <br />
                <button
                  className="btn btn-primary btn-lg center-block"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  {" "}
                  OK{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="alertModal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="text-center">Nice Job!</h2>
                <p className="text-center">
                  You clicked the button, but it doesn't actually go anywhere
                  because this is only a demo.
                </p>
                <p className="text-center">
                  <a href="http://www.bootstrapzero.com">
                    Learn more at BootstrapZero
                  </a>
                </p>
                <br />
                <button
                  className="btn btn-primary btn-lg center-block"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  OK <i className="ion-android-close" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*scripts loaded here from cdn for performance */}
      </div>
    )
  }
}

export default HomePage
