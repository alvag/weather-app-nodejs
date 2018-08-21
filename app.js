const lugar = require( './lugar/lugar' );
const clima = require('./clima/clima');

const argv = require( 'yargs' ).options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.address} es de ${temp}°C`;
    } catch ( e ) {
        return `No se pudo determinar el clima en ${direccion}`
    }
};

getInfo(argv.direccion)
    .then(response => console.log( response ))
    .catch(err => console.log( err ));
