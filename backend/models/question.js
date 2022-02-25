let mongoose = require('mongoose');

let questionSchema = mongoose.Schema({
    title = String,
    topic: [], //* Subject type: HTML CSS
    code: String,
    answers =[{ answer: String, isCorrect: Boolean }],
});

let QuestionModel = mongoose.model('question', questionSchema);

module.exports = QuestionModel;