// JS Object for route endpoints
projectData = {};
// projectData = {date: '11/30/2019', temp: '30', content: 'I feel great'};

console.log('About to start server');

// Express to run server and routes
const express = require('express');

// Start up app instance
const app = express();

// Dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// Init main project folder
app.use(express.static('website'));

const port = 3000;

// Spin up the server
function listening() {
    console.log(`Running on port: ${port}`);
}

const server = app.listen(port, listening);

// GET route
app.get('/all', sendData);

function sendData (req, res) {
    res.send(projectData);
}

// POST route
// // NOT SURE ABOUT the following
// // is callBack necessary?
// app.post('/all', callBack);

// function callBack (req, res) {
    // res.send('POST received');
// }

app.post('/updateData', updateData);

function updateData (req, res) {
    console.log(req.body);
    projectData.date(req.body.date);
    projectData.temp(req.body.temp);
    projectData.content(req.body.content);
    // // What does this do?
    res.end();
}