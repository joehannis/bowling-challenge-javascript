const frames = require("./frames");
const ConsolePrinter = require("./console-printer");
const consoleInstance = new ConsolePrinter();
const frameInstance = new frames();

class Scorecard {
  constructor() {
    this.running_score = [];
    this.bonus = [];
    this.frame_index = 0;
  }

  addFrame(num1, num2) {
    this.frame_index += 1;
    frameInstance.frames[`Frame ${this.frame_index}`] = [num1, num2];
    consoleInstance.printFrames();
  }

  calculateScore() {
    let total = 0;
    for (let frameKey in frameInstance.frames) {
      let frame = frameInstance.frames[frameKey];
      let result = frame[0] + frame[1];
      total += result;
    }
    console.log(`Total Score = ${total}`);
  }
}

module.exports = Scorecard;
