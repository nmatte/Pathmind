var State = function (isFinal, name) {
  this.isFinal = isFinal;
  this.name = name;
};

State.prototype.equals = function (otherState) {
  return otherState.name && otherState.name === name;
};

module.exports = State;
