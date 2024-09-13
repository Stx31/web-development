const reservations = {};
const allHours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

const dateInput = document.getElementById('date');
const hoursContainer = document.getElementById('hours-container');

function updateAvailableHours(date) {
    hoursContainer.innerHTML = '';
    const reservedHours = reservations[date] || [];
    const availableHours = allHours.filter(hour => !reservedHours.includes(hour));

    if (availableHours.length === 0) {
        const fullDayMessage = document.createElement('p');
        fullDayMessage.classList.add('full-day');
        fullDayMessage.textContent = 'Día completo';
        hoursContainer.appendChild(fullDayMessage);
    } else {
        availableHours.forEach(hour => {
            const button = document.createElement('button');
            button.classList.add('hour-button');
            button.textContent = hour;
            button.addEventListener('click', () => reserveHour(date, hour));
            hoursContainer.appendChild(button);
        });
    }
}

function reserveHour(date, hour) {
    if (!reservations[date]) {
        reservations[date] = [];
    }

    if (!reservations[date].includes(hour)) {
        reservations[date].push(hour);
        alert(`Cita reservada para el ${date} a las ${hour}`);
        updateAvailableHours(date);
    } else {
        alert('Esta hora ya está reservada');
    }
}

dateInput.addEventListener('change', (event) => {
    const selectedDate = event.target.value;
    if (selectedDate) {
        updateAvailableHours(selectedDate);
    }
});
