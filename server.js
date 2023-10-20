// server.js
const express = require('express');
const app = express();

// Sample data
const dataset = [
    { id: 1, name: 'Data 1' },
    { id: 2, name: 'Data 2' },
    { id: 3, name: 'Data 3' },
];

app.get('/data', (req, res) => {
    res.json(dataset);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });
