import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import Item from '../../components/Item/Item.js';
import Footer from  '../../components/Footer/Footer.js';
import ProductFilter from '../../components/ProductFilter/ProductFilter.js';
import {withRouter } from 'react-router-dom';

class AllHeadphones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {}


  callbackItems = (data) => {
    this.setState({products: data});
  }


  render() {
    return (
      <div className="all-headphones-page">
        <CustomNavbar backgroundOn={true}/>
        <div className="product-display">
          <ProductFilter parentCallback={this.callbackItems}/>
          <div className="product-grid">
            { this.state.products.map(product =>
              <Item title={product.title} image={product.image} price={product.price} />
            )}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default withRouter(AllHeadphones);
