const socket = window.io();

const button = document.querySelector('#pingBtn');

button.addEventListener('click', (e) => {
    socket.emit('ping');
    return;
});

const createMessage = (message) => {
    const messagesUl = document.querySelector('#messages');
    const li = document.createElement('li');
    li.innerText = message;
    messagesUl.appendChild(li);
}

socket.on('welcome', (msg) => createMessage(msg));
socket.on('pong', (msg) => createMessage(msg));
