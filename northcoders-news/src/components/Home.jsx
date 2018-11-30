import React from 'react';
//import PropTypes from 'prop-types';
import Login from '../components/Login'
import { Slide } from 'react-slideshow-image'
import image1 from '../assets/developer.jpeg'
import image2 from '../assets/liverpoolnews.jpg'
import image3 from '../assets/ramsay.jpg'


import '../App.css';
import styled from 'styled-components';
import img from '../assets/news-background.jpg';

const Content = styled.div`

    background-image: url(${img});
    width:100%;
    height:100%;
    
`;

const slideImages = [image1, image2, image3];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
  

const Home = props => {

    return (
       
         <div className= "slideshow">
               {/* <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide> */}
      </div>
             
                          
   
       
    );
};

// <img class = "homelogo" src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" alt ="logo"></img>
//<div className="scrappyfont">News...</div>

// Home.propTypes = {  
    
// };

export default Home;