var eventos = require('events');
var EmissorEventos = eventos.EventEmitter;
var ee = new EmissorEventos();

ee.on('dados', function(fecha){ 
    console.log(fecha);
  });
  // emitindo o evento
  setInterval(function(){
    ee.emit('dados', Date.now());
  }, 500);