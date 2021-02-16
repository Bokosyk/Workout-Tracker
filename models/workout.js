//Dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Inquire about this section.
const workoutSchema = new Schema({
    day: {
        type: Date,
        //Grabs current date.
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter an exercise type',
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter an exercise name',
            },
            duration: {
                type: Number,
                required: 'Enter an exercise duration in minutes',
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});

const Workout = mongoose.model('Workout', workoutSchema);

//Exports
module.exports = Workout;