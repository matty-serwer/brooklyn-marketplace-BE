const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const restricted = require('./middleware/restricted.js');

const authRouter = require('./auth/auth-router')
const categoriesRouter = require('./categories/categories-router')
const itemsRouter = require('./items/items-router')
const locationsRouter = require('./locations/locations-router')
const merchantsRouter = require('./merchants/merchants-router')
const usersRouter = require('./users/users-router')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/items', itemsRouter);
server.use('/api/locations', locationsRouter);
server.use('/api/merchants', merchantsRouter);
server.use('/api/users', restricted, usersRouter);

server.get('/', (req, res) => {
  res.json({ api: 'Brooklyn Marketplace API up' });
})

module.exports = server;