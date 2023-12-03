const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$mensaje = document.getElementById('mensaje')

const countDownDate = new Date('Dec 25, 2023 00:00:00').getTime();

let interval = setInterval(function(){
    //obtener fecha actual y milisegundos
    const now = Date().getTime();
    //obtener la distancia entre las fechas 
    let result = countDownDate - now;

    //calculos a dias-horas-minutos-segundos
    let days = Math.floor(result /(1000 * 60 *60 *24));
    let hours = Math.floor((result %(1000 * 60 * 60))/(1000 *60 * 60));
    let minutes = Math.floor((result %(1000 * 60 * 60))/(1000 *60));





},1000);