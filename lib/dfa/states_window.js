var StateView = require('./state_view'),
    State = require('./state'),
    TransitionLine = require('./transition_line');

var StatesWindow = function (leftBound, rightBound, topBound, bottomBound) {
  this.leftBound = leftBound;
  this.rightBound = rightBound;
  this.topBound = topBound;
  this.bottomBound = bottomBound;
};

StatesWindow.prototype.drawStates = function (states, transitions, ctx) {

  var totalWidth = this.rightBound - this.leftBound;
  var totalStatesWidth = StateView.RADIUS_NONFINAL  * states.length;
  var totalSpacing = totalWidth - totalStatesWidth;
  var spaceBetween = totalSpacing / (states.length - 1);
  // var stateSpacing = Math.min(150, );
  var stateViews = states.map(
    function (state, index) {

      return new StateView(state, index * spaceBetween + this.leftBound, 240);
    }.bind(this)
  );

  for (var i = 0; i < stateViews.length; i++) {
    stateViews[i].draw(ctx);
  }

  for (var j = 0; j < transitions.length; j++) {
    var t = transitions[j];
    var fromView = stateViews.find(function (view) {
      return view.state.equals(t.fromState);
    });
    var toView = stateViews.find(function (view) {
      return view.state.equals(t.toState);
    });

    new TransitionLine(fromView, toView, t.takes).draw(ctx);
  }

  // var tv0 = new TransitionLine(stateViews[0], stateViews[1]);
  // var tv = new TransitionLine(stateViews[1], stateViews[1]);
  // var tv2 = new TransitionLine(stateViews[1], stateViews[2]);
  // tv0.draw(ctx);
  // tv.draw(ctx);
  // tv2.draw(ctx);
};

module.exports = StatesWindow;
