const axios = require( 'axios' );
const config = require( './config' );
const argv = require( 'yargs' ).options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${config.googleApiKey}`)
.then(response => {
    //console.log( JSON.stringify(response.data, null, 2 ));

    let address = response.data.results[0].formatted_address;
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;

    console.log( 'address: ', address );
    console.log( 'lat: ', lat );
    console.log( 'lng: ', lng );
})
.catch(e => console.log( 'Error: ', e ));
