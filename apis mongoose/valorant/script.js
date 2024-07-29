
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


fetchAgents();
fetchSkins();
