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

router.delete('/character/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const isDeleted = await Character.destroy({ where: { id } });
    res.sendStatus(isDeleted ? 200 : 400);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post('/character/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('_____________', req.body.class);
    const myCharacter = await Character.findOne({ where: { id } });
    console.log('before update', myCharacter);
    myCharacter.name = req.body.name;
    myCharacter.classes = req.body.class;
    await myCharacter.save();
    console.log('after update', myCharacter);
    res.json(myCharacter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
