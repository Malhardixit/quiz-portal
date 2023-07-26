const express = require('express')
const Router = express.Router()
const {createBlankQuiz, addQuestion, getQuiz} = require('../controllers/quizControllers/controller')
Router.post('/createBlankQuiz',createBlankQuiz)
Router.post('/addQuestion',addQuestion)
Router.get('/getQuiz',getQuiz)
Router.post('/add3DQuestion')
module.exports = Router