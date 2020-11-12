var robot = require("robotjs");
var fs = require("fs");
setTimeout(startOpenBoard, 2000);

function startOpenBoard() {
  //   robot.moveMouseSmooth(50, 752);
  robot.keyTap("command");
  robot.typeString("openboard");
  robot.keyTap("enter");
  setTimeout(writeHi, 2000);
}

function writeHi() {
  robot.moveMouseSmooth(400, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(400, 450);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(400, 350);
  robot.mouseToggle("down", "left");
  robot.dragMouse(600, 350);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(600, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(600, 450);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(700, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(900, 250);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(800, 250);
  robot.mouseToggle("down", "left");
  robot.dragMouse(800, 450);
  robot.mouseToggle("up", "left");

  robot.moveMouseSmooth(700, 450);
  robot.mouseToggle("down", "left");
  robot.dragMouse(900, 450);
  robot.mouseToggle("up", "left");

  setTimeout(startTelegram, 2000);
}

function startTelegram() {
  robot.keyTap("command");
  robot.typeString("telegram ");
  robot.keyTap("enter");
  robot.typeString(" saved");
  robot.keyTap("enter");
  robot.typeString("hi from robot.js");
  robot.keyTap("enter");

  setTimeout(startChrome, 2000);
}

function startChrome() {
  setTimeout(() => {
    robot.keyTap("command");
    robot.typeString("chrome");
    robot.keyTap("enter");
    setTimeout(openTabs, 4000);
  }, 2000);
}

function openTabs() {
  var data = fs.readFileSync("./chrome.json");
  var tabs = JSON.parse(data);

  for (var i = 0; i < tabs.length; i++) {
    robot.typeString(tabs[i]);
    robot.keyTap("enter");
    if (i < tabs.length - 1) {
      robot.keyToggle("control", "down");
      robot.keyTap("t");
      robot.keyToggle("control", "up");
    }
  }

  setTimeout(startVscode, 2000);
}

function startVscode() {
  robot.keyTap("command");
  robot.typeString("vscode");
  robot.keyTap("enter");
  setTimeout(() => {
    robot.typeString("Your device is ready");
  }, 5000);
}
