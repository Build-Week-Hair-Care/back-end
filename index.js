require('dotenv').config();

const express = require('express');
const server = express();

const registerapi = require('./api/0-registerapi')
const loginapi = require('./api/1-loginapi')
const locationapi = require('./api/3-locationapi')
const reviews = require('./api/review_router')
const stylists = require('./api/stylist_router')


server.use(express.json());
server.use('/api/register', registerapi);
server.use('/api/login', loginapi);
server.use('/api/stylistbylocation', locationapi);
server.use('/api/reviews', reviews);
server.use('/api/stylists', stylists);

server.get('/', (req, res) => {
  res.send("Quietly waiting for content...!");
});


const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
