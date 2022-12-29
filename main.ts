input.onSound(DetectedSound.Loud, function () {
    if (muze_jet == 0) {
        muze_jet = 1
    } else {
        muze_jet = 0
    }
    basic.pause(500)
})
let muze_jet = 0
input.setSoundThreshold(SoundThreshold.Loud, 49)
muze_jet = 0
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.forever(function () {
    if (muze_jet == 1) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(24, 10)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(11, 24)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(15, 15)
        }
    } else {
        cuteBot.stopcar()
    }
})
