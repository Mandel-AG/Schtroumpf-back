const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/Schtroumpf?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(()=> console.log('C\'est connecté !'));

