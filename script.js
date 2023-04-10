alert("Name: Li Rein   Height: 5 4   Weight: 110 lbs");

var fname = prompt("Please input your first name:");
var mname = prompt("Please input your middle name:");
var lname = prompt("Please input your last name:");
var year = prompt("Please enter your Birth Year:");
var age = 2023 - year;

document.getElementById("pt2").innerHTML = "Hello (" + fname + ") (" + mname+ "),(" + lname+ ") How does it feel to be (" + year+ ")";

if( confirm("Press 'OK' if you wanna share your info or press 'CANCEL' if you are shy")==true){
    document.getElementById("pt3").innerHTML = "Name: (" + fname + ") (" + mname+ "),(" + lname+ ") / Birth Year: ("+year+"), (" + age+ ")";

        

} else{
    document.getElementById("pt3").innerHTML = "They dont want their info to be seen";
}
