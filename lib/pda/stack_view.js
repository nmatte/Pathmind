var StackView = function () {
};

StackView.prototype.draw = function (ctx, symbols) {
  /*
    Last symbol is at bottom of stack
    First symbol is at top of stack
  */

  symbols = ["z1", "z2", "z3"];

  ctx.font = "36px sans-serif";
  // ctx.fillText(stack.join(" "), 0, 48);
  var leftX = 10;
  var rightX = 50;
  var boxStop = 475;
  var cellHeight = 40;
  var boxStart = boxStop - (cellHeight * symbols.length);
  if (symbols.length === 0) {
    boxStart = boxStop - cellHeight;
  }
  ctx.beginPath();
  ctx.moveTo(leftX, boxStart);
  ctx.lineTo(leftX, boxStop);
  ctx.lineTo(rightX, boxStop);
  ctx.lineTo(rightX, boxStart);
  ctx.stroke();

  var textX = 20;
  var textY = boxStop - 5;

  // ctx.fillText("Z", 20, 475);
  // ctx.fillText("Z", 20, 439);
  for (var i = 0; i < symbols.length; i++) {
    ctx.fillText(symbols[i], textX, textY);
    textY -= cellHeight;
  }
};

module.exports = StackView;
