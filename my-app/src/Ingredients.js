import React from 'react';

const ingredients1 = [
  '1 1/2 cups milk',
  '1/2 cup marscarpone',
  '1/2 tsp. Pink Salt',
  '1 lb Black Mission Figs',
  '1/2 cup brown sugar',
  '2-4 tbsp water'
]

const ingredients2 = [
  '1 1/2 cups heavy cream',
  '1/3 granulated sugar',
  '2 egg yolks',
  '1 lemon, juiced',
  '2 tbsp butter',
  '1 cup honey roasted pecans, roughly chopped'
]

// const FirstIngredientsList extends React.Component {
//   render() {
//     return (
//       <ul className="left-list"> 
//       {
//         ingredients1.map((ingredient) => <ingredients1.)
//       }

//       </ul>
//     )
//   }
// }

export class Ingredients extends React.Component {
    render() {
      return (
        <div className="div-3">
          <form className="left-list">
            <label><input type="checkbox"/>1 1/2 cups milk</label>
            <label><input type="checkbox"/>1/2 cup marscarpone</label>
            <label><input type="checkbox"/>1/2 tsp. Pink Salt</label>
            <label><input type="checkbox"/>1 lb Black Mission Figs</label>
            <label><input type="checkbox"/>1/2 cup brown sugar</label>
            <label><input type="checkbox"/>2-4 tbsp water</label>
          </form>
          <form className="right-list"><label><input type="checkbox"/>1 1/2 cups heavy cream</label>
            <label><input type="checkbox"/>1/3 granulated sugar</label>
            <label><input type="checkbox"/>2 egg yolks</label>
            <label><input type="checkbox"/>1 lemon, juiced</label>
            <label><input type="checkbox"/>2 tbsp butter</label>
            <label><input type="checkbox"/>1 cup honey roasted pecans, roughly chopped</label>
          </form>
        </div>
      );
    }
  }

  