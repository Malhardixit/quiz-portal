const mongoose = require('mongoose')
const {qaSchema} = require('./qa.mongo')
const qSchema = new mongoose.Schema({
    quizId:{
        type:String,
        required:true
    },
    questionSets:{
        type:[qaSchema],
        default:[]
    },
    uid:{
        type:String,
        required:true
    },
    participants:{
        type:[{
            uid:{
                type:String,
                required:true
            },
            correctlyAnswered:{
                type:[qaSchema],
                required:true,
                default:[]
            },
            wronglyAnswered:{
                type:[qaSchema],
                required:true,
                default:[]
            },
            unansweredQuestions:{
                type:[qaSchema],
                required:true,
                default:[]
            },
            leaderboardRank:{
                type:Number,
                default:0
            }
        }]
    }
})

module.exports = {
    qSchema:qSchema,
    quizModel:mongoose.model('quizModel',qSchema)
}