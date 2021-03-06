exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();
      tbl.string("email", 128).notNullable().unique();
      tbl
        .integer("role")
        .unsigned()
        .references("id")
        .inTable("roles")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .defaultTo(2);
    })
    .createTable("locations", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl.string("neighborhood")
      tbl.string("gmap_url");
      tbl.string("website_url");
    })
    .createTable("categories", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("merchants", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("location_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("locations")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl.string("description");
      tbl.string("img_url");
    })
    .createTable("items", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("price");
      tbl
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("description");
      tbl.string("img_url");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("merchants")
    .dropTableIfExists("categories")
    .dropTableIfExists("locations")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
