const argv = require('./config/yargs').argv;
const colors = require('colors');

const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla.yellow.bold))
            .catch(err => console.log(err.bgRed.bold));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.bold.green))
            .catch(err => console.log(err.bgRed.bold));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}