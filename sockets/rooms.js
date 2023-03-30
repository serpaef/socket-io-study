module.exports = (io) => io.on('connection', (socket) => {
    socket.on('joinRoom', ({username, room}) => {
        socket.join(room);
        
        socket.emit('serverMessage', `Hi ${username}, welcome to ${room} room!`);

        socket.broadcast.to(room).emit('serverMessage', `${username} just joined the room!`);

        socket.on('roomClientMessage', ({message, room}) => {
            io.to(room).emit('serverMessage', `${username}: ${message}`)
        })
    })
});
