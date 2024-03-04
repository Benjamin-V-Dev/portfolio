require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../backend/models/Project'); // Assurez-vous que le chemin est correct


console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/portfolio`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));



const project = new Project({
  title: "Portfolio",
  subtitle: "Vous visitez ce site actuellement",
  img: "/Portfolio.webp",
  imgAlt: "Capture d'écran du projet 'Portfolio'",
  github: "https://github.com/Benjamin-V-Dev/Portfolio",
  tags: ["React", "Nodemailer", "NextJS"],
  link: "https://benjamin-vallon.fr"
});

project.save()
  .then(() => console.log('Projet inséré avec succès !'))
  .catch(error => console.log(error));
