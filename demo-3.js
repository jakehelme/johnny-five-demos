var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
    var led = new five.Led(13);
    var slider = new five.Sensor("A0");

    // "slide" is an alias for "change"
    slider.scale([0, 255]).on("change", function () {
        led.brightness(this.value);
    });
});