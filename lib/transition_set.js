var TransitionSet = function (fromState, fromInputSym, fromStackSym) {
  this.fromState = fromState;
  this.fromInputSym = fromInputSym;
  this.fromStackSym = fromStackSym;

  this.results = [];
};

// TransitionSet.prototype.execute = function (currentState, inputSym, stackSym) {
//   if (this.matches(currentState, inputSym, stackSym)) {
//     return {newState: this.toState, stackResult: this.stackResult};
//   } else {
//     return {};
//   }
// };
//
TransitionSet.prototype.matches = function (currentState, inputSym, stackSym) {
    return (
      this.fromState.equals(currentState) &&
      this.fromInputSym.equals(inputSym) &&
      this.fromStackSym.equals(stackSym));
  };

TransitionSet.prototype.addTransitionTo = function (toState, toStackSymbols) {
  // TODO
  // for (var i = 0; i < this.results.length; i++) {
  //   if (this.results[i].state.equals(toState) && this.results[i].stackSymbols === toStackSymbols) {
  //     return;
  //   }
  // }

  this.results.push({state: toState, stackSymbols: toStackSymbols});
};

TransitionSet.prototype.split = function () {
  return this.results.map(function (result) {
    return {
      fromState: this.fromState,
      fromInputSym: this.fromInputSym,
      fromStackSym: this.fromStackSym,
      toState: result.state,
      stackResult: result.stackSymbols
    };
  }.bind(this));
};

module.exports = TransitionSet;
