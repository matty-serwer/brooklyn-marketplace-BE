const db = require("./../../database/dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db("items");
}

function getById(id) {
  return db("items as i")
    .join("merchants as m", "i.user_id", "m.user_id")
    .where("id", id)
    .first();
}

function insert(item) {
  return db("items").insert(item);
}

function update(id, changes) {
  return db("items").where("id", id).update(changes);
}

function remove(id) {
  return db("items").where("id", id).del();
}
