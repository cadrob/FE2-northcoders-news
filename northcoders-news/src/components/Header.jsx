import React from 'react';
import '../App.css'
import { Link } from '@reach/router'

const Header = props => {
    return (
        <header className="mainheader">
            <Link to="/">
        <img src ="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" alt="ant-and-paul" /></Link>
        </header>
    );
};



export default Header;