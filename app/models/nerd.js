// grab the mongoose module
var mongoose = require('mongoose');

// define the nerd model
module.exports = mongoose.model('Nerd', {
  name: {type: String, default: ''}
  
});
