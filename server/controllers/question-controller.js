const express = require('express');
const router = express.Router();
const constants = require('../common/constants');
const api = constants.API_CATEGORY
const questionService = require('../services/question-service');
// const QuestionModel = require('../models/question-model');
router.get(api.GET_ALL_QUESTION, async (req, res) => {
    //Logger
    try {
        // Validate

        // Call service 
        const body = req.body;
        const response = await questionService.getAllQuestion();
        return res.json(response);
    } catch (error) {
        return "Error controller"
    }
});
router.get(api.SEARCH_QUESTION, async (req, res) => {
    //Logger
    try {
        // Validate

        // Call service 
        const body = req.body;
        console.log(body);
        const response = await questionService.searchQuestion(body);
        return res.json(response);
    } catch (error) {
        return "Error controller"
    }
});
router.post(api.CREATE, async (req, res) => {
    //Logger
    try {
        const body = req.body;
        // Validate

        // Call service 
        const response = await questionService.create(body);
        return res.json(response);
    } catch (error) {
        return "Error controller"
    }
});

router.post(api.UPDATE, async (req, res) => {
    //Logger
    try {
        const body = req.body;
        // Validate

        // Call service 
        const response = await questionService.update(body);
        return res.json(response);
    } catch (error) {
        return "Error controller"
    }
});

module.exports = router;