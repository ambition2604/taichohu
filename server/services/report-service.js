const reportRepo = require('../repositories/report-repo')

async function getAllReport(request) {
    try {
        const reports = await reportRepo.getAllReport(request);
        return reports;
    } catch (error) {
        error = "Error service";
        return error;
    }
}
async function downloadReport(request) {
    try {
        const result = await reportRepo.downloadReport(request);
        var path = JSON.stringify(result).toString();
        path = path.substring(path.indexOf(':')+2,path.indexOf('"}]'));
        return path;
    } catch (error) {
        error = "Error service";
        return error;
    }
}




module.exports = {
    getAllReport,
    downloadReport
}