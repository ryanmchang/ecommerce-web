import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import {withRouter } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import Item from '../../components/Item/Item.js';
import Footer from  '../../components/Footer/Footer.js';

import headphones from '../../assets/pictures/headphone1.png';
import packageHand from '../../assets/icons/package.svg';
import cable from '../../assets/icons/cable.svg';

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


  routeAllHeadphones = () => {
    console.log("I work!");
    this.props.history.push('/all-headphones');
  }

  render() {
    return (
      <div className="home-page">
        <CustomNavbar backgroundOn={true}/>
        <Jumbotron/>
        <div className="section all-heaphones-section">
          <img src={cable} alt=""/>
          <h1 className="all_headphones-header">Check out our expanding collection of headphones</h1>
          <p>From Sennheiser to Audio-Technica, find the right headphones for your taste and budget.</p>
          <button onClick={this.routeAllHeadphones}>See All</button>
        </div>

        <h1 className="header">HOT PICKS</h1>
        <div className="top-row">
          <Carousel
            heightMode='first'
            slidesToShow={3}
          >
            { this.state.products.map(product =>
              <Item title={product.title} image={product.image} price={product.price} />
            )}
          </Carousel>
        </div>

        <div className="section">
          <img src={packageHand} alt=""/>
          <h1 className="shipping__header">Upgrade your audio experience instantly</h1>
          <p>Get one day shipping with premium membership</p>
          <button>Sign Up</button>
        </div>
        <div className="story-section section">
          <div className="story-container">
            <img src={kidHeadphone} alt="" className="thumbnail"/>
            <p className="story-title">Deepest sound stage yet</p>
          </div>
          <div>
            <img src={simpleHeadphone} alt="" className="thumbnail"/>
            <p className="story-title">Eco-friendly headphones</p>
          </div>
        </div>


        <Footer/>
      </div>
    );
  }
}
