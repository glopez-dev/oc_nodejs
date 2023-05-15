const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

// Connexion au serveur MongoDB
const password = encodeURIComponent("5HP1sdVI6tY9PmC0");

mongoose.connect(`mongodb+srv://oc_fullstack:${password}@cluster0.nhdmyss.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use('/api/stuff', stuffRoutes);

module.exports = app;
