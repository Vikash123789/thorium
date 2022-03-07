
const isFree = function (req, res, next){
    let data = req.headers
     
  
   if(data.hasOwnProperty("isfreeappuser") === false){
       res.send({error : " Enter  Mandatory header" })
   }else {
       next()
   }

}

module.exports.isFree = isFree