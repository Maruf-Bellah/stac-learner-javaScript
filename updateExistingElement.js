// Easy One 

const numbers = [1,2,7,8];
numbers[2] = 3;
// console.log(numbers);


// Array of Object

const students = [
    {id: 1, name: 'Maruf'},
    {id: 2, name: 'Bellah'},
    {id: 3, name: 'Hasan'},
    {id: 4, name: 'Mahmood'},
    {id: 5, name: 'Masum'},
];

const givenNumber = 3;
const updateName = 'Maruf Bellah';

for(let i = 0; i < students.length; i++){
    if(givenNumber == students[i].id){
        students[i].name = updateName
        break;
    }
}
console.log(students);