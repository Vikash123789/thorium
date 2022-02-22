function TodayDate(){
    const NewDate =  Date();
return console.log(NewDate)
}

function BatchInfo(){
    console.log("Thorium, W3D1, the topic for today is Nodejs module system")
}
module.exports.NewDate=TodayDate
module.exports.BatchInfo = BatchInfo