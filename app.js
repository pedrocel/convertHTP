const express = require('express');
const app = express();
const apiVersion = "/v1";
const routeDownload = require('./convert');
app.use(apiVersion + '/download', routeDownload);
module.exports = app;