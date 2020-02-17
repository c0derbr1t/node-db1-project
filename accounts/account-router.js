const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    // list of accounts
    db.select('*').from('accounts')
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Failed to get the list of accounts!',
                error: err
            });
        });
});

router.get('/:id', (req, res) => {
    // account by id
    getById(req.params.id)
        .then(account => {
            res.status(200).json(account);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Failed to get the specified account!',
                error: err
            });           
        });
});

router.post('/', (req, res) => {
    // add an account
    const accountInfo = req.body
    db('accounts')
        .insert(accountInfo, 'id')
        .then(count => {
            res.status(201).json(count)
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({
                message: 'Failed to add the account!',
                error: err
            });
        })
});

router.put('/:id', (req, res) => {
    // edit an account
    const id = req.params.id;
    const changes = req.body;
    db('accounts')
        .where({ id: id })
        .update(changes)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Failed to update the account!',
                error: err
            });
        })
});

router.delete('/:id', (req, res) => {
    // delete an account
    const id = req.params.id;
    db('accounts')
        .where({ id: id })
        .del()
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Failed to delete the account!',
                error: err
            });
        })
});

module.exports = router;

function getById(id) {
    return db('accounts')
        .where({ id })
        .first();
};