const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/user');

router.post('/',(req,res)=>{
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({msg: 'please enter all field'});
    }

    User.findOne({email}).then(user=>{
        if(user) return res.status(400).json({msg: 'user already exist'});

        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        bcrypt.genSalt(10, (err,salt)=>{
            if(err) throw err;

            bcrypt.hash(newUser.password, salt, (err,hash)=>{
                if(err) throw err;

                newUser.password = hash;
                newUser.save().then(user=>{
                    jwt.sign(
                        {id: user._id},
                        process.env.JWT_SECRET,
                        {expiresIn: 3600},
                        (err, token)=>{
                            if(err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.firstName + " " + user.lastName,
                                    email: user.email,
                                    register_date: user.register_date
                                }
                            });
                        }
                    );                    
                });              
            });
        });
    });
});

module.exports = router;