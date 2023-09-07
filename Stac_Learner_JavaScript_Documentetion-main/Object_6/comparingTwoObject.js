// এখানে প্রত্যেক্টা object এর ভ্যালু ধরে ধরে compare করতে হবে 

var obj1 ={
    a: 10,
    b: 20
}


var obj2 ={
    a: 10,
    b: 20
}

if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true);
}else{
    console.log(false);
}

// console.log(obj1 !== obj2);

// twinkle cats er moddhe jeson niye ekta crash course o ace seta pore dekhe niben

console.log(obj1);

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));// json Ta object k pura string e rupantor kore fele 