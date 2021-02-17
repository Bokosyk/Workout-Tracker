//Bring in express with an instance of router.
const router = require('express').Router();
const Workout = require('../models/workout');

//Get Routes
// Look up Aggregate functions for get routes


//Continue Workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            dbWorkouts.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(event => {
                    total += event.duration;
                })
            })
            workout.totalduration = total;
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

//Add to a previous workout.
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id,
        {   //Found this option os stack overflow on how to push inside of an array.
            $push: { exercises: body }
        }
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            })
    )
});

//Delete a workout.
router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        })
})

module.exports = router;