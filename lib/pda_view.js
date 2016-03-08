var StackView = require('./stack_view'),
    StateView = require('./state_view'),
    State = require('./state'),
    Transition = require('./transition'),
    TransitionView = require('./transition_view');

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
  var s = new State(false, "q1");
  var s2 = new State(true, "q2");
  this.pda.addState(s);
  this.pda.addState(s2);
  var states = this.pda.allStates();

  var stateViews = this.pda.allStates().map(
    function (state, index) {
      // debugger;
      return new StateView(state, index * 150 + 40, 240);
    }
  );

  for (var i = 0; i < stateViews.length; i++) {
    stateViews[i].draw(ctx);
  }
  var tv0 = new TransitionView(stateViews[0], stateViews[1]);
  var tv = new TransitionView(stateViews[1], stateViews[1]);
  var tv2 = new TransitionView(stateViews[1], stateViews[2]);
  tv0.draw(ctx);
  tv.draw(ctx);
  tv2.draw(ctx);
};

module.exports = PDAView;
