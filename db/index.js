var knex = require('./knex');

exports.Teams = () => knex('teams');
exports.Seasons = () => knex('seasons');
