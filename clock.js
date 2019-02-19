$(document).ready(function () {

    function clock() {
        // Get current time from the computer
        let currentTime = new Date();

        // Get hours, minutes and seconds from currentTime
        let hours = currentTime.getHours();
	    let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();

        let meridiem = "AM";

        // Set integers below 10 to be 2 digits
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        
        // Changing 13 hours onwards to restart from 1 and AM to PM
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM"
        }
        // 0 AM and 0 PM to 12 AM and 12 PM
        if (hours === 0) {
            hours = 12;
        }

        let clockDiv = document.getElementById('clock');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }

    clock();

    // This makes the clock tick (refresh) every second (1000ms)
    setInterval(clock, 1000);
});