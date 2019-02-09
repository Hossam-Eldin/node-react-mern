if (process.env.NODE_ENV === 'production') {
    //if we in production env  heroku 
    module.exports = require('./prod')
} else {
    // if we are in development env
    module.exports = require('./dev')
}