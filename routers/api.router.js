/* eslint-disable linebreak-style */
const router = require('express').Router();

const { Character } = require('../db/models');

router.post('/character', async (req, res) => {
  try {
    const {
      name, race, gender, age, hairColor, classes, characterStory,
    } = req.body;
    const { user } = req.session;
    const character = await Character.create({
      name, race, gender, age, hairColor, classes, characterStory, userId: user.id,
    });
    res.json(character);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/charcter/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const isDeleted = await Character.destroy({ where: { id } });
    res.sendStatus(isDeleted ? 200 : 400);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
