// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true 
        },

    image: { 
        type: String ,
        default: null 
        },
    
    label: { 
        type: String,
        default: null 
        },

    price: { 
        type: Currency,
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
var Promotions = mongoose.model('Promotion', promoSchema);

// make this available to our Node applications
module.exports = Promotions;