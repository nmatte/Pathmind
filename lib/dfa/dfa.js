var TransitionFunction = require('./dfa_transition_function'),
    State = require('./state'),
    Symbol = require('./symbol');

var DeterministicAutomaton = function () {
  this.transitionFunction = new TransitionFunction();

  var startName = "q0";
  var startState = new State("q0");
  this.start = startState;
  this.states = {};
  this.addState(startState);
  this.finalStates = [];

  this.addTestStuff();
};

DeterministicAutomaton.prototype.addTestStuff = function () {
  var s = new State("q1");
  var s2 = new State("q2", true);
  var inp0 = new Symbol("0");
  var inp1 = new Symbol("1");
  this.addState(s);
  this.addState(s2);
  this.addTransition(this.start, inp0, s);
  this.addTransition(s, inp0, s);
  this.addTransition(s, inp1, s2);
};

DeterministicAutomaton.prototype.allStates = function () {
  var results = [];
  var keys = Object.keys(this.states);

  for (var i = 0; i < keys.length; i++) {
    results.push(this.states[keys[i]]);
  }

  return results;
};

DeterministicAutomaton.prototype.addState = function (newState) {
  this.states[newState.name] = newState;
  if (newState.isFinal) {
    this.finalStates.push(newState);
  }
};

DeterministicAutomaton.prototype.addTransition = function (fromState, takes, toState) {
  if (this.states.hasOwnProperty(fromState.name) && this.states.hasOwnProperty(toState.name)) {
    this.transitionFunction.addTransition(fromState, takes, toState);
  }
};

DeterministicAutomaton.prototype.allTransitions = function () {
  return this.transitionFunction.aggregateTransitions();
};

// DeterministicAutomaton.prototype.run = function (input) {
//   this.currentInput = input;
//   this.currentState = this.start;
// };

module.exports = DeterministicAutomaton;
