var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var uid2 = require("uid2");

const UserModel = require("../models/user");
const GameModel = require("../models/game");
const QuestionModel = require("../models/question");
const TopicModel = require("../models/topic");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/topics", async function (req, res, next) {
  let topicFromBack = await TopicModel.find();
  res.json({ topicFromBack });
});

//* Routes for sign-up and sign-in
// page sign up fonctionnelle mais il faut rajouter les vérification des doublons et des mails (la regex en dessous s'occupe des mail mais il faut rediriger)
router.post("/sign-up", async function (req, res, next) {
  const regexMail = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );

  //recherche si l'utilisateur existe pour ne pas refaire la manipulation
  let user = await UserModel.findOne({ email: req.body.email });
  let passwordHash = bcrypt.hashSync(req.body.password, 10);
  if (regexMail.test(req.body.email)) {
    console.log("GG", user);
  } else {
    console.log("Foiré");
  }

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
      res.json({ result: true, newUser });
    }
  }
});

//route signIn
router.post("/sign-in", async function (req, res, next) {
  let user = {};
  if (
    req.body.email.trim().toLowerCase() === "" ||
    req.body.password.trim() === ""
  ) {
    return res.json({ result: "Merci de bien remplir tous les champs" });
  } else {
    let user = await UserModel.findOne({
      email: req.body.email,
    });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        return res.json({ result: true, token: user.token });
      } else {
        return res.json({ result: "Utilisateur non trouvé" });
      }
    } else {
      return res.json({ result: "Utilisateur non trouvé" });
    }
  }

  return res.json({ result: true, user });
});

//* Routes for games
router.post("/generate-game", function (req, res, next) {
  let game = {};
  res.json({ result: true, game });
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
