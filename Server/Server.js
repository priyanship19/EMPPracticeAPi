var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('../Config/empConfig');
var deptModel = require('../Model/deptModel');
var route = require('../Route/route');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => {


    console.log('Port Connected');
})
route(app);