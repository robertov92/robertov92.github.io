var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


var today = new Date();
var weekDay = days[today.getDay()];
var day = String(today.getDate()).padStart(2, '0');
var month = months[today.getMonth()];
var year = today.getFullYear();

todayFormatted = weekDay + ', ' + day + ' ' + month + ' ' + year;
document.write(todayFormatted);


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}