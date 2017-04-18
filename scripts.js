// 1 Pomodoro = 25 minutes
var pomodoro = 25;
var pomodoroTimer;


// timer object
var timer = {
  start : function(){
    pomodoroTimer =  setInterval(function(){
      // if pomodoro >= 0, then subtract one seconds
      if(pomodoro > 0){
        pomodoro--;
        document.getElementById("timeInSeconds").value = pomodoro;
      }else{
        // run stop function
        timer.pause();
      }
      
    },1000);
  },
  pause : function(){
    // stop window interval
    clearInterval(pomodoroTimer);
  },
  reset : function(){
	  pomodoro = 25;
	  document.getElementById("timeInSeconds").value = pomodoro;
  }
}

// on document ready here
document.addEventListener("DOMContentLoaded", function() {
	
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
