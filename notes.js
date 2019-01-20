console.log('starting notes.js');
console.log(module);
const fs = require('fs');
module.exports.msg = 'hello';
// module.exports.addnote = () => {
//     console.log('addnote');
//     return 'new note';
// };
module.exports.add = (a, b) => {
    return a + b;
};
var addnote = (title, body) => {
    console.log('Adding note', title, body);

    var notes = [];
    var note = {
        title,
        body
    };
    try
    {
        var notesstring = fs.readFileSync('notes-data.json');
        //console.log('abcdefgh-note' + notesstring);
        notes = JSON.parse(notesstring);
    }
    catch(e)
    {

    }
    var duplicatenotes = notes.filter((note) => note.title == title);
    if(duplicatenotes.length === 0)
    {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
    }
};
var getall = () => {
    console.log('Getting all notes');

};
var getnote = (title) => {
    console.log('Getting note', title);

};
var removenote = (title) => {
    console.log('Removing note', title);

};
module.exports = {
    addnote,
    getall,
    getnote,
    removenote
};