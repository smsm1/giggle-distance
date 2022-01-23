input.onButtonPressed(Button.A, function () {
    gigglebot.servoMove(gigglebotServoAction.Left, 90)
    for (let index = 0; index < 50; index++) {
        if (gigglebot.distanceSensorTestForObstacle(gigglebotInequality.Closer, 100)) {
            gigglebot.stop()
        } else if (gigglebot.distanceSensorTestForObstacle(gigglebotInequality.Closer, 300)) {
            gigglebot.spinMillisec(gigglebotWhichTurnDirection.Right, 100)
        } else {
            gigglebot.driveMillisec(gigglebotWhichDriveDirection.Forward, 400)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    gigglebot.stop()
})
basic.forever(function () {
    if (gigglebot.distanceSensorTestForObstacle(gigglebotInequality.Closer, 100)) {
        lights.smileShow(NeoPixelColors.Red)
    } else if (gigglebot.distanceSensorTestForObstacle(gigglebotInequality.Closer, 300)) {
        lights.smileShow(NeoPixelColors.Orange)
    } else {
        lights.smileShow(NeoPixelColors.Green)
    }
})
