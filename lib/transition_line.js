var TransitionView = function (fromStateView, toStateView) {
  this.fromStateView = fromStateView;
  this.toStateView = toStateView;
};

TransitionView.prototype.draw = function (ctx) {
  var fromState = this.fromStateView.state;
  var toState = this.toStateView.state;
  var lineStart, lineEnd;
  // debugger;
  if (fromState.equals(toState)) {
    lineStart = this.fromStateView.getCoordsFromAngle(Math.PI * 0.25);
    lineEnd = this.toStateView.getCoordsFromAngle(Math.PI * 0.75);
    ctx.beginPath();
    ctx.moveTo(lineStart.x, lineStart.y);
    var yOffset = 65;
    var xOffset = 100;
    ctx.bezierCurveTo(lineEnd.x + xOffset,lineEnd.y - yOffset,lineStart.x - xOffset,lineStart.y - yOffset, lineEnd.x, lineEnd.y);
    ctx.stroke();
  } else {
    lineStart = this.fromStateView.getCoordsFromAngle(Math.PI * 0);
    lineEnd = this.toStateView.getCoordsFromAngle(Math.PI);
    ctx.moveTo(lineStart.x, lineStart.y);
    ctx.lineTo(lineEnd.x, lineEnd.y);
    ctx.stroke();
  }
};

module.exports = TransitionView;
