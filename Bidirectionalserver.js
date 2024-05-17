const net = require('net');

const client = new net.Socket

client.connect(5000, '127.0.0.1', () => {
    console.log("Conexion exitosa.");

     
});

client.on('close', () => {
    console.log("Conexion terminada.");
});

client.on('data', (data) => {
    console.log('Un cliente dice: ${data}');    
});