const Joi = require('joi');
const constants = require('../common/constants');
/**
 * Question Type :
 * @type {QuestionModel}
 * @property {string} question_text
 * @property {string} order_index
 * @property {string} status
 * @property {string} start_date
 * @property {string} end_date
 * @property {string} create_by
 * @property {string} update_by
 * @property {string} create_at
 * @property {string} update_at
 */
class Question {
    constructor(model) {
        if (!model) return
        this.question_text = Joi.string().required();
        this.order_index = Joi.number.required();
        this.status = Joi.valid(constants.STATUS.ACTIVE, constants.STATUS.INACTIVE);
        this.create_by = Joi.string();
        this.update_by = Joi.string();
    }
}

module.exports = Question;