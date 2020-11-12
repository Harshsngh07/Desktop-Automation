var robot = require("robotjs");
var id = setInterval(handle, 2000);

function handle() {
  var mouse = robot.getMousePos();
  console.log(mouse);
  if (mouse.x == 0 || mouse.y == 0) clearInterval(id);
}
