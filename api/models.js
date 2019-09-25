const db = require('../data/db-config');

module.exports = {
  addCustomer,
  findCustomerById,
  addStylist,
  findStylist,
  findStylistById,
  findStylistByLocation,
  insert,
  updateCustomer,
  updateStylist,
  remove,
};


async function addCustomer(user) {
  const [id] = await db('users').insert(user);

  return findByCustomerId(id);
}

async function addStylist(stylist) {
  const [id] = await db('stylists').insert(stylist);
  return findByStylistId(id);
}


function findStylistByLocation(location) {
  return db('stylists')
    .where('stylists.location', location)
}


function remove(username) {
  return db('stylist') || ('customer')
    .where('username', username(username))
    .del();
}


function findStylist() {
  return db('stylists').select('id', 'username');
}


function updateStylist(id, post) {
  return db('stylist')
    .where('id', Number(id))
    .update(stylist);
}

function updateCustomer(id, post) {
  return db('customer')
    .where('id', Number(id))
    .update(customer);
}

function findCustomer() {
  return db('users').select('id', 'username');
}


function findCustomerById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findStylistById(id) {
  return db('stylists')
    .where({ id })
    .first();
}


function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}


function findPostComments(postId) {
  return db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('post_id', postId);
}

function findCommentById(id) {
  return db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('comments.id', id);
}




