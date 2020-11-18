/**
 * @fileoverview This file is setting up the application.
 * @package express
 */
const express = require('express');
const config = require('./system/config.js');

/** 
 * Variable for the application
 * @const {class} 
*/
const app = express();

/**
 * @constant {express.Router}
 */
const general_routes = require('./routes/general.js');

app.use('/', general_routes);

/**
 * @constant {express.Router}
 */
const user_routes = require('./routes/user.js');

app.use('/user', user_routes);

app.listen(config.port);