var StackView = require('./stack_view'),
    StateView = require('./state_view'),
    State = require('./state'),
    StatesWindow = require('./states_window');

    // epsilon char "\u03B5"

var PDAView = function (pda) {
  this.pda = pda;
};


PDAView.prototype.draw = function (ctx) {
  var stackView = new StackView();
  // stackView.draw(ctx, this.pda.stack);
  var syms = this.pda.stack.map(function (stackSym) {
    return stackSym.value;
  });
  stackView.draw(ctx, syms);

  var w = new StatesWindow(80, 640, 0, 480);
  w.drawStates(this.pda.allStates(), ctx);

};

module.exports = PDAView;
