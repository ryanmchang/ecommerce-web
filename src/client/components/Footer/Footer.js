import React, { Component } from 'react';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="footer-container" ref={this.container}>
        <div className="footer__group-container">
          <h1 className="footer__header">AudioPlug</h1>
        </div>
        <div className="footer__group-container">
          <h1 className="footer__header">Help</h1>
          <p className="footer__item">Returns</p>
          <p className="footer__item">Shipping and Delivery</p>
          <p className="footer__item">Order Status</p>
          <p className="footer__item">Contact Us</p>
        </div>
        <div className="footer__group-container">
          <h1 className="footer__header">Locations</h1>
          <p className="footer__item">California</p>
          <p className="footer__item">Washington</p>
          <p className="footer__item">Oregon</p>
          <p className="footer__item">New York</p>
        </div>
        <div className="footer__group-container">
          <h1 className="footer__header">Follow</h1>
          <img className="social-media-icon" src={facebook} alt=""/>
          <img className="social-media-icon" src={instagram} alt=""/>
          <img className="social-media-icon" src={twitter} alt=""/>
        </div>
      </div>
    );
  }
}
