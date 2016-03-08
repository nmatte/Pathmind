var TransitionFunction = require('./transition_function'),
    State = require('./state');

var PushdownAutomaton = function () {
  this.transitionFunction = new TransitionFunction();

  this.stack = [];

  var startName = "q0";
  var startState = new State(false, "q0");
  this.start = startState;
  this.states = {};
  this.addState(startState);
  
  this.finalStates = [];
};

PushdownAutomaton.prototype.allStates = function () {
  var results = [];
  var keys = Object.keys(this.states);

  for (var i = 0; i < keys.length; i++) {
    results.push(this.states[keys[i]]);
  }

  return results;
};

PushdownAutomaton.prototype.addState = function (newState) {
  this.states[newState.name] = newState;
};

PushdownAutomaton.prototype.run = function (input) {
  this.currentInput = input;
  this.currentState = this.start;
};

module.exports = PushdownAutomaton;
