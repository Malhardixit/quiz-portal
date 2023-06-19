const mongoose = require('mongoose')
const {qSchema} = require('./quiz.mongo')
const usrSchema = new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    quizzesConducted:{
        type:[qSchema],
        default:[]
    },
    quizzesPlayed:{
        type:[qSchema],
        default:[]
    }
})

module.exports = {
    usrSchema:usrSchema,
    usrModel:mongoose.model('usrModel',usrSchema)
}