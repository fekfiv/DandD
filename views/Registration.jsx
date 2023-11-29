/* eslint-disable linebreak-style */
const React = require('react');
const Layout = require('./Layout');

function Register({ user }) {
  return (
    <Layout user={user}>
      <div className="card" style={{ width: '18rem' }}>
        <h4 className="card-header">Registration</h4>
        <div className="card-body">
          <form className="formRegistration" action="/users/registration" method="POST">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <input
                    placeholder="Введите логин..."
                    name="login"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <input
                    placeholder="Введите почту..."
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  <input
                    placeholder="Введите пароль..."
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Register;