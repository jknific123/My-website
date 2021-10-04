const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    author: String,
    mark: {type: Number, required: true, min: 0, max: 5},
    text: String,
    date: {type: Date, "default": Date.now}
});

const locationsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    mark: {type: Number, "default": 0, min: 0, max: 5},
    properties: [String],
    coordinates: {type: [Number], index: '2dsphere'},
    comments: [commentsSchema]
});


//ustvari model
mongoose.model("Location", locationsSchema, "Locations")