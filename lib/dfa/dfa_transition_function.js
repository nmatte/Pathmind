var DFATransition = require('./dfa_transition');
var DFATransitionFunction = function () {
  this.transitions = {};
};

DFATransitionFunction.prototype.addTransition = function (fromState, fromInput, toState) {
  if(!this.transitions[fromState.name]) {
    this.transitions[fromState.name] = {};
  }

  var t = new DFATransition(fromState, fromInput, toState);
  this.transitions[fromState.name][fromInput.value] = t;
};

DFATransitionFunction.prototype.get = function (fromState, fromInput) {
  if (this.transitions[fromState.name] && this.transitions[fromState.name][fromInput.value]) {
    return this.transitions[fromState.name][fromInput.value].toState;
  }
};

DFATransitionFunction.prototype.aggregateTransitions = function () {
  var fromStates = Object.keys(this.transitions);
  var allTransitions = [];

  for (var i = 0; i < fromStates.length; i++) {
    var stateName = fromStates[i];
    var transitionsFrom = this.transitions[fromStates[i]];
    var inputs = Object.keys(transitionsFrom);
    for (var j = 0; j < inputs.length; j++) {
      var inputName = inputs[j];
      allTransitions.push(this.transitions[stateName][inputName]);
    }
  }

  return allTransitions;
};


module.exports = DFATransitionFunction;
