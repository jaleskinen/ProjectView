var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var horse = require('./modules/horse');
var todo = require('./modules/todo');
var hourcalendar = require('./modules/hourcalendar');
var testi = require('./modules/testi');
var hour = require('./modules/hour')
var paddoc = require('./modules/paddoc')
var health = require('./modules/health')
var horsehour = require('./modules/horsehour')
var app = express();


//============ MIDDLEWARES =================
// Must be befoer routers, sometimes also order is fixed

//bodyParser urlencoded() middleware parses the json object from HTTP POST request
app.use(bodyParser.urlencoded());


app.use(function (req, res, next) {
        
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    //console.log(database.Person);
    database.myFunction();
    //send request forward in stack
    next();
});

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));

app.use('/persons', person);
app.use('/horses', horse);
app.use('/todos', todo);
app.use('/tasks', hourcalendar);
app.use('/testit', testi);
app.use('/hours', hour);
app.use('/paddocs', paddoc);
app.use('/healths', health);
app.use('/horsehours', horsehour);

//============ ROUTERS======================
//Are these needed??
/*

app.get("/persons", function (req, res) {
    
    queries.getAllPersons(req, res);

});

app.get("/horses", function (req, res) {
    
    queries.getAllHorses(req, res);
    

});

app.get("/todos", function (req, res) {
    
    queries.getAllTodos(req, res);
    

});

app.get("/tasks", function (req, res) {
    
    queries.getAllTasks(req, res);
    

});

app.get("/testit", function (req, res) {
    
    queries.getAllTestit(req, res);
    

});

app.get("/hours", function (req, res) {
    
    queries.getAllHours(req, res);
    

});

app.get("/paddocs", function (req, res) {
    
    queries.getAllPaddocs(req, res);
    

});

app.get("/healths", function (req, res) {
    
    queries.getAllHealths(req, res);
    

});

app.get("/horsehours", function (req, res) {
    
    queries.getAllHorsehours(req, res);
    

});

*/



app.listen(3000);