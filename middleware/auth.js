const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req,res,next){
    //const token = req.headers['x-auth-token'];
    const token = req.header('x-auth-token');

    if(!token) return res.status(401).json({msg: 'unauthorized request'});

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        next();

    }catch(err){
        return res.status(400).json({msg: 'token invalid'}); 
    }
}

module.exports = auth;