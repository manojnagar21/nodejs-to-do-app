console.log('hello');

setInterval(function(){
    //console.log('hyeee');
}, 3000);
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const lodash = require('lodash');
const yargs = require('yargs');
console.log(lodash.isString(true));
console.log(lodash.isString('abcdefgh'));
var filteredarray = lodash.uniq(['abcdefgh', 'a', 'abcdefgh']);

console.log(filteredarray);
//var res = notes.addnote();
//var resadd = notes.add(14, -4);
//console.log(resadd);
//console.log(res);
console.log(os.userInfo());
var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username} ${notes.msg}`, function(err){

    console.log(err);
    if(err)
    {
        console.log('unable to write the file');
    }
});



const argv = yargs.argv;
console.log(process.argv);
var command = process.argv[2];
var command = argv._[0];
console.log('Command', command);
console.log('Process', process.argv);
console.log('Yargs', argv);
if(command === 'add')
{
    console.log('Adding new note');
    var note = notes.addnote(argv.title, argv.body);
    console.log(note);
    if(note)
    {
        console.log('Note created');
        console.log('-----');
        console.log(`Title ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else
    {
        console.log('Note title taken');
    }
}
else if(command === 'list')
{
    console.log('Listing all notes');
    notes.getall();
}
else if(command === 'read')
{
    console.log('Reading notes');
    notes.getnote(argv.title);
}
else if(command === 'remove')
{
    //console.log('Removing notes');
    var noteremoved = notes.removenote(argv.title);
    var message = noteremoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else
{
    console.log('Command not recognized');
}