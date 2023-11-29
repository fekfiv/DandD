/* eslint-disable linebreak-style */
require('@babel/register');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const apiRouter = require('./routers/api.router');
const userRouter = require('./routers/user.router');
const indexRouter = require('./routers/index.router');

const app = express();

const sessionConfig = {
  name: 'newSession',
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(expressSession(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

const PORT = 3000;

app.use('/api', apiRouter);
app.use('/users', userRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Сервер работает на хосте ${PORT}`);
});
