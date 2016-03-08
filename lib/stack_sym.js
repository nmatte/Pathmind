var StackSym = function (stackValue) {
  this.stackValue = stackValue;
};

StackSym.prototype.equals = function (otherSym) {
  return (otherSym.stackValue && this.stackValue === otherSym.stackValue);
};

module.exports  = StackSym;
