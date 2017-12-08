const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
    uri: process.env.databaseUri, // Databse URI and database name
    uri: 'mongodb://revathy:admin123@ds133746.mlab.com:33746/meanemp',
    //uri:newFunction(),
    //var config = "mongodb://localhost:27017/employees";
    secret: crypto, // Cryto-created secret
    db: 'meanemp' // Database name
    //'db': 'employees' 
}