import React, { Component } from 'react';
import {parallax} from '../../utilities/Helpers.js';
import Carousel from 'nuka-carousel';

export default class Jumbotron extends Component {

  componentDidMount() {}

  render() {
    return (
      <Carousel
        heightMode='first'
        renderBottomCenterControls
      >
        <div className="slide1">
          <div className="jumbotron__text-container">
            BACK IN ANY COLOR YOU LIKE
          </div>
        </div>
        <div className="slide2">
          <div className="jumbotron__text-container">
            THE BRIGHTEST HEADPHONES OUT
          </div>
        </div>
        <div className="slide3">
          <div className="jumbotron__text-container">
            ESCAPE FROM THE DAILY NOISE
          </div>
        </div>

      </Carousel>
    );
  }
}
