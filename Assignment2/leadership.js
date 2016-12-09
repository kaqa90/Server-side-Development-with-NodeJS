// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    image: { 
        type: String,
        default: null 
    },
    
    designation: { 
        type: String ,
        default: null 
    },

    abbr: {
        type: String , 
        uppercase: true,
        default: null 
    },

    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Leaderships = mongoose.model('Leadership', leaderSchema);

// make this available to our Node applications
module.exports = Leaderships;