const db = require('../data/db-config');

module.exports = {
  addCustomer,
  findCustomer,
  findByCustomer,
  findCustomerById,
  addStylist,
  findStylist,
  findByStylist,
  findStylistById,
};

function findCustomer() {
  return db('users').select('id', 'username');
}

function findByCustomer(filter) {
  return db('users').where(filter);
}

async function addCustomer(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findCustomerById(id) {
  return db('users')
    .where({ id })
    .first();
}
// 


function findStylist() {
  return db('stylists').select('id', 'username');
}

function findByStylist(filter) {
  return db('stylists').where(filter);
}

async function addStylist(stylist) {
  const [id] = await db('stylists').insert(stylist);

  return findById(id);
}

function findStylistById(id) {
  return db('stylists')
    .where({ id })
    .first();
}