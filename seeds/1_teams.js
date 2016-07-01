var seasons1996_2000 = require('../csv_years/1996-2000/1996.json');

var teamArr = [
  {
    id: 1,
    name: 'cardinals'
  },
  {
    id: 2,
    name: 'yankees'
  }
]

exports.seed = function(knex, Promise) {


  return knex('teams').del()
    .then(function () {
      return Promise.all([
        knex('team').insert(teamArr)
      ]);
    });
};
