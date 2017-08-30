class Timer{
  constructor(time){
     this.startTime = time;
     this.currentTime = time;
     this.pomodoro = 0;
     this.currentTimer = "";
     document.getElementById("timeInSeconds").value = this.startTime;
  }
  start(){
     this.currentTimer = setInterval(() => {
      // clear timer if time = 0
      this.currentTime = this.currentTime - 1;
      document.getElementById("timeInSeconds").value = this.currentTime;
      if(this.currentTime <= 0){
        clearInterval(this.currentTimer);
      }
    },1000)
  }
  pause(){
    clearInterval(this.currentTimer)
  }
  reset(){
    clearInterval(this.currentTimer)
    this.currentTime = this.startTime;
    document.getElementById("timeInSeconds").value = this.currentTime;
  }
}

// on document ready here
document.addEventListener("DOMContentLoaded", function() {
  const timer = new Timer(25);
	// when start button gets clicked
	var startBtn = document.getElementById("js-startBtn");
	startBtn.onclick = function(e){
	  //your handler here
		timer.start();
	}

  // when pause button gets clicked
  var pauseBtn = document.getElementById("js-pauseBtn");
  pauseBtn.onclick = function(e){
      //your handler here
    timer.pause();
  }

  // when reset button gets clicked
  var resetBtn = document.getElementById("js-resetBtn");
  resetBtn.onclick = function(e){
      //your handler here
    timer.reset();
  }
});
