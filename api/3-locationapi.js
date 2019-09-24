const express = require('express');
const Users = require('./5-usecasesmodel');
const locationapi = express();


locationapi.use(express.json());


locationapi.get('/:location', (req, res) => {
    Users.findStylistByLocation(req.params['location'])
        .then((data) => {
            if (data === undefined) { res.status(404).json({ message: "Stylists with the specified location do not exist." }) }
            else {
                res.status(200).json(data)
            }
        })
        .catch((err) => res.status(500).json({ error: "The location information could not be retrieved." }))
});