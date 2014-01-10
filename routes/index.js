// var hardware = require('hardware');
// var tessel = require('tessel');
// console.log("Connecting to accelerometer on port bank A");
// var accel = require('accel-mma84').connect(tessel.port("A"));

exports.index = function(req, res){
// 	// Initialize the accelerometer.
// accel.on('connected', function () {
//   // Loop forever.
//   setInterval(function () {
//     accel.getAcceleration(function (err, xyz) {
//       console.log("x:", xyz[0].toFixed(2),
//         "y:", xyz[1].toFixed(2),
//         "z:", xyz[2].toFixed(2));
// 	    });
// 	  }, 100);
// 	});
  res.render('index', { title: 'Express' });
};