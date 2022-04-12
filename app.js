'use strict';
// Module Dependencies
// -------------------
var express     = require('express');
var bodyParser  = require('body-parser');
var errorhandler = require('errorhandler');
var http        = require('http');
var path        = require('path');
var request     = require('request');
var routes      = require('./routes');
var activity    = require('./routes/activity');

// EXPRESS CONFIGURATION
var app = express();

// Configure Express
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.raw({type: 'application/jwt'}));
app.use(express.static(path.join(__dirname, 'public'), {index: '_'}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/public'));
//app.engine('html', require('ejs').renderFile);

//app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
//app.set('view-engine', 'html');

// Express in Development Mode
/*
if ('development' == app.get('env')) {
  app.use(errorhandler());
}
*/

/*
app.get('/', routes.index );
app.post('/login', routes.login );
app.post('/logout', routes.logout );
*/

// serve config
app.use('/config.json', routes.config);

// Custom Routes for MC
app.post('/journeybuilder/save/', activity.save );
app.post('/journeybuilder/validate/', activity.validate );
app.post('/journeybuilder/publish/', activity.publish );
app.post('/journeybuilder/execute/', activity.execute );


http.createServer(app).listen(
  app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  }
);
