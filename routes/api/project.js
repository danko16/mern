const express = require('express');
const router = express.Router();
const Project = require('../../models/project');

router.get('/', (req,res)=>{
  Project
      .find()
      .sort({date: -1})
      .then(data => {res.json(data)})
      .catch(err=>{console.log(err)})
});

router.post('/', (req,res)=>{
  Project
      .create(req.body)
      .then(data => {res.json(data)})
      .catch(err=>{console.log(err)})
});

router.delete('/:id', (req,res)=>{
  Project
      .findOneAndDelete({_id: req.params.id})
      .then(data => {res.json(data)})
      .catch(err=>{console.log(err)})
});

module.exports = router;
