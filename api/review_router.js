const express = require('express');
const router = express.Router();
const review = require('./review_model')

// Get by stylist
router.get('/stylist/:stylist_id', (req, res) => {
    review.findByStylist(req.params['stylist_id'])
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send('Server Error')
    )

  });


// get by customer
 router.get('/customer/:customer_id', (req, res) => {
    review.findByCustomer(req.params['customer_id'])
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send('Server Error')
    )
  });

//delete
  router.delete('/:id', (req, res) => {
    review.remove(req.params['id'])
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send('Server Error')
    )
  });


  // update
  router.put('/:id', (req, res) => {
    review.update(req.params['id'], req.body)
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send(error)
    )
  });


  // create
  router.post('/', (req, res) => {
    review.create(req.body)
    .then(reviews => (res.status(200).json(reviews)))
    .catch(error => res.status(500).send('Server Error')
    )
  });



module.exports = router;