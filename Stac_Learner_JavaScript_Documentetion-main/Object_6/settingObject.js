var point = {
    x: 10,
    y: 20,
    z: 30
}

point.x = 50; // এভাবে ভ্যলু কে update করে 
point.a = 50; // এভাবে নতুন ভ্যলু কে add করে 
// console.log(point.b); এই b এই object এর মধ্যে নেই তখন আপনাকে undefined দেখাবে , মানে এই value নেই 
point['y'] =100; //এটা array notetion ব্যবহার করে y কে update করেছি 

var prop = 'z';
point[prop] = 80; // এভাবে ও z এর notesion uppdate করা যায় 

console.log(point);