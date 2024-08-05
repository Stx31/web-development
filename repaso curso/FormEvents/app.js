const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
const errorDiv = document.querySelector('#error');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    // Clear previous errors
    errorDiv.textContent = '';

    if (!usernameInput.value.trim() || !tweetInput.value.trim()) {
        errorDiv.textContent = 'Both username and tweet fields are required.';
        return;
    }

    addTweet(usernameInput.value.trim(), tweetInput.value.trim());
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    newTweet.classList.add('tweet');

    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('username');
    usernameSpan.textContent = username;

    const tweetContent = document.createElement('span');
    tweetContent.textContent = ` - ${tweet}`;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = '❤';
    favoriteButton.addEventListener('click', () => toggleFavorite(newTweet));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', () => newTweet.remove());

    actionsDiv.append(favoriteButton, deleteButton);

    newTweet.append(usernameSpan, tweetContent, actionsDiv);
    tweetsContainer.append(newTweet);
};

const toggleFavorite = (tweetElement) => {
    const isFavorited = tweetElement.classList.toggle('favorited');
    const favoriteButton = tweetElement.querySelector('button');

    if (isFavorited) {
        favoriteButton.textContent = '❤️';
    } else {
        favoriteButton.textContent = '❤';
    }
};
