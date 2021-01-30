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
    .join("locations as l", "m.location_id", "l.id")
    .select("i.name", "i.price", "i.category_id", "i.user_id", "i.description", "i.img_url", "m.name as merchant_name", "l.name as location_name", "m.location_id")
    .where("i.id", id)
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
