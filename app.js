/*jslint nomen: true*/
/*global require, console, __dirname*/
(function () {
    'use strict';

    var express = require('express'),
        app = express(),
        http = require('http').Server(app),
        port = 3000,
        server;

    // ---------------------------------
    // APP CONFIG
    // ---------------------------------


    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/src/index.html');
    });

    app.use("/static", express.static(__dirname + '/static'));

    server = http.listen(port, function () {
        var host = server.address().address,
            port = server.address().port;

        console.log('MB7 listening at http://%s:%s', host, port);
    });

}());