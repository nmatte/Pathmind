var InputSym = function (inputValue) {
  this.inputValue = inputValue;
};

InputSym.prototype.equals = function (otherSym) {
  return (otherSym.inputValue && this.inputValue === otherSym.inputValue);
};

module.exports  = InputSym;
