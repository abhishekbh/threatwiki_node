var express = require("express");

function load_locationActions(app){
  // retrieve all
  app.get('/api/location', function (req, res){
    return LocationModel.find(function (err, locations) {
      if (!err) {
        return res.send(locations);
      } else {
        return console.log(err);
      }
    });
  });

  // retrieve by id
  app.get('/api/location/:id', function (req, res){
    return LocationModel.findById(req.params.id, function (err, location1) {
      if (!err) {
        return res.send(location1);
      } else {
        return console.log(err);
      }
    });
  });

  // create
  app.post('/api/location', function (req, res){
    var location1;
    console.log("POST: ");
    console.log(req.body);

    location1 = new LocationModel({
      title: req.body.title,
      description: req.body.description
    });

    location.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return res.send(location);
  });

  // update
  app.put('/api/location/:id', function (req, res){
    return LocationModel.findById(req.params.id, function (err, location1) {
      location1.title = req.body.title;
      location2.description = req.body.description;
      return location1.save(function (err) {
        if (!err) {
          console.log("updated");
        } else {
          console.log(err);
        }
        return res.send(location1);
      });
    });
  });

  // delete by id
  app.delete('/api/locations/:id', function (req, res){
    return LocationModel.findById(req.params.id, function (err, location1) {
      return location1.remove(function (err) {
        if (!err) {
          console.log("removed");
          return res.send('');
        } else {
          console.log(err);
        }
      });
    });
  });
}

exports.load_locationActions = load_locationActions;
