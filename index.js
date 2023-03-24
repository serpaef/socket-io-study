const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}`);
});
