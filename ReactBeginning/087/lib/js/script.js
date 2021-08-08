"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.default = void 0;

function button() {
  return "button";
}

class Slider {
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }

  nextSlide() {
    console.log("Move forward");
  }

  prevSlide() {
    console.log("Move back");
  }

  whoAmI() {
    console.log(this.width, this.height, this.count);
  }

}

class AutoSlider extends Slider {
  constructor(width, height, count, auto) {
    super(width, height, count);
    this.auto = auto;
  }

  play() {
    console.log("Autoplay: ".concat(this.auto));
  }

}

var _default = Slider;
exports.default = _default;