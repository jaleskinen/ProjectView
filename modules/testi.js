var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /testi context
router.get('/', function (req, res) {
    
    db.getAllTestit(req, res);
});

//Handle POST request for /testi context
router.post('/', function (req, res) {
    
    db.saveNewTesti(req, res);
});

//Handle UPDATE request for /testi context
router.put('/', function (req, res) {
    
    db.updateTesti(req, res);
});

//Handle DELETE request for /testi context, id comes from request (scripts.js)
router.delete('/:id', function (req, res) {
    
    db.deleteTesti(req, res);
});

module.exports = router;