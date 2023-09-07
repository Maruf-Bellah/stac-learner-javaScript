var point = {
    x: 10,
    y: 20,
    z: 30
}
// এভাবে access করা কে dot noteson বলে এবং আমরা এটা বেশি ব্যবহার করবো 
/* console.log(point.x);
console.log(point.y);
console.log(point.x + point.z);
 */

// এভাবে access করা কে array noteson বলে , এবং যখন আমরা জানবো কোন ডাটা টা নিতে হবে তখন array notetion ব্যবহার করবো


console.log(point['x']);
console.log(point['y']);

var show = 'x';

// এভাবে আমরা দেখতে পারবো না কারন point এর মধ্যে কোন show ভ্যালু নেই এবং এটা undefined দেখাবে 
// console.log(point.show); 


// এভাবে আমরা দেখতে পারবো কারণ show এর মধ্যে x এর ভ্যলু আছে 
console.log(point[show]); 

