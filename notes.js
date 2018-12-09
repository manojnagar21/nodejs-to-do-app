console.log('starting notes.js');
console.log(module);
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