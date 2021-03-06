var State = function (name, isFinal) {
  this.isFinal = isFinal || false;
  this.name = name;
};

State.prototype.equals = function (otherState) {
  return otherState.name && otherState.name === this.name;
};

module.exports = State;
