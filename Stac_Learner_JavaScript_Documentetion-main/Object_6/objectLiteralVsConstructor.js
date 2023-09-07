var obj ={};
obj.x = 10;

// console.log(obj);

// object literal 
// ==========================
var point = {
    x: 10,
    y: 20,

}
point.y = 100; // এভাবে object পাঠানো যায় 

point.z = 30; // যদি কোন property না থাকে তাহলে এভাবে লেখে object এর ভিতরে add করানো যায় 

// console.log(point);


// constructor Object 
// ======================================
var obj2 = Object();
obj2.a = 10;
console.log(obj2);

var obj3 = Object();
obj3.b = 30;
console.log(obj3);