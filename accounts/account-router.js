const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    // list of accounts

});

router.get('/:id', (req, res) => {
    // account by id

});

router.post('/', (req, res) => {
    // add an account

});

router.put('/:id', (req, res) => {
    // edit an account

});

router.delete('/:id', (req, res) => {
    // delete an account

});

module.exports = router;

function getById(id) {
    return db('budget')
        .where({ id })
        .first();
};