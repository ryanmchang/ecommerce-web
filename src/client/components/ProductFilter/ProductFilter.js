import React, { Component } from 'react';

export default class ProductFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
    this.container = React.createRef();
  }

  componentDidMount() {
    this.fetchTemplate("products/all");

    let mql = window.matchMedia("(min-width: 750px)");
    this.mqResponse(mql);
    mql.addListener(this.mqResponse);
  }

//Send back the data we received to the parent component
  sendData = () => {
    this.props.parentCallback(this.state.products);
  }

//Get require for products; specify which products with route
  fetchTemplate = async (route) => {
    console.log(`/api/${route}`);
    const topContext = this;
    let name = await fetch(`/api/${route}`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      topContext.setState({products: data});
      topContext.sendData();
    });
  }

// Go back to fixed sidebar if screen surpasses size
  mqResponse = (e) => {
    if (e.matches) {
      this.container.current.classList.remove("in-flow");
    }
  }

  render() {
    return (
      <div className="product-filter-container" ref={this.container}> <div className="inner-container">
        <h1>Shop: All Headphones</h1>
        <p className="category-group">Design</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/design?design=open")}}>Open</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/design?design=closed")}}>Closed</p>

        <p className="category-group">Brand</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/brand?brand=sennheiser")}}>Sennheiser</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/brand?brand=akg")}}>AKG</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/brand?brand=hifiman")}}>Hifiman</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/brand?brand=fostex")}}>Fostex</p>

        <p className="category-group">Price Range</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/price?min=50&max=100")}}>$50-$100</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/price?min=100&max=200")}}>$100-$200</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/price?min=200&max=400")}}>$200-$400</p>
        <p className="category" onClick={()=>{this.fetchTemplate("products/price?min=400&max=100000")}}>$400+</p>
        </div>
      </div>
    );
  }
}
