// Get all the packages that are needed for the API
var express    = require('express');        
var bodyParser = require('body-parser');

// Set the port we will be using for the API
var port = process.env.PORT || 80 

// Define the API object.
var api = express();

// Configure what our API should use from the bodyParser package
api.use(bodyParser.urlencoded({
	extended:true
}));

api.use(bodyParser.json());

// The routing part of our API, if extending the API it should be in it's own routing.js file.
var routes = require('./routes/routes.js');
api.use('/api', routes);

// And now, let the fun start; or our server of course.
api.listen(port); 

// And log it away
console.log('Well, looks like you found Lucky Luke. ' + port);
