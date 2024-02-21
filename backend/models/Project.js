const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  id: { type: String, required: true },
  title :{type: String, required: true },
  subtitle: { type: String, required: true },
  img: { type: String, required: true },
  imgAlt: { type: String, required: true },
  github: { type: String, required: true },
  tags: { type: String, required: true },
  link: { type: String, required: true },

});

module.exports = mongoose.model('Project', projectSchema);
