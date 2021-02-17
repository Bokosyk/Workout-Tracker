//Bring in express with an instance of router.
const router = require('express').Router();
const Workout = require('../models/workout');

//Get Routes
// Look up Aggregate functions for get routes


//Continue Workout
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            dbWorkouts.forEach(workout => {
                var sum = 0;
                workout.exercises.forEach(event => {
                    sum += event.duration;
                });
                workout.totalDuration = sum;
                res.json(dbWorkouts);
            })
                .catch(err => {
                    res.json(err);
                })
        })
});

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
    Workout.findOneAndUpdate(
        { _id: params.id },
        {   //Found this option os stack overflow on how to push inside of an array.
            $push: { exercises: body },
            $inc: { totalDuration: body.duration },
        },
        { new: true }).then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        })

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

// range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
})

module.exports = router;