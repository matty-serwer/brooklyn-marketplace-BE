const db = require("./../../database/dbConfig");

module.exports = {
  get,
  insert,
  remove,
};

function get() {
  return db("locations");
}

function insert(location) {
  return db("locations").insert(location);
}

function remove(id) {
  return db("locations").where("id", id).del();
}