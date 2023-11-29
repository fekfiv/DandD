/* eslint-disable linebreak-style */
const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <div className="d-flex">
          {user ? (
            <>
              <div>
                <h4>D&D_Create_Character</h4>
              </div>
              <div className="menu">
                <a className="nav-link" href="/profile">{user.login}</a>
                <a id="logout" className="nav-link" href="/logout">Logout</a>
                <a className="nav-link" href="/">Home </a>
              </div>

            </>
          ) : (
            <>
              <div>
                <h4>D&D_Create_Character</h4>
              </div>
              <div className="menu">
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/registration">Registration</a>
                <a className="nav-link" href="/">Home</a>
              </div>

            </>
          )}
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
