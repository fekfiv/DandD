/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Characters',
      [
        {
          name: 'Джозеф',
          race: 'Dwarf',
          gender: 'Мужчина',
          age: 50,
          hairColor: 'Черный',
          classes: 'Paladin',
          characterStory: 'Когда-то давно стал паладином Гонды',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
