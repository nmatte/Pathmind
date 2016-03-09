var Symbol = function (value) {
  this.value = value;
};

Symbol.prototype.equals = function (otherSym) {
  return (otherSym.value && this.value === otherSym.value);
};

module.exports  = Symbol;
