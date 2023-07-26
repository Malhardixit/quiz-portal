const { quizModel } = require('../../models/quiz.mongo')
const {usrModel} = require('../../models/user.mongo')
async function createTestUsr(req,res){
    const usr = new usrModel({
        uid:`${req.query.username}`,
        pwd:'Hello123'
    })
    try{
        const usrCreateRes = await usr.save()
        if(usrCreateRes){
            console.log(usrCreateRes)
            res.status(200).send({
                Message:'User Created',
                creds:usr,
            })}
            else{
                res.status(200).send({
                    Message:'Unknown Error'
                })
            }        
    }catch(e){
        console.log(e)
        res.status(500).send({
            Message:"Internal Server Error"
        })
    }
}

async function registerForQuiz(req,res){
    try{
        const usr = await usrModel.findOne({
            uid:req.body.uid 
        })
        if(usr){
            const quizId = req.body.quizId 
            const doesExistRes = await quizModel.find({
                "quizId":quizId,
                "participants.uid":req.body.uid
            })
            if(doesExistRes){
                res.status(200).send({
                    Message:"User Already Exists"
                })
            }
            else{
                const quizUpdate = await quizModel.updateOne({
                    quizId:quizId
                },{
                    $push:{
                        participants:{
                            uid:req.body.uid
                        }   
                    }
                })
                if(quizUpdate){
                    res.status(200).send({
                        Message:'Added Quiz Participant'
                    })
                }
                else{
                    res.status(200).send({
                        Message:'Error in Adding Participant'
                    })
                }
            }
        }
    }catch(e){
        console.log(e)
        res.status(500).send({
            Message:'Internal Server Error'
        })
    }
}

module.exports = {
    createTestUsr,
    registerForQuiz
}