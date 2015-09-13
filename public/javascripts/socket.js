$(document).ready(function() {

    var socket = io();

    socket.on('arduino', function(data) {

    	$(".icon-bulb").toggleClass("green_bulb");
        console.log("Ping");

    });

});