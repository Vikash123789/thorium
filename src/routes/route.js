const express = require('express');
const router = express.Router();


// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

//  take this as sample for array of persons:


let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]



router.post("/voters", function (req, res) {
    let votingAge = req.query.votingAge
    let VotingStatus = persons.filter(element => element.age > votingAge)
    console.log(VotingStatus)
    let updatedPersonVotingStatus = VotingStatus.map(
        element => ({ name: element.name, age: element.age, votingStatus: true })
        )
    res.send(updatedPersonVotingStatus)

})


module.exports = router;

module.exports = router;