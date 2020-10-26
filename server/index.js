const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Common

const constant = require('./common/constants');

// Router

const questionRouter = require('./controllers/question-controller');
const reportRouter = require('./controllers/report-controller');

app.use(constant.API_CATEGORY.QUESTION_PATH, questionRouter);
app.use(constant.API_CATEGORY.REPORT_PATH, reportRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on post ${port}`));