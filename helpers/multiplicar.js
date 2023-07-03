const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, lista = false, hasta) => {
    try {

        let salida = '';
        if (lista) {
            console.log('=================' .green);
            console.log(`La tabla del ${base}` .bgGreen);
            console.log('==================');
        }

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (lista) {

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);

        /* console.log('=================');
        console.log(`La tabla del ${base}`);
        console.log('==================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`); */

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}