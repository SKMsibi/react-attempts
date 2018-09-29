var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const twenyFourHoursInMiliseconds = 86400000;
module.exports = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        cacheMaxAge: (twenyFourHoursInMiliseconds),
        jwksRequestsPerMinute: 5,
        jwksUri: "https://contactme.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:3003',
    issuer: "https://contactme.eu.auth0.com/",
    algorithms: ['RS256']
});
