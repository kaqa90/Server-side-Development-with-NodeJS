
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

var dishRouter = require('./dishRouter')
var promoRouter = require('./promoRouter')
var leaderRouter = require('./leaderRouter')

app.use(morgan('dev'));



var server = express.Router();

server.use(bodyParser.json());


//server.route('/');


app.use('/dishes', dishRouter)
app.use('/promotions', promoRouter)
app.use('/leadership', leaderRouter)

//app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
