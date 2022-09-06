function getAverage (a,b){

    var average = (a + b)/2; // local variable

    console.log(average);

    return average;
}

var myResult = getAverage(3,5); //global variable

console.log(" The average is " + myResult);

function logResult(){

    console.log(" The average is " + myResult + " inside the function");


}

logResult();