var express = require("express");

function load_tagActions(app){
  // retrieve all
  app.get('/api/tag', function (req, res){
    return TagModel.find(function (err, tags) {
      if (!err) {
        return res.send(tags);
      } else {
        return console.log(err);
      }
    });
  });

  // retrieve by id
  app.get('/api/tag/:id', function (req, res){
    return TagModel.findById(req.params.id, function (err, tag1) {
      if (!err) {
        return res.send(tag1);
      } else {
        return console.log(err);
      }
    });
  });

  // create
  app.post('/api/tag', function (req, res){
    var tag1;
    console.log("POST: ");
    console.log(req.body);

    tag1 = new TagModel({
      title: req.body.title,
      description: req.body.description
    });

    tag.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return res.send(tag);
  });

  // update
  app.put('/api/tag/:id', function (req, res){
    return TagModel.findById(req.params.id, function (err, tag1) {
      tag1.title = req.body.title;
      tag2.description = req.body.description;
      return tag1.save(function (err) {
        if (!err) {
          console.log("updated");
        } else {
          console.log(err);
        }
        return res.send(tag1);
      });
    });
  });

  // delete by id
  app.delete('/api/tags/:id', function (req, res){
    return TagModel.findById(req.params.id, function (err, tag1) {
      return tag1.remove(function (err) {
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

exports.load_tagActions = load_tagActions;
