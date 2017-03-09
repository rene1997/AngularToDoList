var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var settings = require('./config.json');
var version1 = require('./routes/V1')

var app = express();
app.use(bodyParser.urlencoded());

app.all('*', function(req,res,next){
    console.log("got request:");
    console.log(req.method + " " + req.url);

    //check authentication:
    var key =  req.body.serverKey;
    if(key !== settings.serverKey){
        console.log("wrong serverkey!");
        res.status(401);
        res.json({status:"no permission!"});
        return;
    }
    next();
});

app.use('/apiV1', version1);

//start server
var server = app.listen( 8081 , function() {
    console.log('Listening server on port ' + server.address().port );
});