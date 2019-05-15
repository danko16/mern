const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
