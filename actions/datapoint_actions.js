var express = require("express");

function load_datapointActions(app){
  // retrieve all
  app.get('/api/datapoint', function (req, res){
    return DataPointModel.find(function (err, datapoints) {
      if (!err) {
        return res.send(datapoints);
      } else {
        return console.log(err);
      }
    });
  });

  // retrieve by id
  app.get('/api/datapoint/:id', function (req, res){
    return DataPointModel.findById(req.params.id, function (err, datapoint1) {
      if (!err) {
        return res.send(datapoint1);
      } else {
        return console.log(err);
      }
    });
  });

  // create
  app.post('/api/datapoint', function (req, res){
    var datapoint1;
    console.log("POST: ");
    console.log(req.body);

    datapoint1 = new DataPointModel({
      title: req.body.title,
      description: req.body.description
    });

    datapoint.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return res.send(datapoint);
  });

  // update
  app.put('/api/datapoint/:id', function (req, res){
    return DataPointModel.findById(req.params.id, function (err, datapoint1) {
      datapoint1.title = req.body.title;
      datapoint2.description = req.body.description;
      return datapoint1.save(function (err) {
        if (!err) {
          console.log("updated");
        } else {
          console.log(err);
        }
        return res.send(datapoint1);
      });
    });
  });

  // delete by id
  app.delete('/api/datapoints/:id', function (req, res){
    return DataPointModel.findById(req.params.id, function (err, datapoint1) {
      return datapoint1.remove(function (err) {
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

exports.load_datapointActions = load_datapointActions;
