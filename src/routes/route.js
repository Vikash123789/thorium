const express = require('express');
const router = express.Router();

router.get('/movies', function (req, res) {
    res.send('["The Shining", "Incendies", "Rang de Basanti", "Finding Demo"]');
});

router.get('/movies/:movieId', function (req , res) {
    let movieIndex= ["The Shining", "Incendies", "Rang de Basanti", "Finding Demo"]
        let index1 = req.params.movieId;
    if (index1>movieIndex.length-1){
        res.send("Movie does not exists.");
    }
    else res.send(movieIndex[index1]);
});

router.get('/films', function (req, res) {
    let movies = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }];
    res.send(movies);
});

router.get('/films/:filmId', function (req, res) {
    let movies = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }];
       let a = 0;
       let id = req.params.filmId;
       for (let i=0; i<movies.length; i++){
           if (id == movies[i].id){
            res.send(movies[i]);
            a = 1;
            break;
           }
       }
       if (a == 0)
           res.send("No movie exists with this id.");
    res.send(movies);
});

module.exports = router;
