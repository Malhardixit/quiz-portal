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

module.exports = {
    createTestUsr
}