var socket = io();

//Cuando la pagina se conecta
socket.on('connect', function(){

console.log('Conectado al servidor');

});

//Los on es para escuchar
socket.on('disconnect', function(){

console.log('Perdimos conexión con el servidor');

});

//Los emits son para enviar información  
//1er nombre del evento 2do mensaje, 3er una función que se ejecuta cuando todo sale bien.
socket.emit('enviarMensaje', {
usuario: 'vicse',
mensaje: 'Hola Mundo'
}, function( resp ){
console.log('respuesta server: ', resp);
});


//Escuchar información
socket.on('enviarMensaje', function(mensaje){
console.log('Servidor :', mensaje);
});

