const axios = require("axios")

let weaTher = async function (req, res) {
    try {
        let q = req.query.q


        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=61367947f9e413d5af1e5a0739034f56`

        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ status: true, result: data })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}



let Cites = async function (req, res) {
    try {
        let location = ["Rewa", "Satna", "Bhopal", "Indore", "Pune", "Delhi"]
        let Cityobj = []
        for (let i = 0; i < location.length; i++){ 
            let CityObject = { city: location[i] }
            let Responce = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${location[i]}&appid=61367947f9e413d5af1e5a0739034f56`
            }
            let result = await axios(Responce)
            CityObject.temp = result.data.main.temp
            Cityobj.push(CityObject)
    }
        let SortedCities = Cityobj.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, Msg: SortedCities })
    }

    catch (error) {
        res.status(500).send({ error: error.message })
    }
}





module.exports.weaTher = weaTher
module.exports.Cites = Cites