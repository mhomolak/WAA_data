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
  db.Seasons()
  .where({
    year: req.params.year
  })
  .then(years =>{
    db.Teams()
    res.send(years)
  })
})


module.exports = router;
