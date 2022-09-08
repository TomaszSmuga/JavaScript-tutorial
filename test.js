

var myCar2 = {
            maxSpeed: 50, 
            driver: "Smugeiro", 
            drive: function(speed, time){ 
            console.log(speed * time + " is the distance");},
            logdriver: function(){
                console.log("driver name is " + this.driver);
            }
};




myCar2.logdriver();

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);


