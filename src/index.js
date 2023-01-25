const express = require('express');
const mongoose = require('mongoose');
const route = require('./route.js');


const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://cluster:85qKzNsfjqS6Vbmd@cluster0.hia5dfj.mongodb.net/group-33", 
{useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

app.use('/', route);

route.all("/*", function (req, res) {   
    res.status(404).send({status: false, msg: "URL NOT FOUND!"
    })
})

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});