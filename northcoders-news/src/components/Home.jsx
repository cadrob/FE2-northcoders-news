import React from 'react';
import { Slide } from 'react-slideshow-image'
import image1 from '../assets/developer.jpeg'
import image2 from '../assets/liverpoolnews.jpg'
import image3 from '../assets/ramsay.jpg'
import '../App.css';

const slideImages = [image1, image2, image3];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    className: "slides"
  }
const Home = props => {
    return (
      <div className= "slideshow">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
          </div>
        </Slide> 
      </div>
      );
};

export default Home;