const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', socket => {
    socket.on('CLIENT_SEND_MESSAGE', data => {
        // console.log('CO TIN NHAN MOI:', data);
        // socket.emit('SERVER_SEND_MESSAGE', data);
        io.emit('SERVER_SEND_MESSAGE', data);
    });
});
