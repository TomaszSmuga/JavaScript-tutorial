var myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Tomek";
myCar.drive = function(){ console.log("now diriving");};

myCar.drive();

var myCar2 = {
            maxSpeed: 50, 
            driver: "Smugeiro", 
            drive: function(speed, time){ 
            console.log(speed * time + " is the distance");}
};


console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);


