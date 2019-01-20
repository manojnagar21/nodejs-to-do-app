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
var fetchnotes = () => {
    
    try
    {
        var notesstring = fs.readFileSync('notes-data.json');
        //console.log('abcdefgh-note' + notesstring);
        //notes = JSON.parse(notesstring);
        return JSON.parse(notesstring);
    }
    catch(e)
    {
        return [];
    }
};
var savenotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
};
var addnote = (title, body) => {
    console.log('Adding note', title, body);

    //var notes = [];
    var notes = fetchnotes();
    var note = {
        title,
        body
    };
    var duplicatenotes = notes.filter((note) => note.title == title);
    if(duplicatenotes.length === 0)
    {
        notes.push(note);
        savenotes(notes);
        return note;
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