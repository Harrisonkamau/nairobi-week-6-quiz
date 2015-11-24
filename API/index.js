var http = require('http');
var dispatch = require('dispatch');
var querystring = require('querystring');
//express 
var express = require('express');
var app = express(); //invoking express

//express middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var router = express.Router();

router.get('/save_number', function(req, res) {
	contact = ['name', 'phone_number', 'occupation'];
			
			save_number = contact;

    res.json({ message: 'Told ye! This is my api!' });   
});


app.use('/save_number', router);


app.listen(9090, function(){
console.log('Follow this route:) ');
});
