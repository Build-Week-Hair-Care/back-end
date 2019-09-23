const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets')


const db = require('../data/db-config');
const Users = require('./5-usecasesmodel');
const restricted = require('../auth/restricted-middleware');

const registerapi = express();

registerapi.use(express.json());


registerapi.post('/customer', (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;

    const hash = bcrypt.hashSync(password, 12); // it's 2 ^ 8, not 8 rounds

    Users.addCustomer({username: username, password: hash})
    
        .then(saved => {
            console.log('hi');
            console.log(saved)
            res.status(201).json(saved);

        })
        .catch(error => {
            res.status(500).json(error);
        });
});

registerapi.post('/stylist', (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;

    const hash = bcrypt.hashSync(password, 12); // it's 2 ^ 8, not 8 rounds

    Users.addStylist({username: username, password: hash})
        .then(savedStylist => {
            console.log('hi');
            console.log(savedStylist)
            res.status(201).json(savedStylist);

        })
        .catch(error => {
            res.status(500).json(error);
        });
});
module.exports = registerapi;

