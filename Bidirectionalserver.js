const net = require('net');

const client = new net.Socket

client.connect(5000, '127.0.0.1', () => {
    console.log("Server established the connection correctly.");

     
});

client.on('close', () => {
    console.log("Conection terminated");
});

client.on('data', (data) => {
    console.log('A client in the server sent a message: ${data}');    
});