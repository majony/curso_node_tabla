const { red } = require('colors');
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base, l=false, h=10 ) => {

        try {
            
            let salida = '';
            for (let index = 1; index <= h; index++) {
                salida += `${base} ${'X'.green} ${index} ${'='.green} ${base * index}\n`;
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            if(l){
                console.log("================================")
                console.log('Tabla del '.green, colors.blue(base))
                console.log("================================")
                console.log(salida)
            }
                        
            return (`tabla-${base}.txt creado`);
        } catch (error) {
            throw error;
        }

}

module.exports = {
    crearArchivo
}