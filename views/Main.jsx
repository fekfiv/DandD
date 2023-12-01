const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>
      {user ? (
        <div className="info">
          <h2>Правила использования данного приложения</h2>
          <p>
            Сейчас тебе предстоит создать своего персонажа.
            Скорее переходи в профиль и приступай к созданию персонажа.
            Если возникнут вопросы или есть предложения, велком ту моя
            {' '}
            <a className="telega" href="//t.me/fekfiv">телега</a>
          </p>
        </div>
      ) : (
        <div className="info">
          <h2>Правила использования данного приложения</h2>
          <p>
            Привет, это приложение поможет создать тебе персонажа
            для НРИ "Dungeons&Dragons". Однако, для начала надо
            зарегистрироваться с:
          </p>
          <button className="btn" type="submit"><a href="/registration">Зарегистрироваться</a></button>
        </div>
      )}
    </Layout>
  );
};
