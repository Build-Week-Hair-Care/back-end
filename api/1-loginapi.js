
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets')


const db = require('../data/db-config');
const Users = require('./5-usecasesmodel');
const token = require('../auth/restricted-middleware');

const loginapi = express();

loginapi.use(express.json());


loginapi.post('/customer', (req, res) => {
    let { username, password } = req.body;
  
 
    Users.findByCustomer({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                console.log(token)
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid Customer Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});



loginapi.post('/stylist', (req, res) => {
    let { username, password } = req.body;

    Users.findByStylist({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                console.log(token)
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid Stylist Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d',
    };
    // bring in the secret from the secrets file
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = loginapi;