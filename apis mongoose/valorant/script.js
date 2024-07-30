async function fetchAgents() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        displayAgents(data.data);
    } catch (error) {
        console.error('Error fetching agents:', error);
    }
}

async function fetchSkins() {
    try {
        const response = await fetch('https://valorant-api.com/v1/weapons/skins');
        const data = await response.json();
        displaySkins(data.data);
    } catch (error) {
        console.error('Error fetching skins:', error);
    }
}

async function fetchAccountInfo(gameName, tagLine) {
    try {
        const response = await fetch(`https://riot-account-api.com/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
        const data = await response.json();
        displayAccountInfo(data);
    } catch (error) {
        console.error('Error fetching account info:', error);
    }
}

function displayAgents(agents) {
    const container = document.getElementById('agents-container');
    container.innerHTML = '';

    agents.forEach(agent => {
        const agentDiv = document.createElement('div');
        agentDiv.className = 'agent';

        const agentName = document.createElement('h3');
        agentName.textContent = agent.displayName;

        const agentImage = document.createElement('img');
        agentImage.src = agent.fullPortrait;

        agentDiv.appendChild(agentImage);
        agentDiv.appendChild(agentName);
        container.appendChild(agentDiv);
    });
}

function displaySkins(skins) {
    const container = document.getElementById('skins-container');
    container.innerHTML = '';

    skins.forEach(skin => {
        const skinDiv = document.createElement('div');
        skinDiv.className = 'skin';

        const skinName = document.createElement('h3');
        skinName.textContent = skin.displayName;

        const skinImage = document.createElement('img');
        skinImage.src = skin.fullPortrait;

        skinDiv.appendChild(skinImage);
        skinDiv.appendChild(skinName);
        container.appendChild(skinDiv);
    });
}

function displayAccountInfo(account) {
    const container = document.getElementById('account-info');
    container.innerHTML = '';

    const accountDiv = document.createElement('div');
    accountDiv.className = 'account';

    const accountName = document.createElement('h3');
    accountName.textContent = `Account Name: ${account.name}`;

    const accountTagLine = document.createElement('p');
    accountTagLine.textContent = `Tag Line: ${account.tagLine}`;

    accountDiv.appendChild(accountName);
    accountDiv.appendChild(accountTagLine);
    container.appendChild(accountDiv);
}

document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const gameName = document.getElementById('gameName').value;
    const tagLine = document.getElementById('tagLine').value;
    fetchAccountInfo(gameName, tagLine);
});

fetchAgents();
fetchSkins();
