servos.P1.setStopOnNeutral(false)
basic.forever(function () {
    if (input.lightLevel() < 20) {
    	
    } else {
        led.setBrightness(Math.map(input.lightLevel(), 0, 255, 0, 255))
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
    servos.P1.setAngle(Math.map(input.lightLevel(), 0, 255, 0, 180))
})
