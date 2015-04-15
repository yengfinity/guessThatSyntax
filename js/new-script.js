var moreInfoButton = document.getElementById("moreInfoButton");
var hideMe = document.getElementById("hideMe");
var flipper = document.getElementById("my-flipper");
var flipToFront = document.getElementById('flipToFront');
var backMoreInfo = document.getElementById('backMoreInfo');

var card1 = document.getElementById('card1');

var box1 = document.getElementById('box1');


moreInfoButton.addEventListener("click", function() {
	flipper.classList.toggle("flipped");
});

flipToFront.addEventListener("click", function() {
	flipper.classList.toggle("flipped");
});

var hideMe = document.getElementById('hide-me');

hideMe.addEventListener('click', function(){
	box1.classList.toggle('open');
});

backMoreInfo.addEventListener('click', function(){
	box1.classList.toggle('open');
});



card1.addEventListener("click", function(){
	card1.onload = card1.printeMe();
});

