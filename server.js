const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakes', {useNewUrlParser: true})

const flash = require('express-flash')

const app = express()

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(flash());

require('./server/models/cake')
require('./server/config/routes.js')(app)


app.listen(8000, function() {
    console.log("listening on port 8000");
})