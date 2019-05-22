const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
require('dotenv').config();

const User = require('../../models/user');

router.post('/', (req,res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({msg: 'please enter all field'});
    }

    User.findOne({email}).then(user=>{
        if(!user) return res.status(400).json({msg: 'user doesn\'t exist'});

        bcrypt.compare(password, user.password).then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg: 'password doesn\'t match'});

            jwt.sign(
                {id: user._id},
                process.env.JWT_SECRET,
                {expiresIn: 3600},
                (err,token)=>{
                    if(err) throw err;

                    res.json({
                        token,
                        user: {
                            id: user._id,
                            name: user.firstName + " " + user.lastName,
                            email: user.email
                        }
                    });
            });
        })
    })
});

router.get('/user',auth, (req,res)=>{
    User.findById(req.user.id)
        .select('-password')
        .then(user=>{
            res.json({
                user
            });
        })
});

module.exports = router;