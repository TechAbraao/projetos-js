var countDownDate = new Date("may 16, 2024 00:00:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var distance = countDownDate - now;

var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

},1000);



