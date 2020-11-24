//requireds


const argv = require('./config/yargs').argv;
var colors = require('colors');
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');



let comando = argv._[0];

switch(comando){
   case 'listar':
      listarTabla(argv.base,argv.limite);
   break;

   case 'crear':
      crearArchivo(argv.base,argv.limite)
         .then(archivo=>console.log(`Archivo creado: ${archivo}`))
         .catch(e=>console.log(e));
   break;

   default:
      console.log('Comando no reconocido');
}

//const fs = require('express');
//const fs = require('./fs');
//let base =1;

//path del archivo y de node
//console.log(process.argv);

//let argv2=process.argv;

//console.log('Limite',argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);

//console.log(multiplicar);
