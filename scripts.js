// 1 Pomodoro = 25 minutes
var pomodoro = 25;
var pomodoroTimer;

var timer = {
  start : function(){
    pomodoroTimer =  setInterval(function(){
      // if pomodoro >= 0, then subtract one seconds
      if(pomodoro > 0){
        pomodoro--;
        console.log(pomodoro);
      }else{
        // run stop function
        timer.stop();
      }
    },1000);
  },
  stop : function(){
    // stop window interval
    clearInterval(pomodoroTimer);
  }
}
