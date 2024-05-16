const net = require('net');

const client = new net.Socket

// connect lleva puerto, direccion IP y una funcion flecha de que quieres hacer
client.connect(5000, '127.0.0.1', () => {
    console.log("Conexion exitosa.");
})

// Que sucedera cuando se cierre la conexion?
client.on('close', () => {
    console.log("Conexion terminada");
});

// Al recibir info, ponemos eso en el parametro de la funcion flecha
client.on('data', (data) => {
    console.log(`INFO: ${data}`);
});