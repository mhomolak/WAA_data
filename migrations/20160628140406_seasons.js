
exports.up = function(knex, Promise) {
  return knex.schema.createTable('seasons', function(table) {
    table.increments();
    table.integer('year').references('id').inTable('teams').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('team_id');
    table.integer('payroll');
    table.decimal('team_war');
    table.integer('wins');
    table.integer('losses');
    table.boolean('playoffs').defaultTo('false');
    table.boolean('championship').defaultTo('false');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seasons');
};
