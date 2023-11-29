/* eslint-disable linebreak-style */
const router = require('express').Router();
const fetch = require('node-fetch');

const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const Registration = require('../views/Registration');
const Login = require('../views/Login');
const Profile = require('../views/Profile');

const { Character } = require('../db/models');

router.get('/', (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Main, { user }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/registration', (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Registration, { user }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/login', (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Login, { user }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const url = 'https://www.dnd5eapi.co/api/races/';
    const result = await fetch(url);
    const data = await result.json();
    const { results } = data;
    const races = results.map((el) => el.name);

    const url1 = 'https://www.dnd5eapi.co/api/classes/';
    const result1 = await fetch(url1);
    const data1 = await result1.json();
    const results1 = data1.results;
    const classes = results1.map((el) => el.name);

    const { user } = req.session;
    const characters = await Character.findAll({ where: { userId: user.id } });
    renderTemplate(Profile, {
      characters, user, races, classes,
    }, res);
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('newSession');
      res.redirect('/');
    });
  } catch (error) {
    res.sendStatus(error);
  }
});

module.exports = router;
