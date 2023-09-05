const arr2 = [1,2,3,4,5,6,7,8,9];

// let update = 0;

for(let i =0; i < arr2.length; i++){
    arr2[i] = false;

}

arr2.fill('maruf')

// console.log(arr2);


const response = new Array(10);
response.fill(false);

for(let i = 0; i < response.length; i++){
    const rand = Math.floor(Math.random() * 10 +1);
    response[i] = rand > 5 ? 'O' : 'X'
};

// console.log(response);
let arr = ['Maruf Bellah', 'Ayesha Bellah', 'Sonia', 'Morjina', 'khadija'];

function update(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = `${i + 1} . ${arr[i]}`;
    }
    return arr;
};


const show = update(arr);
console.log(show );