var StateView = require('./state_view'),
    State = require('./state'),
    StatesWindow = require('./states_window');

    // epsilon char "\u03B5"

var DFAView = function (dfa) {
  this.dfa = dfa;
};


DFAView.prototype.draw = function (ctx) {
  var w = new StatesWindow(80, 640, 0, 480);
  w.drawStates(this.dfa.allStates(), this.dfa.allTransitions(), ctx);
};

module.exports = DFAView;
