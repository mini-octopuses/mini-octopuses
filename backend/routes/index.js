var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

const UserModel = require("../models/user");
const GameModel = require("../models/game");
const QuestionModel = require("../models/question");
const TopicModel = require("../models/topic");

let data_JS_theoretical = require('../dist/js_theoretical')
let data_JS_practical = require('../dist/js_practical')
let data_REGEX_theoretical = require('../dist/regex_theoretical');
let data_react = require('../dist/react')
let data_reactNative = require('../dist/react_native')


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/topics", async function (req, res, next) {
  let topicFromBack = await TopicModel.find();
  res.json({ topicFromBack });
});

async function pushInDB(data) {
  for (const elem of data.questions) {
    let newQuestion = new QuestionModel({
      title: elem.title,
      isFrench: elem.isFrench,
      topic: elem.topic,
      code: elem.code,
      answers: elem.answers,
    });
    await newQuestion.save();
  }
}
router.post('/populate-database', async function (req, res, next) {
  pushInDB(data_JS_theoretical)
  pushInDB(data_JS_practical)
  pushInDB(data_REGEX_theoretical)
  pushInDB(data_react)
  pushInDB(data_reactNative)
  res.json({ result: true })
})

//* Routes for sign-up and sign-in
// page sign up fonctionnelle mais il faut rajouter les vérification des doublons et des mails (la regex en dessous s'occupe des mail mais il faut rediriger)
router.post("/sign-up", async function (req, res, next) {
  // const regexMail = new RegExp(
  //   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  // );

  //recherche si l'utilisateur existe pour ne pas refaire la manipulation
  let user = await UserModel.findOne({ email: req.body.email });
  let passwordHash = bcrypt.hashSync(req.body.password, 10);

  // if (!regexMail.test(req.body.email)) {
  //   return res.json({ result: false, message: "Invalid email" })
  // }

  //si le user n'existe pas alors je vais créer un nouveau user
  if (!user) {
    let newUser = new UserModel({
      username: req.body.username,
      password: passwordHash,
      email: req.body.email,
      token: uid2(32),
      profilPicture: "temporaire String picture",
      isGuest: false,
      topics: [],
      gameList: [],
      progression: [],
    });

    //Sauvegarde du nouveau user en BDD
    let newUserStatus = await newUser.save();
    // renvoie un état en fonction du résultat de la création
    if (!newUserStatus) {
      return res.json({
        result: false,
        message: "La création de votre compte a rencontré un problème",
      });
    } else {
      return res.json({ result: true, user: newUserStatus });
    }
  }
});

//route signIn
router.post("/sign-in", async function (req, res, next) {
  let user = await UserModel.findOne({
    email: req.body.email,
  });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      return res.json({ result: true, token: user.token, user });
    } else {
      return res.json({ result: false, message: "Utilisateur non trouvé" });
    }
  } else {
    return res.json({ result: false, message: "Utilisateur non trouvé" });
  }
});


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
router.post('/generate-game', async function (req, res, next) {
  let topics = req.body.topics.split(',')
  let gameQuestions = [];

  for (const elem of topics) {
    let data = await QuestionModel.find({ topic: elem });
    if (data.length !== 0) {
      shuffleArray(data);
      for (let i = 0; i < 8; i++) {
        gameQuestions.push(data[i]);
      }
    } else {
      return res.json({ result: false, message: "/generate-game error: Questions not found" })
    }
  }
  if (gameQuestions.length !== 8) {
    shuffleArray(gameQuestions);
    gameQuestions = gameQuestions.slice(0, 8);
  }

  let newGame = new GameModel({
    score: 0,
    userAnswers: [],
    questions: gameQuestions,
  });
  let saveStatus = await newGame.save();
  if (!saveStatus) {
    return res.json({ result: false, message: "/generate-game error: Game generation failed" })
  }
  res.json({ result: true, game: saveStatus });
});


router.get("/generate-game", async function (req, res, next) {
  let allQuestions = await QuestionModel.find();

  //let topics = req.body.topics.split('+')
  //  let topics = req.body
  //  let gameQuestions = [];
  //  for (const elem of topics) {
  //    let data = await QuestionModel.find({ topic: elem })
  //    if (data.length !== 0) {
  //      shuffleArray(data)
  //      for (let i = 0; i < 8; i++) {
  //        gameQuestions.push(data[i])
  //      }
  //    }
  //  }
  //  if (gameQuestions.length !== 8) {
  //    shuffleArray(gameQuestions)
  //    gameQuestions = gameQuestions.slice(0, 8);
  //  }
  res.json({ result: true, questions: allQuestions }); // result: true , game: gameQuestions
});

router.post("/save-game", function (req, res, next) {
  let user = {};
  res.json({ result: true, user });
});
router.post("/get-user-all-games", function (req, res, next) {
  let gameList = [];
  res.json({ result: true, gameList });
});
//* Routes for user
router.put("/update-user/", function (req, res, next) {
  let user = {};
  res.json({ result: true, user });
});

router.get("/get-user", function (req, res, next) {
  let user = {};
  res.json({ result: true, user });
});

router.delete("/delete-user", function (req, res, next) {
  res.json({ result: true });
});



router.post('/update-user-topics', async function (req, res, nect) {
  let user = await UserModel.findOne({ token: req.body.token })

  if (!user) {
    return res.json({ result: false })
  }
  let topics = req.body.topics.split(',')
  user.topics = topics

  let status = await user.save()
  if (!status) {
    return res.json({ result: false })
  }
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
