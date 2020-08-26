const fs = require('fs');

fs.readFile('./hello.text', (err,data) => {
    if(err) {
        console.log("errrrrr");
    }
    console.log('async', data.toString());
})

const file = fs.readFileSync('./hello.text');
console.log('sync', file.toString());

// append 

/*fs.appendFile('./hello.text', ' this is fun', err => {
    if(err) {
        console.log('errrrrrrrrr');
    }
})*/

//write file 
/*
fs.writeFile('./bye.text', 'bye bye', err => {
    if(err) {
        console.log('errrrrr');
    }
})
*/

fs.unlink('./hello.text', err => {
    if(err) {
        console.log(err)
    }
    console.log('this is reallllllly funnnnnnnnnnnnnnnnnnn')
})
