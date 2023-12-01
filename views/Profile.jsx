/* eslint-disable linebreak-style */
const React = require('react');
const Layout = require('./Layout');
const Form = require('./components/Form');
const Card = require('./components/Card');

module.exports = function Profile({
  characters, user, races, classes,
}) {
  return (
    <Layout user={user}>
      {user ? (
        <div className="profile">
          <div className="cardForm">
            <div className="textForm">
              <p>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
                Earum consectetur est hic ipsum natus, cum corrupti eos,
                ipsa, dolor molestiae labore nisi aut nemo sed ut beatae fugiat
                blanditiis tempora.
              </p>
              <div className="lists">
                <ul className="list">
                  <li><u>Существующие классы</u></li>
                  {classes.map((el) => <li>{el}</li>)}
                </ul>
                <ul className="list">
                  <li><u>Существующие расы</u></li>
                  {races.map((el) => <li>{el}</li>)}
                </ul>
              </div>

            </div>
            <Form races={races} classes={classes} />
          </div>
          <div id="containerCard">
            {characters.length ? (
              characters.map((character) => <Card character={character} />)
            ) : (
              <h4 className="uselessText">Персонажей нет</h4>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1>Слышь, тебе сюда нельзя!</h1>
        </div>
      )}
    </Layout>
  );
};
