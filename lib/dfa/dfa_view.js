var StateView = require('./state_view'),
    State = require('./state'),
    StatesWindow = require('./states_window');

    // epsilon char "\u03B5"

var DFAView = function (dfa) {
  this.dfa = dfa;
};


DFAView.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 640, 480);
  var w = new StatesWindow(80, 640, 0, 480);
  w.drawStates(this.dfa.allStates(), this.dfa.allTransitions(), ctx);

  var syms = this.dfa.symbols;

  var symStrings = syms.map(function (symbol) {
    return symbol.value;
  });

  ctx.fillText(symStrings.join(""), 10, 10);
};

module.exports = DFAView;
