const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, l, h) => {
    
    try{      
        
        let salida = '';
        let consola = '';
    
        for(let i = 1; i <= h; i++){
            salida += `${base} x ${i} = ${i * base}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i * base}\n`;
        }

        if (l){
            console.log('===================='.green);
            console.log(`Tabla del ${colors.blue(base)}`);
            console.log('===================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return 'Archivo creado';
    }catch(err){
        throw err;
    }    
}


module.exports = {
    crearArchivo
}