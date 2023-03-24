const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = 3000;

const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    console.log(`User connected. ID ${socket.id}`);

    socket.emit('welcome', 'Hi, welcome to the test of sending messages from back-end to front-end!');
    
    socket.on('ping', () => {
        console.log(`${socket.id} sent a ping.`);
        io.emit('pong', `${socket.id} sent a ping`);
    });
});

app.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
