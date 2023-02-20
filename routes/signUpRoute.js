
const express = require('express')
const router = express.Router()
const connectDB = require('../db/connect')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const signUpRoute ={
    path:'/api/signup',
    method:'post',
    handler:async(req,res)=>{
        const {email,password} = req.body;
        const db =connectDB(process.env.MONGO_URI);
        const user = await User.findOne({email});
        if(user){
            res.sendStatus(409);

        }
        //for encrypting password
        const passwordHash = await bcrypt.hash(password,10);

        const result = await User.create({
            email,
            passwordHash, 
            isVerified:false
        });
        const{insertedId} =result;
        jwt.sign({
            id: insertedId,
            email,
            isVerified: false,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'2d',
          
            },
        (err,token) => {
            if (err){
                return res.status(500).send(err);
                
            }
            res.status(200).json({token});
        }
        )
        

    }
}
module.exports = signUpRoute
