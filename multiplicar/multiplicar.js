const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');
const colors = require('colors/safe');


let listarTabla=(base,limite=10)=>{

    console.log('=================');
    console.log(`tabla de ${base}`.green);
    console.log('=================');

    return new Promise((resolve,reject)=>{
        for (let i = 1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base * i}`);
        }       
    })
}


let crearArchivo=(base,limite=10) =>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject('el valor introducido no es un numero');
            return;
        }
        
        let dato='';
        for (let i = 1; i<=limite; i++){
            dato+=`${base} * ${i} = ${base * i} \n`;
        }
        
        const data = new Uint8Array(Buffer.from('Hola Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, dato, (err) => {
            if 
                (err) reject(err);
            else
                resolve(`tabla ${base} creada`.blue);
        });
        

    });
}

module.exports={
    crearArchivo,
    listarTabla
}
/*
Tambien se puede incluyendo estas palabras al principio de cada funcion:
module.export.nombrefuncion()
*/

