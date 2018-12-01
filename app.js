console.log('hello');

setInterval(function(){
    console.log('hyeee');
}, 3000);
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const lodash = require('lodash');
console.log(lodash.isString(true));
console.log(lodash.isString('abcdefgh'));
var filteredarray = lodash.uniq(['abcdefgh', 'a', 'abcdefgh']);

console.log(filteredarray);
var res = notes.addnote();
var resadd = notes.add(14, -4);
console.log(resadd);
console.log(res);
console.log(os.userInfo());
var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username} ${notes.msg}`, function(err){

    console.log(err);
    if(err)
    {
        console.log('unable to write the file');
    }
});