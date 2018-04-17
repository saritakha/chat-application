'use strict';
const app = require('express')();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

const io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('user connected');

    socket.on('send message', function (data) {
        console.log(data);
        io.sockets.emit('new message', {
            msg: data
        });
    });
});
server.listen(3000, function () {
    console.log('Server started (3000)');
});