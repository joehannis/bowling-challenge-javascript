const frames = require("./frames");
const score = require("./scorecard");
const ConsolePrinter = require("./console-printer");
const consolep = new ConsolePrinter();
const frameInstance = new frames();

class App {
  constructor() {}

  run() {
    for (let i = 1; i <= 9; i++) {
      consolep.roll_1().then((roll1) => {
        frameInstance.frames[`frame_${i}`][0] += roll1;
      });
      console.log(frameInstance.frames);
    }
  }
}

module.exports = App;
