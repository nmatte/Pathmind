var StackView = require('./stack_view');

var PDAView = function (pda) {
  this.pda = pda;
};

PDAView.prototype.draw = function (ctx) {
  var stackView = new StackView();
  // stackView.draw(ctx, this.pda.stack);
  var syms = this.pda.stack.map(function (stackSym) {
    return stackSym.stackValue;
  });
  stackView.draw(ctx, syms);
};

module.exports = PDAView;
