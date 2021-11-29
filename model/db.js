'use strict';
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: '45.55.136.114',
    user: 'csc3610',
    password: 'csc3610',
    database: 'csc3610'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
