var PDA = require('./pda');
var PDAView = require('./pda_view');
var canvas = document.getElementById("canvas");
window.TransitionFunction = require('./transition_function');
window.Symbol = require('./symbol');
window.State = require('./state');
var ctx = canvas.getContext("2d");

var p = new PDAView(new PDA());

p.draw(ctx);
