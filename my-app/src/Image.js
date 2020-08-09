import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <img alt="choco-image" src={this.props.bigImage} />
      </div>
    )
  }
}


export default class MainImage extends React.Component {
    render() {
      return (
        <div className="chocolate-pizza">
            <Image bigImage="./assets/choco-pizza.png" alt="choco-pizza"/>
        </div>
      );
    }
}

  