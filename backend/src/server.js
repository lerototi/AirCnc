const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omministack:1234@cluster0-sd7kl.mongodb.net/aircnc?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology:true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);