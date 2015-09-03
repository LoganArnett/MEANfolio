// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Project = require('./models/projects');

module.exports = function(app){

// server routes ====
// handle API calls
// authentication routes

// sample API routes
app.get('/api/projects', function(req, res){
  // use mongoose to get all nerds in the db
  Project.find(function(err, projects){
    if(err)
       res.send(err);

    res.json(projects);
  });
});

// route to handle creating goes here(app.post)
// route to handle delete goes here (app.delete)
app.post('/api/projects', function(req, res){
  var info = req.body;
  var project = new Project({
      site: info.site,
      title: info.title,
      desc: info.desc,
      tech: info.tech,
      created_at: Date.now()
  })
  project.save(function(err){
    if (err) return handleError(err);
    // saved
  })
});
// frontend routes ======
// route to handle all angular requests
app.get('*', function(req, res){
  res.sendfile('./public/views/index.html');
})

};
