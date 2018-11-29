import React from 'react';
//import PropTypes from 'prop-types';

import BackgroundSlideShow from 'react-background-slideshow';
import '../App.css';
import image1 from '../assets/mainimage.jpg'
import styled from 'styled-components';
import img from '../assets/news-background.jpg';

const Content = styled.div`

    background-image: url(${img});
    width:100%;
    height:100%;
    
`;

const Home = props => {

    return (
       
           <Content>
               <img class = "homelogo" src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" alt ="logo"></img>
               <div className="scrappyfont">News...</div>
           </Content>
       
    );
};

// Home.propTypes = {
    
// };

export default Home;