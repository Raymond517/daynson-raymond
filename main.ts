basic.showLeds(`
    # # . . .
    # # # . .
    # # # # .
    # # # . .
    # # . . .
    `)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 21)
        basic.pause(1000)
    }
})
