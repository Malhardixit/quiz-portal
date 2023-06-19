const express = require('express');

const Router = express.Router();
const {
  createBlankQuiz,
  addQuestion,
} = require('../controllers/quizControllers/controller');

Router.post('/createBlankQuiz', createBlankQuiz);
Router.post('/addQuestion', addQuestion);
module.exports = Router;
