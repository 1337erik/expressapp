var express = require( 'express' );
var router  = express.Router();
var axios = require( 'axios' );

router.get( '/foods', function( req, res ) {

    res.render( 'shitty' );
});

router.get( '/all', function( req, res ) {

    let headers = {

        headers: {

            'Authorization' : 'Bearer ' + process.env.APITOKEN
        }
    };

    const location = req.query.search || null;

    console.log( `location is ${location}` );

    axios.get( `https://www.eventbriteapi.com/v3/events/search?location.address=${location}`, headers )
    .then( function( result ) {

        console.log( result.data.events[ 0 ] );
        res.render( 'events/all', { events: result.data.events } );
    });
});

module.exports = router;