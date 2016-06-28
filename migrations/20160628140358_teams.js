
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(table) {
    table.increments('id');
    table.string('team_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
