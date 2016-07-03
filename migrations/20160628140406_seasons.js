
exports.up = function(knex, Promise) {
  return knex.schema.createTable('seasons', function(table) {
    table.increments();
    table.integer('year')
    table.integer('team_id').references('id').inTable('teams').onDelete('CASCADE').onUpdate('CASCADE');;
    table.integer('wins');
    table.integer('losses');
    table.integer('payroll');
    table.decimal('team_waa');
    table.boolean('playoffs');
    table.boolean('championship');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seasons');
};
