var DFATransition = function (fromState, takes, toState) {
  this.fromState = fromState;
  this.takes = takes;
  this.toState = toState;
};

DFATransition.prototype.matches = function (currentState, inputSym) {
    return (
      this.fromState.equals(currentState) &&
      this.takes.equals(inputSym));
};

DFATransition.prototype.toState = function () {
    return this.toState;
};

module.exports = DFATransition;
