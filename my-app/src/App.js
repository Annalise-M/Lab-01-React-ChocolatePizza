import React from 'react';


class Header extends React.Component {
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

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="div-1"></div>
        <div className="div-2"></div>
        <div className="chocolate-pizza">
          <img src="./assets/choco-pizza.png"/>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus doloremque, tempora libero, vel quo perferendis nobis voluptas sed eveniet inventore in ipsam odit ea? Ad laboriosam veniam porro dolorum!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus doloremque, tempora libero, vel quo perferendis nobis voluptas sed eveniet inventore in ipsam odit ea? Ad laboriosam veniam porro dolorum!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus doloremque, tempora libero, vel quo perferendis nobis voluptas sed eveniet inventore in ipsam odit ea? Ad laboriosam veniam porro dolorum!
           </p>
           <div className="div-3">
             <ul className="left-list">
              <li>1 1/2 cups milk</li>
              <li>1/2 cup marscarpone</li>
              <li>1/2 tsp. Pink Salt</li>
              <li>1 lb Black Mission Figs</li>
              <li>1/2 cup brown sugar</li>
              <li>2-4 tbsp water</li>
             </ul>
             <ul class="right-list">
                <li>1 1/2 cups heavy cream</li>
                <li>1/3 granulated sugar</li>
                <li>2 egg yolks</li>
                <li>1 lemon, juiced</li>
                <li>2 tbsp butter</li>
                <li>1 cup honey roasted pecans, roughly chopped</li>
              </ul>

           </div>
        </div>
      </div>
    );
  }
}



// need to add buttons to the header

// main 
export default class AllPutTogether extends React.Component {
  render() {
    return(
      <body>
        <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      </body>
      
    )
  }
}



