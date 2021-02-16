//Bring in express with an instance of router.
const router = require('express').Router();
const Workout = require('../models/workout');

//Get Routes
// Look up Aggregate functions for get routes


//Continue Workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        })
})

//New Workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        })

});
module.exports = router;