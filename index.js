const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allCourses = require('./data/data.json')

app.use(cors());

app.get('/',(req, res) => {
    res.send('Hello from master academy server');
})

app.get('/allCourses', (req, res) => {
    res.send(allCourses);
})

app.listen(port, () => {
    console.log(`Master academy is running on port: ${port}`)
})