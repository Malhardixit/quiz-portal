const express = require('express')
const Router = express.Router()
const {usrModel} = require('../models/user.mongo')
const {createTestUsr, registerForQuiz} = require('../controllers/userControllers/controller')
Router.get('/createTestUser',createTestUsr)
Router.post('/registerForQuiz')
Router.post('/participateInRegisteredQuiz',registerForQuiz)
Router.post('/saveProgress')
module.exports = Router