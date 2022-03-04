const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
let requestIp = require('ip');
let DateTimeYear = require('date-and-time');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 



mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Vikash123-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected and MiddleWare function as loGGer Also Connected"))
.catch ( err => console.log(err) )


app.use (function(req,res,next){
    let now = new Date();
    let dateTimeNow = DateTimeYear.format(now, 'YYYY/MM/DD HH:mm:ss')
    let url = req.url
    let clientIp = requestIp.address() ;
    console.log(dateTimeNow,clientIp,url)
    next();
})



app.use('/', route);
// app.Logger1('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
