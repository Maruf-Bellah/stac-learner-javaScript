// Add New Element 

// Use push to insert at the end 
const arrP1 = [1,2,3,4];
arrP1[arrP1.length] = 100;
arrP1.push(5,6,7,8);

const arrP2 = [10,12,13];
// arrP1.push(...arrP2) // এটা spread operatior use করে ব্যবহার করা হয় 

// এটা আগের ভার্সন 
Array.prototype.push.apply(arrP1, arrP2);
Array.prototype.unshift.apply(arrP1, arrP2)




// console.log(arrP1);

// use splice to insert ar the given index 

const arrS1 = [1,2,5,6,7];
arrS1.splice(2, 0 , 3, 4);

const arrS2 = [8,9,10];
arrS1.splice(7, 0, ...arrS2)

console.log(arrS1);