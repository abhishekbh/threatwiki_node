var application_root = __dirname,
  express = require("express"),
  routes = require("./routes"),
  model = require("./model"),
  mongoose = require('mongoose');

var app = module.exports = express.createServer();

// Database
mongoose.connect('mongodb://localhost/namp');

// config
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// create model
model.createModel();
var SocModel = model.SocModel;

// routes
app.get('/', routes.index);

app.get('/api/soc', function (req, res){
  return SocModel.find(function (err, socs) {
    if (!err) {
      return res.send(socs);
    } else {
      return console.log(err);
    }
  });
});

// server listen
app.listen(3000); 
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

