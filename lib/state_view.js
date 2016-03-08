var StateView = function (state, cx, cy) {
  this.state = state;
  this.cx = cx;
  this.cy = cy;
  this.radius = state.isFinal ? RADIUS_FINAL : RADIUS_NONFINAL;
};

var RADIUS_NONFINAL = 40;
var RADIUS_FINAL = 48;

StateView.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.cx,this.cy,RADIUS_NONFINAL, 0, 2 * Math.PI, true);
  ctx.stroke();


  if (this.state.isFinal) {
    ctx.beginPath();
    ctx.arc(this.cx,this.cy,RADIUS_FINAL, 0, 2 * Math.PI, true);
    ctx.stroke();
  }


  ctx.fillText(this.state.name, this.cx, this.cy);
};

StateView.prototype.contains = function (x, y) {
  var r = this.state.isFinal ? RADIUS_FINAL : RADIUS_NONFINAL;

  var xdiff = (this.cx - x) * (this.cx - x);
  var ydiff = (this.cy - y) * (this.cy - y);
  var distance = Math.sqrt(xdiff + ydiff);
  return (distance < r);
};


// get coordinates of edge at given angle in radians.
StateView.prototype.getCoordsFromAngle = function (angle) {
  var x = Math.cos(angle) * this.radius + this.cx;
  var y = this.cy - Math.sin(angle) * this.radius;

  return {x: x, y: y};
};


module.exports = StateView;
