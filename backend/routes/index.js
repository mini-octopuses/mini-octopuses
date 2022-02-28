var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const UserModel = require('../models/user')
const GameModel = require('../models/game')
const QuestionModel = require('../models/question')
const TopicModel = require('../models/topic')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//* Routes for sign-up and login
router.post('/sign-up', function (req, res, next) {
  let user = {}
  res.json({ result: true, user })
})
router.post('/login', function (req, res, next) {
  let user = {}
  res.json({ result: true, user })
})


//* Routes for games
router.post('/generate-game', function (req, res, next) {
  let game = {}
  res.json({ result: true, game })
})

router.post('/save-game', function (req, res, next) {
  let user = {}
  res.json({ result: true, user })
})

router.post('/get-user-all-games', function (req, res, next) {
  let gameList = []
  res.json({ result: true, gameList })
})


//* Routes for user
router.put('/update-user/', function (req, res, next) {
  let user = {}
  res.json({ result: true, user });
})

router.get('/get-user', function (req, res, next) {
  let user = {}
  res.json({ result: true, user });
})

router.delete('/delete-user', function (req, res, next) {
  res.json({ result: true })
})


//* OR 
// router.post('/update-user/:param', function (req, res, nect) { //not sure of the synthax
//   res.json({ result: true, user });
// })

//* OR
// router.post('/update-user-topics', function (req, res, nect) {
//   res.json({ result: true, user });
// })
// router.post('/update-user-played-game', function (req, res, nect) {
//   res.json({ result: true, user });
// })
// router.post('/update-user-picture', function (req, res, nect) {
//   res.json({ result: true, user });
// })
// router.post('/update-user-username', function (req, res, nect) {
//   res.json({ result: true, user });
// })
// router.post('/update-user-password', function (req, res, nect) {
//   res.json({ result: true, user });
// })
// router.post('/update-user-settings', function (req, res, nect) {
//   res.json({ result: true, user });
// })

module.exports = router;
