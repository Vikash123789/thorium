const Pairs = require('lodash'); 
let Pairs1 = [['horror','The Shining'],['drama','Titanic'],['“thriller”','Shutter Island'],['fantasy','Pans Labyrinth']];
let result = Pairs.fromPairs(Pairs1);
module.exports.result = result;