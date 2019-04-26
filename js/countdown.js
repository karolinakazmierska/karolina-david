window.addEventListener('DOMContentLoaded', (e) => {
    (function countdown() {
        var countDownDate = new Date("Jun 19, 2019 16:30:00").getTime();
        console.log(countDownDate);
        var interval = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.querySelector("#countdown .days .value").innerHTML = days;
            document.querySelector("#countdown .block.hours .value").innerHTML = hours;
            document.querySelector("#countdown .block.minutes .value").innerHTML = minutes;
            document.querySelector("#countdown .block.seconds .value").innerHTML = seconds;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "";
            }
        }, 1000)
    })();
});
