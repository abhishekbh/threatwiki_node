var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function createModel() {
  var Soc = new Schema({
      title: { type: String, required: true }
    , description: { type: String, required: false }
    , modified: { type: Date, default: Date.now }
  });

  var DataPoint = new Schema({
      title: { type: String, required: true }
    , description: { type: String, required: true }
    , modified: { type: Date, default: Date.now }
    , location: [Location]
    , tag: [Tag]
    , soc: [Soc]
  });

  var Location = new Schema({
      title: { type: String, required: true }
    , latitude: { type: String, required: true }
    , longitude: { type: String, required: true }
    , modified: { type: Date, default: Date.now }
  });

  var Tag = new Schema({
      title: { type: String, required: true }
    , description: { type: String, required: true }
    , modified: { type: Date, default: Date.now }
  });

var SocModel = mongoose.model('Soc', Soc);
}

exports.createModel = createModel;
