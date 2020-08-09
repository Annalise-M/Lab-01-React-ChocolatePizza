import React from 'react';

class AuthorName extends React.Component {
  render() {
    return (
      <div>
        {this.props.authorName}
      </div>
    )
  }
}


export default class Footer extends React.Component {
    render() {
      return(
        <div>
           <img src="./assets/van-pic.png" alt="lady-pic"/>
            <span>
            <AuthorName authorName="Vanessa Stevenson" />
            <p>
              Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
            </p>
            <button className="share-button">SHARE</button>
            </span>
           <img src="./assets/small-logo.png" alt="fork-knife"/>
           <p>Delicious <span>&#169;</span> All Rights Reserved.</p>
           <p>Proudly published with Ghost</p>
        </div>
      )
    }
}

