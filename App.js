const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./routes/User.route');
const demande = require('./routes/Demande.route');
const reponse = require('./routes/Reponse.route');

// initialize our express app
const app = express();

app.use(cors())

// Set up mongoose connection
let dev_db_url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/data_base_pfe';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', user);
app.use('/demande', demande);
app.use('/reponse', reponse);


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});