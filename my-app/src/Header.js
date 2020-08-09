import React from 'react';

class Links extends React.Component {
  render() {
    return (
      <a href={this.props.site + ' .com'} className={this.props.site + ' icon'}> </a>
    )
  }
}

export default class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div>Delicious</div>
          <div className="icons">
            <p> 
              <Links site='facebook' />
              {/* commented out original code - just below is the prop that's currently being worked on */}
              {/* <img src='./assets/fb-icon.png' alt="facebook" /> */}
              <img src='./assets/twit-icon.png' alt="twitter" />
              <img src="./assets/gp-icon.png" alt="google-plus"/>
              <img src="./assets/insta-icon.png" alt="instagram"/>
              <img src="./assets/flic-icon.png" alt="flicker" />
              <img src="./assets/pint-icon.png" alt="pintrest" />
              <img src="./assets/rss-icon.png" alt="rss" />
              <img src="./assets/mail-icon.png" alt="mail" />
            </p>
          </div>
          <div>
            <div>
              <img src="./assets/hr-img.png" alt="hr" />
            </div>
          </div>
        </div>
      );
    }
}

