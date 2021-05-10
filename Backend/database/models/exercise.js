const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        minlengh: 3
    },
    _entryId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    set:{
        type: Number,
        required: true    
    },
    rep: {
        type: Number,
        required: true
    },
    weight: {
        type: Number
    }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise;