import React, { Component } from 'react'

class ListItems1 extends React.Component {
    render(){
      return (
      <>
        <form className="left-list">
          <label><input type="checkbox"/>1 1/2 cups milk</label>
          <label><input type="checkbox"/>1/2 cup marscarpone</label>
          <label><input type="checkbox"/>1/2 tsp. Pink Salt</label>
          <label><input type="checkbox"/>1 lb Black Mission Figs</label>
          <label><input type="checkbox"/>1/2 cup brown sugar</label>
          <label><input type="checkbox"/>2-4 tbsp water</label>
        </form>
      </>
      );
    }
}
  
  
class ListItems2 extends React.Component {
    render(){
      return (
        <>
          <form className="right-list">
            <label><input type="checkbox"/>1 1/2 cups heavy cream</label>
            <label><input type="checkbox"/>1/3 granulated sugar</label>
            <label><input type="checkbox"/>2 egg yolks</label>
            <label><input type="checkbox"/>1 lemon, juiced</label>
            <label><input type="checkbox"/>2 tbsp butter</label>
            <label><input type="checkbox"/>1 cup honey roasted pecans, roughly chopped</label>
          </form>
        </>
      );
    }
}


export default class AllIngredientsList extends React.Component {
  render() {
    return (
      <ul> 
        {
         <div>
           <ListItems1 />
           <ListItems2 />
         </div>
        }
      </ul>
    );
  }
}

