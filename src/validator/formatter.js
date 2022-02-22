function Trim(){
    let text = "       functionUp   "
    let result = text.trim();
    return console.log(result)
}

function toLowerCase(){
    let text = "VIKASH"
    let result = text.toLowerCase()
    return console.log(result)
}

function ToUpperCase(){
    let text = "vikash"
    let result = text.toUpperCase()
    return console.log(result)
}
module.exports.Trim = Trim
module.exports.toLowerCase = toLowerCase
module.exports.ToUpperCase = ToUpperCase