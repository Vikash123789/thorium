const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weather")
const memeController= require("../controllers/memeControler")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/sessionByDistrictId", CowinController.sesssionByDistrictId)

router.get("/weatherReport/weaTher",weatherController.weaTher)
router.get("/weatherReport/weaTher/shorted",weatherController.Cites)


router.get("/get_memes", memeController.GetMemeId)
router.post("/memes/memes", memeController.memes)





module.exports = router;