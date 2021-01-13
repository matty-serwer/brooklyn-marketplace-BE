exports.up = function (knex) {
  return knex.chema
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
    })
    .createTable("categories", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("items", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.float("price").notNullable();
      tbl
        .integer("category_id")
        .unsigned()
        .required()
        .references("id")
        .inTable("categories")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("user_id")
        .unsigned()
        .required()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("description");
      tbl.string("img_url");
    })
    .createTable("merchants", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .required()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("location_id")
        .unsigned()
        .required()
        .references("id")
        .inTable("locations")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl.string("description");
      tbl.string("img_url");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("merchants")
    .dropTableIfExists("items")
    .dropTableIfExists("categories")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
