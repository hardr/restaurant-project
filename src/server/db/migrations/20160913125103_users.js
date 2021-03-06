exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', ((table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('permissions').notNullable().default('guest');
  }));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
