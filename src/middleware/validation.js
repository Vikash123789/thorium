

const valid = function (input){
    if (typeof (input)===  undefined|| typeof(input) ===null){return false}
    if(typeof (input)==="string" && (input).trim().length>0) {return true}
}

module.exports.valid= valid