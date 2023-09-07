var point = {
    w: 10,
    x: 20,
    y: 30,
    z: 40
}

// point.y= undefined; এভাবে করা যায় তবে undefined দেখা যায় 
// point.y= null; //এভাবে করা যায় তবে null ও দেখা যায় 

delete point.w  // delete oparetor/syntax দিলে delete করা যাবে 


console.log(point);