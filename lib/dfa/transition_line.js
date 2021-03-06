var TransitionView = function (fromStateView, toStateView, takes) {
  this.fromStateView = fromStateView;
  this.toStateView = toStateView;
  this.takes = takes;
};

TransitionView.prototype.draw = function (ctx) {
  var fromState = this.fromStateView.state;
  var toState = this.toStateView.state;
  var lineStart, lineEnd;
  var textY;
  // debugger;
  ctx.font = "36px";

  if (fromState.equals(toState)) {
    lineStart = this.fromStateView.getCoordsFromAngle(Math.PI * 0.25);
    lineEnd = this.toStateView.getCoordsFromAngle(Math.PI * 0.75);
    ctx.beginPath();
    ctx.moveTo(lineStart.x, lineStart.y);
    var yOffset = 65;
    var xOffset = 100;
    var controlY = lineEnd.y - yOffset;
    ctx.bezierCurveTo(lineEnd.x + xOffset,controlY,lineStart.x - xOffset,controlY, lineEnd.x, lineEnd.y);
    ctx.stroke();
    textY = controlY;
  } else {
    lineStart = this.fromStateView.getCoordsFromAngle(Math.PI * 0);
    lineEnd = this.toStateView.getCoordsFromAngle(Math.PI);
    ctx.moveTo(lineStart.x, lineStart.y);
    ctx.lineTo(lineEnd.x, lineEnd.y);
    ctx.stroke();
    textY = lineStart.y - 10;
  }

  ctx.fillText(this.takes.value, (lineEnd.x - lineStart.x) / 2 + lineStart.x, textY);
};

module.exports = TransitionView;
