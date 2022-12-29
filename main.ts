input.onSound(DetectedSound.Loud, function () {
    muze_jet = 1
})
let muze_jet = 0
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
            cuteBot.motors(24, 24)
        }
    }
})
