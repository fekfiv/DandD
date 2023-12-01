const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      {user ? (
        <div className="info">
          <h2>Правила использования данного приложения</h2>
          <p>Для начала перейди в профиль. Там все понятно :З</p>
        </div>
      ) : (
        <div className="info">
          <h2>Правила использования данного приложения</h2>
          <p>Привет, для начала надо зарегистрироваться с:</p>
          <button className="btn" type="submit"><a href="/registration">Зарегистрироваться</a></button>
        </div>
      )}
    </Layout>
  );
};
