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

app.use(express.static(__dirname + '/public'));

require('./sockets/ping')(io);
require('./sockets/chat')(io);
require('./sockets/rooms')(io);

app.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
