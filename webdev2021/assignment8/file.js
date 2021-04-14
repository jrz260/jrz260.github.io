var link = document.getElementById('clickx'); 
    link.onclick = getnumberx;

function getnumberx() {
        var minNumber = 1;
        var maxNumber = 11;
        var randomnumberx = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        $('#resultx').html(randomnumberx);
        return false;}

var link = document.getElementById('clicky'); 
    link.onclick = getnumbery;

function getnumbery() {
        var minNumber = 1;
        var maxNumber = 11;
        var randomnumbery = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
        $('#resulty').html(randomnumbery);
        return false;}






const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown(){
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	seconds = seconds < 10 ? '0'+seconds:seconds;
	countdownEl.innerHTML = `${minutes}:${seconds}`;
	time--;
	time = time < 0 ? 0:time;}



