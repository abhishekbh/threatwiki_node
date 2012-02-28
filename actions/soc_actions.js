var express = require("express");

function load_socActions(app, socmodel_inc){
  var SocModel = socmodel_inc;
  // retrieve all
  app.get('/api/soc', function (req, res){
    return SocModel.find(function (err, socs) {
      if (!err) {
        return res.send(socs);
      } else {
        return console.log(err);
      }
    });
  });

  // retrieve by id
  app.get('/api/soc/:id', function (req, res){
    return SocModel.findById(req.params.id, function (err, soc1) {
      if (!err) {
        return res.send(soc1);
      } else {
        return console.log(err);
      }
    });
  });

  // create
  app.post('/api/soc', function (req, res){
    var soc1;
    console.log("POST: ");
    console.log(req.body);

    soc1 = new SocModel({
      title: req.body.title,
      description: req.body.description
    });

    soc1.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log("!!!Could not Save: " + err);
      }
    });
    return res.send(soc1);
  });

  // update
  app.put('/api/soc/:id', function (req, res){
    return SocModel.findById(req.params.id, function (err, soc1) {
      soc1.title = req.body.title;
      soc2.description = req.body.description;
      return soc1.save(function (err) {
        if (!err) {
          console.log("updated");
        } else {
          console.log(err);
        }
        return res.send(soc1);
      });
    });
  });

  // delete by id
  app.delete('/api/socs/:id', function (req, res){
    return SocModel.findById(req.params.id, function (err, soc1) {
      return soc1.remove(function (err) {
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

exports.load_socActions = load_socActions;
