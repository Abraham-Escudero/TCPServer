const net = require('net');

// createServer recibe varias cosas, una funcion anonima
const server = net.createServer((con) => {
    // se esta pasando la funcion como parametro en lugar de la ejecucion de la funcion
    con.write("Servidor iniciado correctamente");
    console.log("Recibi una conexion remota");
    con.pipe(con);
});

// Listen necesita el puerto y la direccion IP
server.listen(5000, '127.0.0.1');