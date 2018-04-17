'use strict';
const app = require('express')();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

const io = require('socket.io')(server);
io.on('connection', function(socket) {
    console.log('user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('send message', function(jsonMsg) {
        console.log('received message from client: ' + JSON.stringify(jsonMsg));
        sockets.emit('new message', {mes:data});
    });
});
server.listen(3000, function () {
    console.log('Server started (3000)');
});