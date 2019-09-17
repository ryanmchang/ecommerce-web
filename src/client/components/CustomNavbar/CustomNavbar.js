import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import {withRouter } from 'react-router-dom';


class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setBackground();

    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // ie only
  }

  setBackground = () => {
    let navTop = document.querySelector(".navbar__top");

    if (this.props.backgroundOn == true) {
      navTop.style.position = 'static';
      navTop.style.backgroundColor = '#FFFFFF';
    }
  }

  noScroll = () => {
    window.scrollTo(0, 0);
  }

  expandNav = () => {
    let nav = document.querySelector('.expanded');

    //hide navigation
    if (nav.style.display === "block") {
      nav.style.display = "none";
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = "yes"; // ie only
    } else {
      nav.style.display = "block";
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no"; // ie only
    }
  }

  routeHome = () => {
    this.props.history.push('/');
  }


  render() {
    return (
      <div className="navbar">
        <div className="navbar__top">
          <img className="hamburger-menu-icon"
               onClick={this.expandNav}
          />
          <Link to="/" className="nav-item">AudioPlug</Link>
        </div>
        <div className="expanded">
          <Link to="/our-story" className="expanded__item">OUR STORY</Link>
          <Link to="/menu" className="expanded__item">MENU</Link>
          <Link to="/locations" className="expanded__item">LOCATION</Link>
          <Link to="/contact-us" className="expanded__item">CONTACT US</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CustomNavbar);
