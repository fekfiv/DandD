const React = require('react');

module.exports = function Card({ character }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="name">
          <h5 data-id={character.id} className="card-name">{character.name}</h5>
          <input type="text" name="name" data-id={character.id} value={character.name} />
        </div>
        <div className="classes">
          <p data-id={character.id} className="card-classes">{character.classes}</p>
          <input type="text" name="class" data-id={character.id} value={character.classes} />
        </div>
        <div className="cardBtn">
          <button data-id={character.id} id={character.id} type="button" className="btn btn-delete">
            Удалить
          </button>
          <button data-id={character.id} id={character.id} type="button" className="btn btn-edit">
            Изменить
          </button>
        </div>
      </div>
    </div>
  );
};
