
var StateView = function (state, cx, cy) {
  this.state = state;
  this.cx = cx;
  this.cy = cy;
  this.radius = state.isFinal ? StateView.RADIUS_FINAL : StateView.RADIUS_NONFINAL;
};

StateView.RADIUS_FINAL = 48;
StateView.RADIUS_NONFINAL = 40;

StateView.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.cx,this.cy,StateView.RADIUS_NONFINAL, 0, 2 * Math.PI, true);
  ctx.stroke();


  if (this.state.isFinal) {
    ctx.beginPath();
    ctx.arc(this.cx,this.cy,StateView.RADIUS_FINAL, 0, 2 * Math.PI, true);
    ctx.stroke();
  }

  // var meas = ctx.measureText(this.state.name);
  // var width = ctx.measureText(this.state.name).width;
  // ctx.fillText(this.state.name, this.cx - width/2, this.cy + 10);
};

StateView.prototype.contains = function (x, y) {
  var r = this.state.isFinal ? StateView.RADIUS_FINAL : StateView.RADIUS_NONFINAL;

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
