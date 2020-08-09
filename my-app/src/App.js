import React from 'react';
import Header from './Header.js';
import MainImage from './Image.js';
import Recipe from './Recipe.js';
import Ingredients from './Ingredients.js';
import Footer from './Footer.js';
import './App.css';


export default class AllPutTogether extends React.Component {
  render() {
    return(
        <div>
            <Header />
            <MainImage />
            <Recipe/>
            <Ingredients/>
            <Footer />
        </div>
    )
  }
}

