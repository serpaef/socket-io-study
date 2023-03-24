module.exports = (io) => io.on('connection', (socket) => {
    console.log(`User connected. ID ${socket.id}`);

    socket.emit('welcome', 'Hi, welcome to the test of sending messages from back-end to front-end!');
    
    socket.on('ping', () => {
        console.log(`${socket.id} sent a ping.`);
        io.emit('pong', `${socket.id} sent a ping`);
    });
});
