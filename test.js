var birthday = new Date (1998, 4, 25, 9, 45, 23)
var birthday2 = new Date (1998, 4, 25, 9, 45, 23)

console.log(birthday.getMonth());
console.log(birthday.getDay());
console.log(birthday.getTime());


if(birthday.getTime == birthday2.getTime){

    console.log("BD the same")
} else {
    console.log("BD not equal")
}