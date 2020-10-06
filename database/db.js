
  var MongoClient = require('mongodb').MongoClient;

  var url = "mongodb://localhost:27017/db";

  // Create Collection Example
  MongoClient.connect(url, function(err, db) {

    if (err) throw err;

    var dbo = db.db("test-node-website");

    dbo.createCollection("clients", function (err, res) {

      if (err) throw err;

      db.close();

    });
  });
