document.getElementById('send-button').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var input = document.getElementById('message-input');
    var message = input.value.trim();

    if (message) {
        var chatWindow = document.getElementById('chat-window');
        var messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        input.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
