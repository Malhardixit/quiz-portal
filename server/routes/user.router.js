const express = require('express')
const Router = express.Router()
const {usrModel} = require('../models/user.mongo')
const {createTestUsr} = require('../controllers/userControllers/controller')
Router.get('/createTestUser',createTestUsr)
module.exports = Router