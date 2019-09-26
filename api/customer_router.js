const express = require('express');
const router = express.Router();
const customer = require('./customer_model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secrets')

//login


router.post('/login', (req, res) => {
    let { username, password } = req.body;
    customer.findByUsername( username )
        .first()
        .then(customer => {
            if (customer && bcrypt.compareSync(password, customer.password)) {
                const token = generateToken(customer);
                res.status(200).json({id: customer.id,token } );
            } else {
                res.status(401).json({ message: 'Invalid Customer Credentials' });
            }
        })
        .catch(error => {
            console.log(error)
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

router.post('/', (req, res) => {
    console.log(req.body);
    let { username, password, location, email_address } = req.body;

    const hash = bcrypt.hashSync(password, 12); // it's 2 ^ 8, not 8 rounds
    customer.create({
        username: username,
        password: hash,  
        location: location, 
        email_address: email_address
      })
        .then(savedCustomer => {
            res.status(201).json(savedCustomer);
        })

        .catch(error => {
            res.status(500).json(error);
        });
});



module.exports = router;