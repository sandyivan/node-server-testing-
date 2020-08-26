/*const x = require('./script2.js');

const a = x.largeNumber;
const b = 500;

console.log(a + b);*/


const fs = require('fs');

fs.readFile('./hello.text', (err, data) => {
    if(err) {
        console.log('errrrrr');
    }
    console.log('async', data.toString());
})  

const file = fs.readFileSync('./hello.text');
console.log('sync', file.toString());

