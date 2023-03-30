module.exports = (io) => io.on('connection', (socket) => {
    console.log(`User connected. ID ${socket.id}.`);

    socket.on('clientMessage', (message) => {
        console.log(`${socket.id}: ${message}.`);
        io.emit('serverMessage', `${message}`);
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('serverMessage', `${username} left the room`);
    });
});
