const arr = [10, "Ten", true, getTen(), { ten: 10 }, [10, 20]]; //এভাবে করা ঠিক না
// console.log(arr);

function getTen() {
  return 10;
}

// array of object
const favChannels = [
  { name: "Stack Learner", url: "https://youtube.com/stacklearner" },
  { name: "JS Bangladesh", url: "https://youtube.com/jsbangladesh" },
  { name: "Traversy Media", url: "https://youtube.com/techguyweb" },
  { name: "Wes Bos", url: "https://youtube.com/wesbos" },
];

// array of function


const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;


// Loop and call all functions from array 
const funcs = [sum, sub, times, div, mod];
// const funcs = [sum(10,20), sub(), times(), div(), mod()];

const a = 10;
const b = 20;

for(let i = 0; i < funcs.length; i++){
    const result = funcs[i](a, b);
    // console.log(`${funcs[i].name} Result = ${result}`);
}

// console.log(funcs);



const pointTable = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23]
];


// One Dimensional Traverse 
for(let i =0; i< pointTable.length; i++){
  // console.log(`point${i} - x=${pointTable[i]} and x=${pointTable[i][0]} and${pointTable[i][1]} total = ${pointTable[i][0] + pointTable[i][1]}`);
}

for(let i = 0; i < pointTable.length; i++){
  for(let j =0; j < pointTable[i].length; j++){
    // console.log(pointTable[i][j]);
  }
}
// console.log(pointTable);


// Two Dimentonal Travese 

const numbers =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for(let i =0; i <numbers.length; i++){
  for(let j = 0; j < numbers[i].length; j++){
      // console.log(numbers[i][j]);
    
    }
}

const matrixA = [
  [0, 3],
  [2, 3],
  [5, 8]
];

const matrixB = [
  [2, 0],
  [2, 6],
  [8, 8]
];



const matrixSum =(matrixA, matrixB) => {
  const result = [];
  for(let i = 0; i < matrixA.length; i++){
    const row = [];
    for(let j = 0; j < matrixA[i].length; j++){
      // console.log(matrixA[i][j] + matrixB[i][j])
      row.push(matrixA[i][j] + matrixB[i][j])
    }
    result.push(row)
  }
  return result;
}

matrixSum(matrixA, matrixB);