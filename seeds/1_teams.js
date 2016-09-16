var teams = require('../csv&json_years/1996-2015json/2015.json');

function teamNames(teams) {
  var teamArr = [];
  for (var i = 0; i < teams.length; i++) {
    teamArr.push({
      team_name: teams[i].team_name
    })
  }
  return teamArr;
}

exports.seed = function(knex, Promise) {

  return knex('teams').del()
    .then(function () {
      return Promise.all([
        knex('teams').insert(teamNames(teams))
      ]);
    });
};
