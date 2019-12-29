var io = require('../bin/www');

io.on('connection', function(socket) {
    console.log('connected client');

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
});
