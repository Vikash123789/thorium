const Union = require('lodash');
let arr = [5,4,84,5]
let arr1 = [5,8,47,5,84]
let arr2 = [84,75,47,5,8]
let arr3 = [85,5,8,4,2]
let arr4 = [5,84,147,84]
let arr5 = Union.union(arr,arr1, arr2, arr3, arr4);
module.exports.arr5 =  arr5