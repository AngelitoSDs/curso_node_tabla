
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const yargs = require('yargs');
const argv = require('./config/yargs');
console.clear();


// const[, , arg3 ='base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
