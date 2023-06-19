const {quizModel} = require('../../models/quiz.mongo')
const {usrModel} = require('../../models/user.mongo')
async function createBlankQuiz(req,res){
    const qBody = new quizModel(req.body)
    try{
        const qBodySaveRes = await qBody.save()
        if(qBodySaveRes){
            const usrUpdate = await usrModel.updateOne({
                uid:req.body.uid,

            },{
                $push:{
                    quizzesConducted:qBodySaveRes
                }
            })
            if(usrUpdate){
                res.status(200).send({
                    Message:'Quiz Created and User Updated'
                })
            }
            else{
                res.status(200).send({
                    Message:"Quiz Created user not updated"
                })
            }
        }
        else{
            res.status(200).send({
                Message:'Error!Missing params'
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).send({
            Message:'Internal Server Error'
        })
    }
}
async function addQuestion(req,res){
    try{
        console.log(req.body)
        const qUpdate = await quizModel.updateOne({
            quizId:req.body.quizId
        },{
            $push:{
                questionSets:req.body.question
            }
        })
        if(qUpdate){
            res.status(200).send({
                Message:`Quiz: ${req.body.quizId} updated, question added`
            })
        }
        else{
            res.status(200).send({
                Message:'Error in updation'
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).send({
            Message:'Internal Server Error'
        })
    }
}
async function getQuiz(req,res){
    try{
        const quiz = await quizModel.findOne({
            quizId:req.body.quizId
        })
        if(quiz){
            res.status(200).send({
                Message:"Quiz Response",
                quiz:quiz
            })
        }
        else{
            res.status(200).send({
                Message:'Quiz not available'
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).send({
            Message:'Internal Server Error'
        })
    }
}
module.exports = {
    createBlankQuiz,
    addQuestion
}