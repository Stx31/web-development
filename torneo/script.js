let teams = [];

document.getElementById('add-team-btn').addEventListener('click', addTeam);
document.getElementById('generate-bracket-btn').addEventListener('click', generateBracket);
document.getElementById('generate-winner-btn').addEventListener('click', generateWinner);

function addTeam() {
    if (teams.length >= 16) {
        alert('Ya no puedes agregar más equipos.');
        return;
    }

    let teamName = prompt('Nombre del equipo:');
    let teamImage = prompt('URL de la imagen del equipo:');

    if (teamName && teamImage) {
        teams.push({ name: teamName, image: teamImage });
        displayTeams();
    }
}

function displayTeams() {
    let teamsContainer = document.getElementById('teams');
    teamsContainer.innerHTML = '';
    
    teams.forEach((team, index) => {
        let teamElement = document.createElement('div');
        teamElement.className = 'team';
        teamElement.innerHTML = `
            <img src="${team.image}" alt="${team.name}">
            <p>${team.name}</p>
        `;
        teamsContainer.appendChild(teamElement);
    });
}

function generateBracket() {
    if (teams.length !== 16) {
        alert('Debes tener exactamente 16 equipos para generar el cuadro.');
        return;
    }

    let shuffledTeams = shuffleArray(teams);
    let bracketContainer = document.getElementById('bracket');
    bracketContainer.innerHTML = '';

    for (let i = 0; i < shuffledTeams.length; i += 2) {
        let matchElement = document.createElement('div');
        matchElement.className = 'match';
        matchElement.innerHTML = `
            <span>${shuffledTeams[i].name}</span>
            <span>VS</span>
            <span>${shuffledTeams[i + 1].name}</span>
        `;
        bracketContainer.appendChild(matchElement);
    }
}

function generateWinner() {
    if (teams.length !== 16) {
        alert('Debes tener exactamente 16 equipos.');
        return;
    }

    let winnerIndex = Math.floor(Math.random() * teams.length);
    let winnerContainer = document.getElementById('winner');
    winnerContainer.innerHTML = `
        <h3>¡${teams[winnerIndex].name} es el ganador!</h3>
        <img src="${teams[winnerIndex].image}" alt="${teams[winnerIndex].name}">
    `;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
