var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

const UserModel = require("../models/user");
const GameModel = require("../models/game");
const QuestionModel = require("../models/question");
const TopicModel = require("../models/topic");

let data_JS_theoretical = require("../dist/js_theoretical");
let data_JS_practical = require("../dist/js_practical");
let data_REGEX_theoretical = require("../dist/regex_theoretical");
let data_react = require("../dist/react");
let data_reactNative = require("../dist/react_native");
let data_html = require("../dist/html")
let data_mongo = require('../dist/mongo')
let data_express = require('../dist/express')

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
router.post("/populate-database", async function (req, res, next) {
  pushInDB(data_JS_theoretical);
  pushInDB(data_JS_practical);
  pushInDB(data_REGEX_theoretical);
  pushInDB(data_react);
  pushInDB(data_reactNative);
  pushInDB(data_html)
  pushInDB(data_mongo)
  pushInDB(data_express)
  res.json({ result: true });
});

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
      isGuest: req.body.isGuest === "false" ? false : true,
      // isGuest: false,
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
};

router.post("/generate-game", async function (req, res, next) {
  let topics = req.body.topics.split(",");
  let gameQuestions = [];


  for (const elem of topics) {
    let data = await QuestionModel.find({ topic: elem });

    if (data.length !== 0) {
      shuffleArray(data);
      for (let i = 0; i < 8; i++) {
        gameQuestions.push(data[i]);
      }
    } else {
      return res.json({
        result: false,
        message: "/generate-game error: Questions not found",
      });
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
    return res.json({
      result: false,
      message: "/generate-game error: Game generation failed",
    });
  }
  res.json({ result: true, game: saveStatus });
});

router.post("/save-game", async function (req, res, next) {
  let parsedGame = JSON.parse(req.body.game);
  await GameModel.updateOne({ _id: parsedGame._id }, { score: parsedGame.score, userAnswers: parsedGame.userAnswers });

  let game = await GameModel.findOne({ _id: parsedGame._id });
  if (!game) {
    res.json({ result: false, message: "Error: Game update failed" });
  }
  let user = await UserModel.findOne({ token: req.body.token });
  if (!user) {
    res.json({ result: false, message: "Error: User not found" });
  }
  user.gameList.push(game);
  let status = await user.save();
  if (!status) {
    res.json({ result: false, message: "Error: Game save failed" });
  }
  res.json({ result: true });
});

router.get("/get-user-all-games", async function (req, res, next) {
  let user = await UserModel.findOne({ token: req.query.token })
    .populate("gameList")
    .populate({
      path: "gameList",
      populate: { path: "questions", model: "question" },
    })
    .exec();
  if (!user) {
    req.json({ result: false, message: "Error: User not found" });
  }
  res.json({ result: true, gameList: user.gameList });
});

router.get("/get-game", async function (req, res, next) {
  let game = await GameModel.findOne({ _id: req.query.id }).populate("questions").exec();
  if (!game) {
    req.json({ result: false, message: "Error: game not found" });
  }
  res.json({ result: true, game });
});

router.put("/update-user/", async function (req, res, next) {
  let user = await UserModel.findOne({ token: req.body.token });
  if (!user) {
    return res.json({ result: false, message: "Error: User not found" });
  }
  await UserModel.updateOne({ token: req.body.token }, { username: req.body.username, email: req.body.email });
  let updatedUser = await UserModel.findOne({ token: req.body.token });
  if (!updatedUser) {
    return res.json({ result: false, message: "Error: Updated user not found" });
  }
  res.json({ result: true, updatedUser, message: "Vos modifications ont bien été enregistrées." });
});

router.delete("/delete-user", async function (req, res, next) {
  let status = await UserModel.deleteOne({ token: req.body.token });
  if (status.deletedCount !== 0) {
    return res.json({ result: true });
  }
  res.json({ result: false });
});

router.get("/get-user", async function (req, res, next) {
  let user = await UserModel.findOne({ token: req.query.token });
  if (!user) {
    return res.json({ result: false, message: "Error user not found" });
  }
  res.json({ result: true, user });
});

router.post("/update-user-topics", async function (req, res, nect) {
  let user = await UserModel.findOne({ token: req.body.token });

  if (!user) {
    return res.json({ result: false });
  }
  let topics = req.body.topics.split(",");
  user.topics = topics;

  let status = await user.save();
  if (!status) {
    return res.json({ result: false });
  }
  res.json({ result: true });
});

module.exports = router;
