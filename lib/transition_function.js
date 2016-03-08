var TransitionFunction = function () {
  this.transitions = {};
};

TransitionFunction.prototype.addTransition = function (newTransition) {
  var fromStateName = newTransition.fromState.name;
  if (!this.transitions[fromStateName]) {
    this.transitions[fromStateName] = [];
  }

  this.transitions[fromStateName] = newTransition;
};

TransitionFunction.prototype.match = function (fromState, inputSym, stackSym) {
  var transitions = this.transitions[fromState.name];
  var results = [];
  for (var i = 0; i < transitions.length; i++) {
    if (transitions[i].match(fromState, inputSym, stackSym)) {
      results.push(transitions[i].execute(fromState, inputSym, stackSym));
    }
  }

  return results;
};

module.exports = TransitionFunction;
