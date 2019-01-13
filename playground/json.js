var obj = {
    name: 'abcdefgh'
};

var stringobj = JSON.stringify(obj);
console.log(typeof stringobj);

console.log(stringobj);

var personstring = '{"name": "abcdefgh", "age": 28}';
var person = JSON.parse(personstring);
console.log(typeof person);

console.log(person);


const fs = require('fs');
var originalnote = {
    title: 'title',
    body: 'body'
};
var originalnotestring = JSON.stringify(originalnote);
fs.writeFileSync('notes.json', originalnotestring);
var notestring = fs.readFileSync('notes.json');
var notes =  JSON.parse(notestring);
console.log(typeof notes);

console.log(notes.title);