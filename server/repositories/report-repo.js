const baseRepository = require("./base-rds-repo");
const config = require("../common/config");

async function getAllReport(params) {
  var query = `SELECT id,STRING_AGG(start_date || ' - ' || end_date,',' ) as text 
  FROM "${config.rds.schema}"."${config.rds.table.report}" 
  WHERE start_date > current_date - interval '90' day GROUP BY id ;`;
  if (params.start_date && params.end_date) {
    var query = `SELECT id,STRING_AGG(start_date || ' - ' || end_date,',' ) as text 
        FROM "${config.rds.schema}"."${config.rds.table.report}" 
        WHERE start_date > $/start_date/ AND end_date < $/end_date/ AND start_date < end_date GROUP BY id;`;
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
async function downloadReport(params) {
  var query = `
    SELECT path FROM "${config.rds.schema}"."${config.rds.table.report}" WHERE id = $/id/;`;
  try {
    let db = baseRepository.getDb();
    let result = await db.any(query, params);
    db.$pool.end();
    if (result) return result;
  } catch (error) {
    return "Error repo";
  }
}
async function checkReport(params) {
  var query = `
    SELECT * 
    FROM 
        "${config.rds.schema}"."${config.rds.table.report}" 
    WHERE 
        id = $/id/ AND DATE(created_at) = current_date;`;
  try {
    let db = baseRepository.getDb();
    let result = await db.any(query, params);
    db.$pool.end();
    if (result) return result;
  } catch (error) {
    return "Error repo";
  }
}

module.exports = {
  getAllReport,
  downloadReport,
  checkReport,
};
