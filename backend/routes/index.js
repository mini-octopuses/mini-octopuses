var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const UserModel = require('../models/user')
const GameModel = require('../models/game')
const QuestionModel = require('../models/question')
const TopicModel = require('../models/topic')

let data_JS_theoretical = require('../dist/js_theoretical')
let data_JS_practical = require('../dist/js_practical')
let data_REGEX_theoretical = require('../dist/regex_theoretical');
const data = require('../dist/js_theoretical');


/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//*------------------------------------------------------------------------------------------------//
//*  /populate-database
//*  Usage:
//*       Input: None
//*       What it does: It populates the database with the questions of the concerned topic in the concerned file
//*       What you receive: Nothing, everything happens in the database
//*-------------------------------------------------------------------------------------------------//
async function pushInDB(data) {
  for (const elem of data.questions) {
    let newQuestion = new QuestionModel({
      title: elem.title,
      isFrench: elem.isFrench,
      topic: elem.topic,
      code: elem.code,
      answers: elem.answers
    })
    await newQuestion.save()
  }
}
router.post('/populate-database', async function (req, res, next) {
  pushInDB(data_JS_theoretical)
  pushInDB(data_JS_practical)
  pushInDB(data_REGEX_theoretical)
  res.json({ result: true })
})


//* Routes for sign-up and login
router.post('/sign-up', function (req, res, next) {
  let user = {}
  res.json({ result: true, user })
})
router.post('/login', function (req, res, next) {
  let user = {}
  res.json({ result: true, user })
})

router.get('/topics', async function (req, res, next) {

  let topicFromBack = await TopicModel.find()
  res.json({ topicFromBack })
})

//* Routes for games
//*------------------------------------------------------------------------------------------------//
//*  /generate-game
//*  Usage:
//*       Input: receives a string in the following format:
//*       "HTML+CSS+JavaScript+Regex" which is stocked inside req.body.topics
//*       What it does: it splits everything to an array and sends back
//*       What you receive: a response (result), and 8 questions depending of the types received
//*       Note: This code supports single and multi topics
//*-------------------------------------------------------------------------------------------------//
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
router.post('/generate-game', async function (req, res, next) {
  let topics = req.body.topics.split('+')

  let gameQuestions = [];
  for (const elem of topics) {
    let data = await QuestionModel.find({ topic: elem })
    if (data.length !== 0) {
      shuffleArray(data)
      for (let i = 0; i < 8; i++) {
        gameQuestions.push(data[i])
      }
    }
  }
  if (gameQuestions.length !== 8) {
    shuffleArray(gameQuestions)
    gameQuestions = gameQuestions.slice(0, 8);
  }
  res.json({ result: true, game: gameQuestions })
})

//*------------------------------------------------------------------------------------------------//
//*  /save-game
//*  Usage:
//*-------------------------------------------------------------------------------------------------//
router.post('/save-game', function (req, res, next) {
  let user = {}
  res.json({ result: true, user })
})

//*------------------------------------------------------------------------------------------------//
//*  /get-user-all-games
//*  Usage:
//*-------------------------------------------------------------------------------------------------//
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
