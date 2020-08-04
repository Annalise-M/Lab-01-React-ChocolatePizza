import React from 'react';
import Header from './Header.js';
import Image from './Image.js';
import Footer from './Footer.js';
import Recipe from './Recipe.js';
import Ingredients from './Ingredients.js';
import './App.css';



export default class AllPutTogether extends React.Component {
  render() {
    return(
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Image />
            <Recipe/>
            <Ingredients/>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
  }
}

