const targetDate = new Date("2024-08-16T21:00:00");
const countdownElement = document.getElementById("time");
const fireworks = new Fireworks(document.body, {
    speed: 2,
    acceleration: 1.02,
    friction: 0.98,
    gravity: 0.03,
    particles: 50,
    traceLength: 3,
    explosionChance: 0.1,
});

function updateTime() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdownElement.textContent = "Finalmente nos encontramos!";
        clearInterval(intervalId);
        fireworks.start(); // Inicia os fogos de artifício
        return;
    }

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timeStr = `${daysLeft} dias, ${hoursLeft} horas, ${minutesLeft} minutos e ${secondsLeft} segundos`;
    countdownElement.textContent = timeStr;
}

const intervalId = setInterval(updateTime, 1000);
