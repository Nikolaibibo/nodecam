var RaspiCam = require("raspicam");

/*
var opts = {
  mode: 'photo',
  output: '/home/pi/nodejs/nodecam/test.jpg',
  width: '800',
  height: '600',
  quality: '80'
}
*/

var camera = new RaspiCam({
  mode: "photo",
	output: "./images/pic.jpg",
	encoding: "jpg",
  timeout:0
});


camera.on("started", function( err, timestamp ){
	console.log("photo started at " + timestamp );
});

camera.on("read", function( err, timestamp, filename ){
	console.log("photo image captured with filename: " + filename );
});

camera.on("exit", function( timestamp ){
	console.log("photo child process has exited at " + timestamp );
  camera.stop();
});

camera.start();
