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
                <a className="nav-link" href="/"><h4>D&D_Create_Character</h4></a>
              </div>
              <div className="menu">
                <a className="nav-link" href="/profile">
                  Тут ваш профиль,
                  {' '}
                  {user.login}
                </a>
                <a id="logout" className="nav-link" href="/logout">Logout</a>
              </div>

            </>
          ) : (
            <>
              <div>
                <a className="nav-link" href="/"><h4>D&D_Create_Character</h4></a>
              </div>
              <div className="menu">
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/registration">Registration</a>
              </div>

            </>
          )}
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
