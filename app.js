var RaspiCam = require("raspicam");

var opts = {
  mode: 'photo',
  output: '/home/pi/nodejs/nodecam/test.jpg',
  width: '800',
  height: '600',
  quality: '80'
}

var camera = new RaspiCam(opts);


camera.start();
camera.stop();

//listen for the "start" event triggered when the start method has been successfully initiated
camera.on("start", function(){
  console.log("starting cam");
});

//listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, timestamp, filename){
  console.log("reading cam");
});

//listen for the "stop" event triggered when the stop method was called
camera.on("stop", function(){
  console.log("stopping cam");
});

//listen for the process to exit when the timeout has been reached
camera.on("exit", function(){
  console.log("exiting cam");
});
