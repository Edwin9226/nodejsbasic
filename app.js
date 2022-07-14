const { sum } = require('./helpers');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hey whas up")
});

app.listen(3000);
// var let const
const total = sum(10, 200);
console.log("Total:", total);