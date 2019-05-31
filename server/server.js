const express = require('express');

//Importamos la librería de socket io
const socketIO = require('socket.io');
// Utilizamos el modulo de http de node
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Io = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


//Cambiamos el app.listen por el server.listen de node
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});