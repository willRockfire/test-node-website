/**
 * @fileoverview This is a route file housing 
 *      all of the routes for user based 
 *      interactions.
 * @package express
 */
var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.send('Get login normal');
});

router.get('/login', function(req, res){
    res.send('Get login route');
});

module.exports = router;