var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');


// DataBase
var db = require('./config/database');
// Test DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

var app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type:  "application/vnd.api+json"}));
//static directory
app.use(express.static(path.join(__dirname, 'public')));


// api routes
require('./routes/api-routes')(app);
// html routes
require('./routes/html-routes')(app);






var PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
