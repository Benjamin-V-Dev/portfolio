const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String }, // Facultatif
  img: { type: String }, // Facultatif
  imgAlt: { type: String }, // Facultatif
  github: { type: String }, // Facultatif
  tags: [String], // Tableau de chaînes, facultatif
  link: { type: String }, // Facultatif
});

module.exports = mongoose.model('Project', projectSchema);
