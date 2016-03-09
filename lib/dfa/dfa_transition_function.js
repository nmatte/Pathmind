var DFATransitionFunction = function () {
  this.transitions = {};
};

DFATransitionFunction.prototype.addTransition = function (fromState, fromInput, toState) {
  if(!this.transitions[fromState.name]) {
    this.transitions[fromState.name] = {};
  }

  this.transitions[fromState.name][fromInput.value] = toState;
};

DFATransitionFunction.prototype.get = function (fromState, fromInput) {
  if (this.transitions[fromState.name]) {
    return this.transitions[fromState.name][fromInput.value];
  }
};
module.exports = DFATransitionFunction;
