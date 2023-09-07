var obj = {
    x: 40,
    y: 50,
    z: 60
}

// console.log(Object.keys(obj)); // এই Object.key() method টা object এর সকল key/property দেখায় 

// console.log(Object.values(obj)); // এই Object.key() method টা object এর সকল values দেখায় 
// console.log(Object.entries(obj)); // two dimentional একটি array return করে 


//উপরের object এর মত করে আরেকটা object এভাবে বানানো যায় , এটা array তে কাজ করে , কারণ array ও একটা object
/* 

var obj2 = obj;
obj2.x = 100;
obj2.z = 200;

console.log(obj);
console.log(obj2); */

// অথবা এভাবে ও করা যায় 

var obj2 = Object.assign({} , obj); // assign method একটা নতুন object বানায় দেয় 
obj2.x = 500;

console.log(obj);
console.log(obj2);