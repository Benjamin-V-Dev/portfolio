require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const nodemailer = require('nodemailer')
const compression = require('compression');
const cors = require('cors')


const Project = require('./models/Project');


const app = express();

app.use(compression());

app.use(helmet());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.get("/", (req, res)=>{
  res.json("hello")
})

app.get('/api/project', (req, res, next) => {
  Project.find()
    .then(projects => {
      res.status(200).json(projects);
      console.log(res); // Déplacez votre console.log ici
    })
    .catch(error => res.status(400).json({error}));
});



//Partie SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Remplace par ton domaine
  port: 465, // Port SMTP standard pour la soumission de mails
  secure: true, // Pour le port 587, cette option doit être false
  auth: {
    user: process.env.SMTP_MAIL, // Ton adresse email complète
    pass: process.env.SMTP_PASS // Ton mot de passe
  },
  tls: {
    rejectUnauthorized: false // Ajoute cette ligne pour ignorer les erreurs de certificat
  }
});

app.post('/api/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
      from: email,
      to: process.env.SMTP_MAIL, // L'email destinataire (peut être le même que l'expéditeur)
      subject: `Nouveau message de ${name} depuis le portfolio`,
      text: `portfolio : ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Erreur d\'envoi de mail:', error);
          res.status(500).send('Erreur lors de l\'envoi du mail');
      } else {
          console.log('Email envoyé:', info.response);
          res.status(200).send('Email envoyé avec succès');
      }
  });
});

app.listen(8800, ()=>{
  console.log("Backend server is running!");
})


module.exports = app;