const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        minlengh: 3
    },
    date:{
        type: Date
    }
});

const Entry = mongoose.model('Entry', EntrySchema)

module.exports = Entry;