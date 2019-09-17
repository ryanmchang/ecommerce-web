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


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      itemsToShow: 3,
    }
  }

  componentDidMount() {
    this.fetchTemplate();
    console.log("Mounted");

    let mqls = [
      window.matchMedia("(max-width: 780px)"),
      window.matchMedia("(max-width: 1200px)")
    ];
    for (let i=0; i<mqls.length; i++) {
      this.mqResponse(mqls[i]);
      mqls[i].addListener(this.mqResponse);
    }
  }

  mqResponse = (e) => {
    let mqls = [
      window.matchMedia("(max-width: 780px)"),
      window.matchMedia("(max-width: 1200px)")
    ];

    if (mqls[0].matches) {
      this.setState({itemsToShow: 1});
    }
    else if (mqls[1].matches) {
      this.setState({itemsToShow: 2});
    }
    else {
      this.setState({itemsToShow: 3});
    }
  }

  fetchTemplate = async () => {
    const topContext = this;
    let name = await fetch('/api/products/editorspick')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      topContext.setState({products: data});
    });
    console.log(topContext.state.products);
  }


  routeAllHeadphones = () => {
    this.props.history.push('/all-headphones');
  }

  callbackItems = (data) => {
    this.setState({products: data});
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
            initialSlideHeight={600}
            slidesToShow={this.state.itemsToShow}
            renderBottomCenterControls
            >
            { this.state.products.map(product =>
              <Item title={product.title} image={product.image} price={product.price} />
            )}
          </Carousel>
        </div>

        <div className="section">
          <img src={packageHand} className="shipping__img"/>
          <h1 className="shipping__header">Upgrade your audio experience instantly</h1>
          <p>Get one day shipping with premium membership</p>
          <button>Sign Up</button>
        </div>
        <div className="story-section section">
          <div className="story-container">
            <img src={kidHeadphone} className="thumbnail"/>
            <p className="story-title">Deepest sound stage yet</p>
          </div>
          <div className="story-container">
            <img src={simpleHeadphone} className="thumbnail"/>
            <p className="story-title">Eco-friendly headphones</p>
          </div>
        </div>


        <Footer/>
      </div>
    );
  }
}

export default withRouter(Home);
