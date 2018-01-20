//Return dev or prod keys

if (process.env.NODE_ENV === 'production') {

    //This is production
    module.exports = require('./prod');
    
} else {

    //This is development
    module.exports = require('./dev');

}