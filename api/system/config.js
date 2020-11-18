/**
 * @fileoverview This file is setting up constant 
 *      variabales for configuring the application.
 */


/** 
 * Stores the port number which the server will run on
 * @var {number} 
*/
var port = 9000;


/** 
 * Stores the database configuration variables
 * @const {string} 
*/
var db_url = "";

var config = {
    port: port,
    db_url: db_url
};

module.exports = config;

 
