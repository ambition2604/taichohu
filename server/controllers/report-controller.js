const express = require('express');
const router = express.Router();
const constants = require('../common/constants');
const api = constants.API_CATEGORY
const reportService = require('../services/report-service');
const moment = require('moment');

router.get(api.GET_ALL_REPORT, async (req, res) => {
    //Logger
    try {
        // Validate

        // Call service 

        const body = req.body;
        if((moment(body.start_date, "YYYY-MM-DD").isValid()=== false) && body.start_date !== "") return "required date_type";
        if((moment(body.end_date, "YYYY-MM-DD").isValid()=== false) && body.end_date !== "") return "required date_type";   
        const response = await reportService.getAllReport(body);
        return res.json(response);
    } catch (error) {
        return "Error controller"
    }
});
router.get(api.DOWNLOAD_REPORT, async (req, res) => {
    //Logger
    try {
        // Validate

        // Call service 

        const body = req.body; 
        const response = await reportService.downloadReport(body);
        res.send(response);
    } catch (error) {
        return "Error controller"
    }
});

module.exports = router;