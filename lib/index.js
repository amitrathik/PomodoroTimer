"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer(time) {
    _classCallCheck(this, Timer);

    this.startTime = time;
    this.currentTime = time;
    this.pomodoro = 0;
    this.currentTimer = "";
    document.getElementById("timeInSeconds").value = this.startTime;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.currentTimer = setInterval(function () {
        // clear timer if time = 0
        _this.currentTime = _this.currentTime - 1;
        document.getElementById("timeInSeconds").value = _this.currentTime;
        if (_this.currentTime <= 0) {
          clearInterval(_this.currentTimer);
        }
      }, 1000);
    }
  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.currentTimer);
    }
  }, {
    key: "reset",
    value: function reset() {
      clearInterval(this.currentTimer);
      this.currentTime = this.startTime;
      document.getElementById("timeInSeconds").value = this.currentTime;
    }
  }]);

  return Timer;
}();

// on document ready here


document.addEventListener("DOMContentLoaded", function () {
  var timer = new Timer(25);
  // when start button gets clicked
  var startBtn = document.getElementById("js-startBtn");
  startBtn.onclick = function (e) {
    //your handler here
    timer.start();
  };

  // when pause button gets clicked
  var pauseBtn = document.getElementById("js-pauseBtn");
  pauseBtn.onclick = function (e) {
    //your handler here
    timer.pause();
  };

  // when reset button gets clicked
  var resetBtn = document.getElementById("js-resetBtn");
  resetBtn.onclick = function (e) {
    //your handler here
    timer.reset();
  };
});