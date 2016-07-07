var express = require('express');
var router = express.Router();
var db = require('../db');



router.get('/teams', function(req, res, next) {
  db.Teams()
  .then(teams =>{
    res.send(teams)
  })
});

router.get('/teams/:id', function(req, res, next) {
  db.Teams()
  .where({
    id: req.params.id
  })
  .first().then(team =>{
    db.Seasons()
    .where({
      team_id: req.params.id
    })
    .then(teamSeasons =>{
      team.seasons = teamSeasons;
      res.send(team);
    })
  })
});

router.get('/years/:year', function(req, res, next) {
  console.log('IN GET YEARS', req.params);

  db.Teams()
  .innerJoin('seasons', 'teams.id','seasons.team_id')
   .then(function(results){
    console.log('Results', results);
    res.json(results);
  })
  // db.Seasons()
  // .where({
  //   year: req.params.year
  // })
  // .then(years =>{
  //   db.Teams()
  //
  //
  //   console.log('YEARS', years);
  //   res.send(years)
  // })
})


module.exports = router;
