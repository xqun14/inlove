
const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const targetDate = new Date("2023-07-18T00:00:00Z");
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor(timeDifference / 1000 / 60 / 60);


    countdownElement.textContent = `${hours} giờ - ${minutes} phút - ${seconds} giây`;
}
function updateDate() {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    const millisecondsPerMonth = 30.44 * 24 * 60 * 60 * 1000; // Khoảng thời gian trung bình trong một tháng
    const months = Math.floor(timeDifference / millisecondsPerMonth);
    const years = Math.floor(months / 12);

    daysElement.innerHTML = `${days} Ngày<br>${months} Tháng - ${years} Năm`;
}

updateCountdown();
updateDate();

const countdownInterval = setInterval(updateCountdown, 1000);
