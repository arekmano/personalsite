'use strict';

var express = require('express');
var app = express();
var path = require('path');
var winston = require('winston');

winston.add(winston.transports.File, { filename: 'logging.log' });

app.use(function (req, res, next) {
  if (req.url === '/') {
    var logPoint = {};
    logPoint.ip = req.ip;
    logPoint.url = req.url;
    logPoint.hostname = req.hostname;
    logPoint.method = req.method;
    logPoint.message = 'Request processed';

    winston.info(logPoint);
  }
  next();
});

app.use('/assets/css/', express.static(path.join(__dirname, 'assets/css')));
app.use('/assets/js/', express.static(path.join(__dirname, 'assets/js')));
app.use('/assets/img/', express.static(path.join(__dirname, 'assets/img')));
app.use('/', express.static(path.join(__dirname, 'app')));

app.listen(3000, function () {
  winston.info('ArekMano application Started!');
});