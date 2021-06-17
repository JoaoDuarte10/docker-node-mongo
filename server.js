const express = require('express')
const app = express();
const rotas = require('./src/routes/rotas')
const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => console.log('Mongo Connected !'))
    .catch(err => console.log(err))

app.use('/', rotas);

app.listen(3000, ()=>console.log('Server Running')) 