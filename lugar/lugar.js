const axios = require( 'axios' );
const config = require( '../config' );

const getLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${config.googleApiKey}`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    } else {
        let address = response.data.results[0].formatted_address;
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        return { address, lat, lng }
    }
};

module.exports = {
    getLatLng
};
