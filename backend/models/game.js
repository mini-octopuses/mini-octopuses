let mongoose = require('mongoose');

let gameSchema = mongoose.Schema({
    score: Number,
    userAnswers: [Number], //*userAnswers =[1, 2, 1, 3, 4, 3, 4, 2], user's answers at each question
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'question' }],
});

let GameModel = mongoose.model('games', gameSchema);

module.exports = GameModel;