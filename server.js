const express = require('express');

const db = require('./data/dbConfig.js');

const AccountRouter = require('./accounts/account-router.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

server.get('/', (req, res) => {
    res.send('<h2>Account Management</h2>');
});

module.exports = server;