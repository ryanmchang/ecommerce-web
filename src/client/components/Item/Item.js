import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cart from "../../assets/icons/cart.png";

export default class Item extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    const bgStyle = {
      backgroundImage: `url(${this.props.image})`,
    }
    return (
      <div className="item-super"><div className="item-container">
        <img className="item__image" src={this.props.image} alt=""/>
        <div className="item__row1">
          <h1 className="item__title">{this.props.title}</h1>
          <img className="cart-icon" src={cart} alt=""/>
        </div>
        <div className="item__row2">
          <h1 className="item__price">{`$${this.props.price}`}</h1>
        </div>
      </div></div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
