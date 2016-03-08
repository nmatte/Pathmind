var PDA = require('./pda');
var PDAView = require('./pda_view');
var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var p = new PDAView(new PDA());

p.draw(ctx);
