var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var DFAView = require('./dfa/dfa_view');
var DeterministicAutomaton = require('./dfa/dfa');

var dfa = new DeterministicAutomaton();
var view = new DFAView(dfa);
view.draw(ctx);

window.DeterministicAutomaton = DeterministicAutomaton;
