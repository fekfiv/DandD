/* eslint-disable linebreak-style */
const React = require('react');
const NavBar = require('./components/NavBar');

const Layout = (props) => {
  const { children, user } = props;
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <script defer src="/index.js" />
        <title>D&D_Create_Character</title>
      </head>
      <body>
        <header>
          <NavBar user={user} />
        </header>
        <div className="wrapper">
          <div className="container">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
};

module.exports = Layout;
