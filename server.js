var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  //router = express.Router();
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*router.route('/tasks')
  .post(function(req, res){
    var task = new Task();
      task.name = req.body.name;
      task.login = req.body.name;
      task.password = req.body.name;

      task.save(function(error){
        if(error)
          res.json({message: 'Usuario criado!'});
    });
});*/



var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('todo list RESTful API server started on: ' + port);
