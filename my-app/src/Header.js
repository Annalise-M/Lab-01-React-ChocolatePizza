import React from 'react';

export default class Header extends React.Component {
    render() {
      return (
        <div>
          <div>Delicious</div>
          <div>
            <p> 
              <img src='./assets/fb-icon.png' alt="facebook" />
              <img src='./assets/twit-icon.png' alt="twitter" />
              <img src="./assets/gp-icon.png" alt="google-plus"/>
              <img src="./assets/insta-icon.png" alt="instagram"/>
              <img src="./assets/flic-icon.png" alt="flicker" />
              <img src="./assets/pint-icon.png" alt="pintrest" />
            </p>
            <p>
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
