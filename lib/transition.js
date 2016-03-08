var Transition = function (fromState, inputSym, stackSym, toState, stackResult) {
  this.fromState = fromState;
  this.inputSym = inputSym;
  this.stackSym = stackSym;
  this.toState = toState;
  this.stackResult = stackResult;
};

Transition.prototype.execute = function (currentState, inputSym, stackSym) {
  if (this.matches(currentState, inputSym, stackSym)) {
    return {newState: this.toState, stackResult: this.stackResult};
  } else {
    return {};
  }
};

Transition.prototype.matches = function (currentState, inputSym, stackSym) {
  return (
    this.fromState.equals(currentState) &&
    this.inputSym.equals(inputSym) &&
    this.stackSym.equals(stackSym));
};

module.exports = Transition;
