var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var DFAView = require('./dfa/dfa_view');
var DeterministicAutomaton = require('./dfa/dfa');

var dfa = new DeterministicAutomaton();
var view = new DFAView(dfa);


window.DeterministicAutomaton = DeterministicAutomaton;
window.TransitionFunction = require('./dfa/dfa_transition_function');
window.State = require('./dfa/state');
window.Symbol = require('./dfa/symbol');
window.dfa = dfa;
view.draw(ctx);
var inputs = [new Symbol("0"), new Symbol("1")];
dfa.startRun(inputs);

var beginInterval = function () {
  return window.setInterval(function () {
    view.draw(ctx);
    dfa.step();
  }, 2000);
};

var id = beginInterval();

dfa.addSuccessListener(function (success) {
  window.clearInterval(id);
  console.log(success ? "SUCCESS" : "FAILURE");
});
