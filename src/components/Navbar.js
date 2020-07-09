import React from "react"

class Navbar extends React.Component {
  state = { showMenu: false, showAddress: false, showContact: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  toggleAddress = () => {
    this.setState({
      showAddress: !this.state.showAddress,
    })
  }

  toggleContact = () => {
    this.setState({
      showContact: !this.state.showContact,
    })
  }

  render() {
    const menuActive = this.state.showMenu ? "is-active" : ""
    const burgerActive = this.state.showMenu ? "is-active" : ""
    const addressActive = this.state.showAddress ? "is-active" : ""
    const contactActive = this.state.showContact ? "is-active" : ""

    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a
            className="navbar-item is-size-4 has-text-weight-semibold has-text-white"
            href="/"
          >
            {this.props.siteTitle}
          </a>
          <button
            className={`navbar-burger ${burgerActive}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="site-nav" className={`navbar-menu ${menuActive}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <button
                  className="navbar-item is-size-5 has-text-white"
                  data-target="modal"
                  aria-haspopup="true"
                  onClick={this.toggleAddress}
                >
                  Address
                </button>
                <button
                  className="navbar-item is-size-5 has-text-white"
                  data-target="modal"
                  aria-haspopup="true"
                  onClick={this.toggleContact}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`modal ${addressActive} address`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Address</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleAddress}
              ></button>
            </header>
            <section className="modal-card-body">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.042151253318!2d-82.46144578510695!3d28.92679878230266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e86c1de1623c11%3A0x3393a53de0c0334e!2s8+Beverly+Hills+Blvd%2C+Beverly+Hills%2C+FL+34465!5e0!3m2!1sen!2sus!4v1467495978963"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, height: "100%", width: "100%" }}
                allowFullScreen
              ></iframe>
            </section>
            <footer className="modal-card-foot has-text-centered">
              <a
                href="https://www.google.com/maps/place/8+Beverly+Hills+Blvd,+Beverly+Hills,+FL+34465/@28.9267856,-82.4614126,17z/"
                target="_blank"
                rel="noopener noreferrer"
              >
                8 Beverly Hills Blvd. Beverly Hills, FL
              </a>
            </footer>
          </div>
        </div>

        <div className={`modal ${contactActive} contact`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Contact</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.toggleContact}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="is-hidden-mobile">
                <div className="titles columns">
                  <span className="column has-text-centered is-uppercase has-text-weight-semibold">
                    Office
                  </span>
                  <span className="column has-text-centered is-uppercase has-text-weight-semibold">
                    Fax
                  </span>
                  <span className="column has-text-centered is-uppercase has-text-weight-semibold">
                    Email
                  </span>
                </div>
                <div className="columns">
                  <span className="column has-text-centered">
                    (352) 462-0414
                  </span>
                  <span className="column has-text-centered">
                    (888) 413-6642
                  </span>
                  <span className="column has-text-centered">
                    <a href="mailto:wiagencies@gmail.com">wiagencies</a>
                  </span>
                </div>
              </div>
              <div className="is-flex-mobile is-hidden-desktop is-hidden-tablet">
                <div className="columns">
                  <span className="column has-text-centered is-uppercase has-text-weight-semibold titles">
                    Office
                  </span>
                  <span className="column has-text-centered">
                    (352) 462-0414
                  </span>
                </div>
                <div className="columns">
                  <span className="column has-text-centered is-uppercase has-text-weight-semibold titles">
                    Fax
                  </span>
                  <span className="column has-text-centered">
                    (888) 413-6642
                  </span>
                </div>
                <div className="columns">
                  <span className="column has-text-centered is-uppercase has-text-weight-semibold titles">
                    Email
                  </span>
                  <span className="column has-text-centered">
                    <a href="mailto:wiagencies@gmail.com">wiagencies</a>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
