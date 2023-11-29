/* eslint-disable linebreak-style */
const router = require('express').Router();

const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const user = await User.create({ login, email, password });
    req.session.user = {
      id: user.id,
      login: user.login,
      email: user.email,
      password: user.password,
    };
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user.password === password) {
      req.session.user = {
        id: user.id,
        login: user.login,
        email: user.email,
      };
    }
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
