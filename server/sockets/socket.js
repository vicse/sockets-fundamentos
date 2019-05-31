const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje: 'Bienvenidos a esta app'
    });


    //Los on son para escuchar
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // Broadcast es enviar mensajes a todos los usuarios conectados a la aplicación
        client.broadcast.emit('enviarMensaje', data); 

        // if( mensaje.usuario ){
        //     callback({
        //         res : 'Todo salio BIEN'
        //     });
        // }else{
        //     callback({
        //         res: 'Todo salio mall'
        //     });
        // }

       

    });


  

});