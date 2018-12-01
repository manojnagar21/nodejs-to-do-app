console.log('starting notes.js');
console.log(module);
module.exports.msg = 'hello';
module.exports.addnote = () => {
    console.log('addnote');
    return 'new note';
};
module.exports.add = (a, b) => {
    return a + b;
}