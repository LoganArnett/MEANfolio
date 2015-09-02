// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Projects = require('./models/projects');

module.exports = function(app){

// server routes ====
// handle API calls
// authentication routes

// sample API routes
app.get('/api/nerds', function(req, res){
  // use mongoose to get all nerds in the db
  Nerd.find(function(err, nerds){
    if(err)
       res.send(err);

    res.json(nerds);
  });
});

// route to handle creating goes here(app.post)
// route to handle delete goes here (app.delete)
app.post('/api/projects', function(req, res){
  console.log(req.body);
});
// frontend routes ======
// route to handle all angular requests
app.get('*', function(req, res){
  res.sendfile('./public/views/index.html');
})

};
