const baseRepository = require('./base-rds-repo');
const config = require('../common/config');

async function getAllQuestion() {
    let params = null;
    const query = `SELECT * FROM "${config.rds.schema}"."${config.rds.table.question}";`;
    try {
        let db = baseRepository.getDb();
        let result = await db.any(query, params);
        db.$pool.end();
        if (result) return result;
    } catch (error) {
        return "Error repo";
    }
}
async function searchQuestion(params) {
    var query = `SELECT * FROM "${config.rds.schema}"."${config.rds.table.question}"`;
    if (params.status || params.keyword) {
        query += ' WHERE';
        if (params.status){
            params.keyword = '%' + params.keyword + '%';
            query += ' status = $/status/ AND ';
        } 
        if (params.keyword) query += ' question_text LIKE $/keyword/';
    }
    try {
        let db = baseRepository.getDb();
        let result = await db.any(query, params);
        db.$pool.end();
        if (result) return result;
    } catch (error) {
        return "Error repo";
    }
}
async function create(params) {
    const query = `INSERT INTO "${config.rds.schema}"."${config.rds.table.question}"(question_text, order_index, status, start_date,
    end_date, created_by) VALUES ($/question_text/, $/order_index/, $/status/, $/start_date/, $/end_date/, $/created_by/)
    RETURNING *;`;
    try {
        let db = baseRepository.getDb();
        let result = await db.any(query, params);
        db.$pool.end();
        if (result) return result;
    } catch (error) {
        return "Error repo";
    }
}
async function update(params) {
    const query = `UPDATE "${config.rds.schema}"."${config.rds.table.question}"
    SET question_text= $/question_text/,start_date=$/start_date/, end_date=$/end_date/, updated_by=$/update_by/, updated_at=$/update_at/
    WHERE id=4
    RETURNING *;`;
    try {
        let db = baseRepository.getDb();
        let result = await db.one(query, params);
        db.$pool.end();
        if (result) return result;
    } catch (error) {
        return "Error repo";
    }
}
module.exports = {
    getAllQuestion,
    searchQuestion,
    create,
    update
}