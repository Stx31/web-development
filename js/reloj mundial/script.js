function updateTimezone(timezone) {
    const timeElement = document.getElementById("time");
    const currentTime = new Date().toLocaleString("en-US", { timeZone: timezone });
    timeElement.textContent = "Hora en " + timezone + ": " + currentTime;
}

document.addEventListener("DOMContentLoaded", () => {
    updateTimezone("America/New_York"); // Mostrar la hora de Nueva York por defecto
});
