import React from 'react';
import AllIngredientsList from './recipeList.js';


export default class Ingredients extends React.Component {
    render() {
      return (
        <div className="div-3">
          <AllIngredientsList />
        </div>
      );
    }
}

// const ingredients1 = [
//   '1 1/2 cups milk',
//   '1/2 cup marscarpone',
//   '1/2 tsp. Pink Salt',
//   '1 lb Black Mission Figs',
//   '1/2 cup brown sugar',
//   '2-4 tbsp water'
// ]

// const ingredients2 = [
//   '1 1/2 cups heavy cream',
//   '1/3 granulated sugar',
//   '2 egg yolks',
//   '1 lemon, juiced',
//   '2 tbsp butter',
//   '1 cup honey roasted pecans, roughly chopped'
// ]

