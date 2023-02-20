const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        trim:true,
        
    },
    passwordHash:{
        type:String,
        trim:true,
    },
    isVerified:{
        type:String,
        trim:true,
    },
    FirstName:{
        type:String,
        
        trim:true
    },
    LastName:{
        type:String,
        
        trim:true
    },
    PhoneNumber:{
        type:Number,
        
        trim:true
    },
    Address:{
        type:String,
        
        trim:true
    },
    Birthday:{
        type:String,
        
        trim:true
    },
    Gender:{
        type:String,
    
        trim:true
    },
    profilePhoto:{
        type:String,

        trim:true

    },
    SkillLevel:{
        type:String,
        
        trim:true
    },
    yearOfExpereince:{
        type:Number,
        
        trim:true
    },
    Genre:{
        type:String,
        
        trim:true
    },
    Bio:{
        type:String,
        
        trim:true
    },
    youtubeUrl:{
        type:String,
        
        trim:true
    }
    
})

module.exports = mongoose.model("User", userSchema);