// const { sum } = require('./helpers');

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("hey whas up")
// });

// app.listen(3000);
// // var let const
// const total = sum(10, 200);
// console.log("Total:", total);

const fs = require('fs');
const fileName = "target.txt"

// fs.watch(fileName, () => console.log("File changed!"));

const data = fs.readFileSync(fileName);
console.log(data.toString());
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

console.log("Node js Async programing.")