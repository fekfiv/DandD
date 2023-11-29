/* eslint-disable linebreak-style */
const router = require('express').Router();

const { Character } = require('../db/models');

router.post('/character', async (req, res) => {
  try {
    const {
      name, race, gender, age, hairColor, classes, characterStory,
    } = req.body;
    const { user } = req.session;
    console.log('*********', req.body);
    const character = Character.create({
      name, race, gender, age, hairColor, classes, characterStory, userId: user.id,
    });
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
