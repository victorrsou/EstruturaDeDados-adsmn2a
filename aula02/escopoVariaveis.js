var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable
}

function myOtherFunction() {
    myOtherVariable = 'local'
    return myOtherVariable;
}


console.log('myVariable: ' + myVariable)
console.log(myFunction());
console.log(myVariable);
console.log('myOtherVariable: ' + myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable)

