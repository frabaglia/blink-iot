// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.sendfile('views/index.html');
// });

// router.get('/arduino', function(req, res){

//     res.send("tumadre");

// });

// module.exports = router;
var express = require('express');
module.exports = function(io) {
    //now you can use io.emit() in this file

    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.sendfile('views/index.html');
    });

    router.get('/arduino', function(req, res) {
    	res.send("Esto es un emulador de Arduino.");
        io.emit('arduino');

    });
    return router;
}