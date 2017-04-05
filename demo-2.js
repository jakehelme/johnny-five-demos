var five = require("johnny-five"),
  board, motor, led;

board = new five.Board();

board.on("ready", function() {
  
  motor = new five.Motor({
    pin: 5
  });

  board.repl.inject({
    motor: motor
  });

  motor.on("start", function() {
    console.log("start", Date.now());

      board.wait(12000, function() {
      motor.stop();
    });
  });

  motor.on("stop", function() {
    console.log("stop", Date.now());
  });

  motor.start();
  
});
