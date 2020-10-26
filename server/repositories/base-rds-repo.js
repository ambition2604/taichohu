const config = require('../common/config');
function getDb() {
    var initOptions = {
        // Initialization Options
    };
    var pgp = require('pg-promise')(initOptions);
    if (!config.rds.connectionString) return;
    var db = pgp(config.rds.connectionString);
    if (db) return db;
}
async function query(query, params) {
    return await getDb().any(query, params);
}
module.exports = {
    getDb,
    query
}