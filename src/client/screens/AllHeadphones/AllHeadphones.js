import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import Item from '../../components/Item/Item.js';
import Footer from  '../../components/Footer/Footer.js';


export default class AllHeadphones extends Component {

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
      <div className="all-headphones-page">
        <CustomNavbar backgroundOn={true}/>
        <h1>HEADPHONES</h1>
        <Footer/>
      </div>
    );
  }
}
