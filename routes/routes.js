module.exports = (function() {
    var router = require('express').Router();

     	/**
        * User functions
        */
        var users = require("../functions/users.js");
	 router.get("/users", [users.returnUser]);

    // Another route, just to make sure it really really works.
	router.get('/george/', function(req, res) {
	    res.json({ message: 'Its all bullshit folks, and its bad for ya. - George Carlin' });   
	});

    // A route to check if everything is working like it should
	router.get('/', function(req, res) {
	    res.json({ message: 'Take a beer or 2, you just found me.' });   
	});

    return router;
})();
