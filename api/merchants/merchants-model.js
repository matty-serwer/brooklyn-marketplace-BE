const db = require('./../../database/dbConfig');

module.exports = {
  get,
  getById,
  getByMerchId,
  insert,
  update,
  remove,
};

function get() {
  return db('merchants');
}

function getById(id) {
  return db('merchants')
    .join('users', 'users.id', 'merchants.user_id')
    .where('user_id', id)
    .first();
}

function getByMerchId(id) {
  return db('merchants')
    .where("id", id)
    .first()
}

function insert(merchant) {
  return db('merchants')
    .insert(merchant)
}

function update(id, changes) {
  return db('merchants')
    .where('user_id', id)
    .update(changes);
}

function remove(id) {
  return db('merchants')
    .where('id', id)
    .del();
}
