import React, { Component } from 'react';
import CustomNavbar from '../../components/CustomNavbar/CustomNavbar.js';
import Jumbotron from '../../components/Jumbotron/Jumbotron.js';
import Item from '../../components/Item/Item.js';
import headphones from '../../assets/pictures/headphone1.png';

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
        
      </div>
    );
  }
}
