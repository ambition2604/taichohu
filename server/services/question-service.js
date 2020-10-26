
const questionRepo = require('../repositories/question-repo')
// const QuestionModel = require('../models/question-model');

/**
 * Get All question
 */
async function getAllQuestion() {
    try {
        const questions = await questionRepo.getAllQuestion();
        return questions;
    } catch (error) {
        error = "Error service";
        return error;
    }
}

/**
 * Search Questions 
 */
async function searchQuestion(request) {
    try {
        const questions = await questionRepo.searchQuestion(request);
        return questions;
    } catch (error) {
        error = "Error service";
        return error;
    }
}
/**
 * Insert question
 */
async function create(request) {
    try {
        await questionRepo.create(request);
        return "Insert success";
    } catch (error) {
        error = "Error service";
        return error;
    }
}
/**
 * Update question
 */
async function update(request) {
    try {
        await questionRepo.update(request);
        return "Update success";
    } catch (error) {
        error = "Error service";
        return error;
    }
}
module.exports = {
    getAllQuestion,
    searchQuestion,
    create,
    update
}