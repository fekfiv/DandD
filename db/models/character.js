const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Character.init({
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    hairColor: DataTypes.STRING,
    classes: DataTypes.STRING,
    characterStory: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
