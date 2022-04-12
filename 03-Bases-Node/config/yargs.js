const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    default: 5,
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .check((argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: true,
                    describe: 'Muestra tabla en consola'
                })  
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    demandOption: true,
                    describe: 'Colocamos un limite a la tabla'
                })              
                .argv;

//console.log('base yargs', argv.base);
console.log(argv);

module.exports = argv;