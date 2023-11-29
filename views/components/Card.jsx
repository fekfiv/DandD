const React = require('react');

module.exports = function Card({ character }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-name">{character.name}</h5>
        <p className="card-classes">{character.classes}</p>
        <button id={character.id} type="button" className="btn btn-danger">
          Delete
        </button>
        <button id={character.id} type="button" className="btn btn-primary">
          Edit
        </button>
      </div>
    </div>
  );
};
