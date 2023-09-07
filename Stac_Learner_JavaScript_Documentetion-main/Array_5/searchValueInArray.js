/* var arr = [5, 65, 8, 9, 40, 4, 2, 3, 7, 50, 6, 46];

var found = 7;
var isFound = false;
for(var i = 0; i <arr.length ; i++){
    if(arr[i] === found){
        console.log('Data Found at Index' + ' ' + i);
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log('Data is not Found');
} */


var names =[ 'maruf', 'khan', 'bellah', 'sujon', 'siyam', 'ovi', 'babul'];

var found = 'babul';
var isFound = false;

for(var i = 0; i < names.length; i++){
    if(names[i] == found){
        console.log('The name found at ' + ' ' + i);
        isFound = true;
        break;
    }
}
if(!isFound){
    console.log('The name is not found');
}