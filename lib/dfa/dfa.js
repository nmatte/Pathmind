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
  this.currentState = {};
  this.symbols = [];
  this.listeners = {};
  this.addTestStuff();
};

DeterministicAutomaton.prototype.addTestStuff = function () {
  // var s = new State("q1");
  var s2 = new State("q2", true);
  var inp0 = new Symbol("0");
  var inp1 = new Symbol("1");
  // this.addState(s);
  this.addState(s2);
  this.addTransition(this.start, inp1, s2);
  // this.addTransition(this.start, inp1, this.start);
  // this.addTransition(this.start, inp0, s);
  // this.addTransition(s, inp0, s);
  // this.addTransition(s, inp1, s2);
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

DeterministicAutomaton.prototype.run = function (symbols) {
  return this.runHelper(this.start, symbols);
};

DeterministicAutomaton.prototype.runHelper = function (currentState, symbols) {
  if (symbols.length === 0) {
    return currentState.isFinal;
  }

  var currentSym = symbols[0];
  var remainder = symbols.slice(1, symbols.length);

  var nextState = this.transitionFunction.get(currentState, currentSym);

  if (nextState) {
    return this.runHelper(nextState, remainder);
  } else {
    return false;
  }
};

DeterministicAutomaton.prototype.startRun = function (symbols) {
  this.currentState = this.start;
  this.symbols = symbols.slice();
};

DeterministicAutomaton.prototype.step = function () {
  console.log(this.currentState);
  console.log(this.symbols);
  if (this.symbols.length === 0) {
    var final = this.currentState.isFinal;
    this.currentState = {};
    this.symbols = [];
    this.callSuccessListeners(final);
    return;
  }
  var currentSym = this.symbols[0];
  console.log("currentSym", currentSym);
  var remainder = this.symbols.slice(1, this.symbols.length);
  console.log(remainder);
  var nextState = this.transitionFunction.get(this.currentState, currentSym);
  console.log("nextState", nextState);
  if (nextState) {
    this.currentState = nextState;
    this.symbols = remainder;
  } else {
    this.callSuccessListeners(false);
  }
};

DeterministicAutomaton.prototype.addSuccessListener = function (fn) {
  var keys = Object.keys(this.listeners);
  var lastId = keys[keys.length - 1];
  var newId = lastId + 1;

  this.listeners[newId] = fn;

  return newId;
};

DeterministicAutomaton.prototype.removeListener = function (id) {
  delete this.listeners[id];
};

DeterministicAutomaton.prototype.callSuccessListeners = function (success) {
  var keys = Object.keys(this.listeners);

  for (var i = 0; i < keys.length; i++) {
    this.listeners[keys[i]](success);
  }
};

module.exports = DeterministicAutomaton;
