let obj = require("../logger/logger.js")
let obj2 = require("../util/helper.js")
let obj3 = require("../validator/formatter.js")
let obj4 = require("../task4/chunk.js");
let obj5 = require("../task4/tail.js");
let obj6 = require("../task4/union.js");
let obj7 = require("../task4/frompair.js");

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
     obj.welcome()
     obj2.NewDate()
     obj2.BatchInfo()
     obj3.Trim()
     obj3.toLowerCase()
     obj3.ToUpperCase()
    res.send('This is a my First node.js assignment project')
    
});

router.get('/hello', function (req, res){
    console.log(obj4.result);
     console.log(obj5.Array1);
     console.log(obj6.arr5);
     console.log(obj7.result);
    res.send('The End');
});

module.exports = router;
