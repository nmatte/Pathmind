var DFATransition = function (fromState, fromInputSym, result) {
  this.fromState = fromState;
  this.fromInputSym = fromInputSym;
  this.result = result;
};

DFATransition.prototype.matches = function (currentState, inputSym) {
    return (
      this.fromState.equals(currentState) &&
      this.fromInputSym.equals(inputSym));
};

DFATransition.prototype.result = function () {
    return this.result;
};

module.exports = DFATransition;
