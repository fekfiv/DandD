const React = require('react');

module.exports = function Form({ races, classes }) {
  return (
    <form action="/api/character" id="form" className="mb-3" method="POST">
      <h4 className="form-header">Создать персонажа</h4>
      <div className="formCard">
        <div className="name">
          <input placeholder="Введите имя..." name="name" type="text" />
        </div>
        <div className="race">
          <select size="1" name="race">
            <option selected disabled>Выберите расу</option>
            {races.map((el) => <option value={el}>{el}</option>)}
          </select>
        </div>
        <div className="gender">
          <b>Выберите пол</b>
          <input name="gender" type="radio" value="male" />
          {' '}
          Мужской
          <input name="gender" type="radio" value="female" />
          {' '}
          Женский
        </div>
        <div className="age">
          <input placeholder="Укажите возраст..." name="age" type="text" />
        </div>
        <div className="hairColor">
          <select size="1" name="hairColor">
            <option selected disabled>Выберите цвет волос</option>
            <option>Черный</option>
            <option>Зеленый</option>
            <option>Фиолетовый</option>
            <option>Белый</option>
            <option>Светло-бурый</option>
          </select>
        </div>
        <div className="classes">
          <select size="1" name="classes">
            <option selected disabled>Выберите класс</option>
            {classes.map((el) => <option value={el}>{el}</option>)}
          </select>
        </div>
        <div className="characterStory">
          <textarea cols={30} rows={10} placeholder="Напишите историю персонажа ..." name="characterStory" />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </div>
    </form>
  );
};
