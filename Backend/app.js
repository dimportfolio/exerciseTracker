const express = require('express');

//http://expressjs.com/en/5x/api.html#express
const app = express();

//import connection to database
const mongoose = require('./database/mongoose')

//import models (basically a class)
const Entry = require('./database/models/entry');
const Exercise = require('./database/models/exercise')
/*
CORS - Cross Origin Request Security.
localhost:3000 - backend api
localhost:4200 - frontend
*/

//Enable our application to parse JSON data, the format that the data will be exchanged between the Front end and Back end
app.use(express.json());

//CORS (Cross Origin Resource Sharing Error Resolution - Create this Proxy)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT , PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* 
Create
Read/Read All
Update
Delete
*/
//Our Routes (URL endpoints) where our application will request data from
//Entries
app.get('/entries', (req, res) => {
    Entry
    .find({})
    .then(entries => res.send(entries))
    .catch((error) => console.log(error))
})
app.get('/entries/:entryId', (req, res) => {
    console.log(req.params.entryId);
    Entry
    .find({_id: req.params.entryId})
    .then((entry) => res.send(entry))
    .catch((error) => console.log(error))
})
app.post('/entries', (req, res) => {
    (new Entry({
        'title': req.body.title
    }))
    .save()
    .then((entry) => res.send(entry))
    .catch((error) => console.log(error))
})
app.patch('/entries/:entryId', (req, res) => {
    Entry
    .findOneAndUpdate({ _id: req.params.entryId }, { $set: req.body}, {new: true})
    .then((entry) => res.send(entry))
    .catch((error) => console.log(error))
})

app.delete('/entries/:entryId', (req, res) => {
    const deleteExercises = (entry) => {
        console.log(entry._id)
        Exercise
        .deleteMany({ _entryId: entry._id })
        .then(() => entry)
        .catch((error) => console.log(error))
    }
    const deleteEntry = 
        Entry
        .findOneAndDelete({ _id: req.params.entryId })
        .then((entry) => res.send(deleteExercises(entry)))
        .catch((error) => console.log(error))

})

//Exercises
app.get('/entries/:entryId/exercise', (req, res) => {
    Exercise
    .find({_entryId: req.params.entryId})
    .then((exercise) => res.send(exercise))
    .catch((error) => console.log(error))
})
app.get('/entries/:entryId/exercise/:exerciseId', (req, res) => {
    console.log(req.params.exerciseId);
    Exercise
    .find({_id: req.params.exerciseId})
    .then((exercise) => res.send(exercise))
    .catch((error) => console.log(error))
})
app.post('/entries/:entryId/exercise', (req, res) => {
    (new Exercise({
        'title': req.body.title,
        '_entryId': req.params.entryId,
        'set': req.body.set,
        'rep': req.body.rep,
        'weight': req.body.weight
    }))
    .save()
    .then((exercise) => res.send(exercise))
    .catch((error) => console.log(error))
})
app.patch('/entries/:entryId/exercise/:exerciseId', (req, res) => {
    Exercise
    .findOneAndUpdate({ _id: req.params.exerciseId }, { $set: req.body}, {new: true})
    .then((exercise) => res.send(exercise))
    .catch((error) => console.log(error))
})

app.delete('/entries/:entryId/exercise/:exerciseId', (req, res) => {
    Exercise
    .findOneAndDelete({ _id: req.params.exerciseId })
    .then((exercise) => res.send(exercise))
    .catch((error) => console.log(error))
})




//http://expressjs.com/en/5x/api.html#app.listen_path_callback
app.listen(3000, () => console.log('Server connected on port 3000'))