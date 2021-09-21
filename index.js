const student = require ('./information');
const cowsay = require('cowsay');
console.log(cowsay.say({
    text: `Hello I'm ${student.name} from ${student.campus} Campus!`,
    e: 'ôò',
    T: 'U'
}))
