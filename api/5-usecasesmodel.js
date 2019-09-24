const db = require('../data/db-config');

module.exports = {
  addCustomer,
  findCustomer,
  findByCustomer,
  findCustomerById,
  addStylist,
  findStylist,
  findStylistById,
  findStylistByLocation
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


function findStylistByLocation(location) {
  return db('stylists')
  .where('stylists.location', location)
}

async function addStylist(stylist) {
  const [id] = await db('stylists').insert(stylist);
  return findById(id);
}



function findStylist() {
  return db('stylists').select('id', 'username');
}





function findStylistById(id) {
  return db('stylists')
    .where({ id })
    .first();
}




module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findPostComments,
  findCommentById,
  insertComment,
};

function find() {
  return db('posts');
}

function findById(id) {
  return db('posts').where({ id: Number(id) });
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db('posts')
    .where('id', Number(id))
    .update(post);
}

function remove(id) {
  return db('posts')
    .where('id', Number(id))
    .del();
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

function insertComment(comment) {
  return db('comments').insert(comment).then(ids => ({ id: ids[0] }));
}



