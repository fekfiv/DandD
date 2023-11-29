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
        <div>
          <Form races={races} classes={classes} />
          <div id="container">
            {characters.length ? (
              characters.map((character) => <Card character={character} />)
            ) : (
              <h4>Персонажей нет</h4>
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
