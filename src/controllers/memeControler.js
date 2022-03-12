const axios = require("axios")



let GetMemeId = async function(req,res){
    try {
        let option = {
            method:"get",
            url: `https://api.imgflip.com/get_memes`
        }
   let result = await axios(option)

   res.status(200).send({status:true ,res : result.data})

    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}





let memes = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let username = req.query.username
        let password = req.query.password
        let options = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&username=${username}&password=${password}`
        }
        let result = await axios(options);
    
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




module.exports.GetMemeId=GetMemeId
module.exports.memes=memes