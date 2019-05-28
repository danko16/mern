const express = require('express');
const router = express.Router();
const Project = require('../../models/project');
const auth = require('../../middleware/auth');

router.get('/', (req,res)=>{
  Project
      .find()
      .sort({date: -1})
      .then(data => {res.json(data)})
      .catch(err=>{console.log(err)})
});

router.post('/',auth, (req,res)=>{
  Project
      .create(req.body)
      .then(data => {res.json(data)})
      .catch(err=>{console.log(err)})
});

router.delete('/:id',auth, (req,res)=>{
  Project
      .findOneAndDelete({_id: req.params.id})
      .then(data => {res.json(data)})
      .catch(err=>{console.log(err)})
});

module.exports = router;
