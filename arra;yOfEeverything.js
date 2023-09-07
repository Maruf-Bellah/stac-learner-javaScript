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
    console.log(`${funcs[i].name} Result = ${result}`);
}

// console.log(funcs);
