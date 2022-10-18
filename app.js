const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( msg => {
        console.log(msg);
        console.log("todo ok")
    } )
    .catch( err => {
        console.log("todo mal", err)
    })
