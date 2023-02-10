radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
    } else if (receivedString == "right") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    } else if (receivedString == "left") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    } else {
        basic.showString("unknown command")
    }
})
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
