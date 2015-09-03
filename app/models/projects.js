var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = new Schema({
  site: String,
  title: String,
  desc: String,
  tech: [String],
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Project = mongoose.model('Project', projectSchema);

// make this available to our users in our Node applications
module.exports = Project;
