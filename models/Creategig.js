const mongoose = require('mongoose');

const GigSchema = new mongoose.Schema({
    title:{
        type:String,
        // required:[true,'must provide title'],
        trim:true,
        maxlength:[20,'Max title should be of 20 characters'],
    },
    location:{
        type:String,
        // required:[true,'must provide the venue address'],
        trim:true,
        maxlength:[20,'max address length should be of 30 characters']

    },
    venuename:{
        type:String,
        // reuired:[true,'must provide the venue name'],
        trim:true,
        maxlength:[20,'max venue name should be of 20 characters long']

    },
    date:{
        type:Number,
        // required:[true,'must provide the date']
    },
    genre:{
        type:String,
        // required:[true,'must provide the genre'],
        trim:true,
    },
    capacity:{
        type:Number,
        // reuired:[true,'must provide the capacity number '],

    },
    preferredskill:{
        type:String,
        // reuired:[true,'must provide the preferred skill']
    }


})
module.exports = mongoose.model('Creategig',GigSchema)