const { Router } = require('express');
const { loginRouter } = require('./loginRouter');
const { registerRouter } = require('./registerRouter');

const usersRouter = Router();

usersRouter.get('/login', loginRouter);
usersRouter.get('/register', registerRouter);

module.exports = { usersRouter };