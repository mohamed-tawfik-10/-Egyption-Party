var navid = document.getElementById('nav');
var clisebtn = document.getElementById('clisebtn');
var clisxx = document.getElementById('clisxx');
var namberDay = document.getElementById('namberDay');
var namberHoure = document.getElementById('namberHoure');
var namberMinute = document.getElementById('namberMinute');
var namberSeconde = document.getElementById('namberSeconde');
var textArea = document.getElementById('conyetext');
var num = document.getElementById('chars');



clisebtn.addEventListener('click',function () {
    navid.classList.remove('d-none');

})
clisxx.addEventListener('click',function () {
    navid.classList.add('d-none');

})

document.querySelectorAll(".Duration .item h3").forEach(h3 => {
    h3.addEventListener("click", function () {
        document.querySelectorAll(".Duration .item p").forEach(p => {
            if (p !== this.nextElementSibling) p.style.display = "none";
        });
        let nextP = this.nextElementSibling;
        nextP.style.display = nextP.style.display === "block" ? "none" : "block";
    });
});




let countdownInterval;

function startCountdown(targetDate) {
    clearInterval(countdownInterval); // إيقاف أي عداد قديم

    targetDate = new Date(targetDate).getTime(); // تحويل الإدخال إلى Timestamp

    countdownInterval = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            namberDay.innerText = "00";
            namberHoure.innerText = "00";
            namberMinute.innerText = "00";
            namberSeconde.innerText = "00";
            alert("Enjoy with us");
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        namberDay.innerText = days.toString().padStart(2, "0")+" "+"D";
        namberHoure.innerText = hours.toString().padStart(2, "0")+" "+"H";
        namberMinute.innerText = minutes.toString().padStart(2, "0")+" "+"M";
        namberSeconde.innerText = seconds.toString().padStart(2, "0")+" "+"S";
    }, 1000);
}
startCountdown("2025-05-01T00:00:00");



// let textarea = document.querySelector("textarea");
let maxLength = 100;

textArea.addEventListener("keyup", function () {
    let value = this.value.length;
    let result = maxLength - value;
    if (result <= 0) {
        num.textContent = "your available character finished";
        this.setAttribute("disabled", "disabled");
    } else {
        num.textContent = result;
    }
});