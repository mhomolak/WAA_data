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
    console.log("BIG OLE LOG");
  })
});

module.exports = router;
