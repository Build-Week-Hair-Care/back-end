const express = require('express');
const router = express.Router();
const stylist = require('./stylist_model')
const bcrypt = require('bcryptjs');

//login


 // findByID
 router.get('/:id', (req, res) => {
    stylist.findById(req.params['id'])
    .then(stylist => (res.status(200).json(stylist)))
    .catch(error => res.status(500).send(error)
    )
  });


  //delete
  router.delete('/:id', (req, res) => {
    stylist.remove(req.params['id'])
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send('Server Error')
    )
  });

  // update
  router.put('/:id', (req, res) => {
    stylist.update(req.params['id'], req.body)
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send(error)
    )
  });

// findByLocation
  router.get('/location/:location', (req, res) => {
    stylist.findByLocation(req.params['location'])
        .then((data) => {
            if (data === undefined) { res.status(404).json({ message: "Stylists with the specified location do not exist." }) }
            else {
                res.status(200).json(data)
            }
        })
        .catch((err) => res.status(500).json({ error: "The location information could not be retrieved." }))
});



router.post('/', (req, res) => {
    console.log(req.body);
    let { name, username, password, location, specialty, bio, email_address } = req.body;

    const hash = bcrypt.hashSync(password, 12); // it's 2 ^ 8, not 8 rounds
    stylist.create({
        name: name, 
        username: username,
        password: hash,  
        location: location, 
        specialty: specialty, 
        bio: bio,
        email_address: email_address
      })
        .then(savedStylist => {
            res.status(201).json(savedStylist);
        })

        .catch(error => {
            res.status(500).json(error);
        });
});



module.exports = router;