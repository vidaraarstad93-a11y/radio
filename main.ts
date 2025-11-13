radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(input.acceleration(Dimension.X))
})
radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
