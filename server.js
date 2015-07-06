/**
 * Created by katy on 2015/7/1.
 */
//set up =========================
var express = require('express');
var app = express();
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');//Post
var methodOverride = require('method-override');//delete  Put
var path = require('path');


app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));  //log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

app.get('/',express.static(path.join(__dirname,'public')));

//listen(start app with node server.js ) ====
app.listen(3000);
console.log("App listening on port 3000");
