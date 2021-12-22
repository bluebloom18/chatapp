var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

/*
    socket.emit('createMessage',{
        from: 'Andrew',
        text: 'OK this is good'
    });
    socket.emit('createEmail',{
        to:'jen@asad.com',
        text:'Hi this is so'
    });
*/

});
socket.on('disconnect', function () {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage',message);
})

/*
socket.on('newEmail', function(email) {
    console.log('New email',email);
})
*/