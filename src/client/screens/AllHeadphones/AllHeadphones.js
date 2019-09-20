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

    this.footer = React.createRef();
    this.page = React.createRef();
    this.productDisplay = React.createRef();
    this.filter = React.createRef();
    this.navbar = React.createRef();
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  callbackItems = (data) => {
    this.setState({products: data});
  }

//handles pushing the sidebar up if needed so it won't collide with the footer
  handleScroll = () => {
    let bottomEdge = window.pageYOffset + window.innerHeight;

    let footerHeight = this.footer.current.container.current.clientHeight;
    let pageHeight = this.page.current.clientHeight;
    let footerCoord = pageHeight - footerHeight;

    let filter = this.filter.current.container.current;
    let trigger = footerCoord - bottomEdge;

    let marginTop = footerCoord - filter.clientHeight;

    if (trigger <= 0) {
      filter.classList.add('bottom');
      filter.style.marginTop = `${marginTop}px`;
    } else {
      filter.classList.remove('bottom');
      filter.style.marginTop = '0px';
    }
  }


//button toggles showing filter or not
  showFilter = () => {
    let filterContainer = this.filter.current.container.current;

    if (!filterContainer.classList.contains('in-flow')) {
      filterContainer.classList.add('in-flow');
    } else {
      filterContainer.classList.remove('in-flow');
    }
  }


  render() {
    return (
      <div className="all-headphones-page" ref={this.page}>
        <CustomNavbar backgroundOn={true} ref={this.navbar}/>
        <button onClick={this.showFilter}>Filter</button>
        <div className="product-display" ref={this.productDisplay}>
          <ProductFilter onClick={this.handleScroll} parentCallback={this.callbackItems} ref={this.filter}/>
          <div className="product-grid">
            { this.state.products.map(product =>
              <Item title={product.title} image={product.image} price={product.price} />
            )}
          </div>
        </div>
        <Footer ref={this.footer}/>
      </div>
    );
  }
}


export default withRouter(AllHeadphones);
