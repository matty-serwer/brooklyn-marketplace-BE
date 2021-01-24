// get, insert, delete

const db = require("./../../database/dbConfig");

module.exports = {
  get,
  insert,
  remove,
};

function get() {
  return db("categories");
}

function insert(category) {
  return db("categories").insert(category);
}

function remove(id) {
  return db("categories").where("id", id).del();
}
