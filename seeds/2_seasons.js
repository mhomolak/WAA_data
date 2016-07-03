var startYear = 1996;
var totalYears = 20;

function seasonData() {
  var collection = [];
  for(let i = 0; i < totalYears; i++){
    var years = require(`../csv&json_years/1996-2015json/${startYear}.json`)
    for (var j = 0; j < years.length; j++) {
      collection.push({
        year: years[j].year,
        team_id: years[j].team_id,
        payroll: years[j].payroll,
        team_waa: years[j].team_waa,
        wins: years[j].wins,
        losses: years[j].losses,
        playoffs: years[j].playoffs,
        championship: years[j].championship,
      })
    }
    startYear++;
  }
  return collection;
}
// console.log(seasonData());
// console.log(seasonData(years));

exports.seed = function(knex, Promise) {
  return knex('seasons').del()
    .then(function () {
      return Promise.all([
        knex('seasons').insert(seasonData()),
      ]);
    });
};
