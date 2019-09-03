import React, { Component } from 'react';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import Item from '../../components/Item/Item.js';
import Footer from  '../../components/Footer/Footer.js';

import headphones from '../../assets/pictures/headphone1.png';
import packageHand from '../../assets/icons/package.svg';

import kidHeadphone from '../../assets/pictures/kid_headphone.png';
import simpleHeadphone from '../../assets/pictures/simple_headphone.png';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    this.fetchExample();
  }

  fetchExample = async () => {
    const topContext = this;
    let name = await fetch('/api/example')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      topContext.setState({products: data});
    });
  }


  render() {
    return (
      <div className="home-container">
        <CustomNavbar backgroundOn={true}/>
        <Jumbotron/>
        <h1>{this.state.products.title}</h1>
        <h1 className="header">HOT PICKS</h1>
        <div className="top-row">
          { this.state.products.map(product =>
            <Item title={product.title} image={product.image} price={product.price} />
          )}
        </div>
        <div className="section">
          <img src={packageHand} alt=""/>
          <h1 className="shipping__header">Upgrade your audio experience instantly</h1>
          <p>Get one day shipping with premium membership</p>
          <button>Sign Up</button>
        </div>
        <div className="story-section section">
          <img src={kidHeadphone} alt="" className="thumbnail"/>
          <img src={simpleHeadphone} alt="" className="thumbnail"/>
        </div>


        <Footer/>
      </div>
    );
  }
}
