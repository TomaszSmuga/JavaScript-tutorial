


var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){ 
        console.log(speed * time + " is the distance");
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
};

var myCar = new Car (6, "Pweł");
var myCar1 = new Car (29, "Paeł");
var myCar2 = new Car (691, "Pawł");
var myCar3 = new Car (60, "Pawe");

myCar.drive(30,5);
myCar3.logDriver()