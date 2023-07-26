const express = require('express')
const Router = express.Router()
const {usrModel} = require('../models/user.mongo')
const {createTestUsr, registerForQuiz} = require('../controllers/userControllers/controller')
Router.get('/createTestUser',createTestUsr)
Router.post('/registerForQuiz',registerForQuiz);
Router.post('/participateInRegisteredQuiz')
Router.post('/saveProgress')
module.exports = Router