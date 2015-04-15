//Prototype patter:
var Card = function (cardName, family, desc, pic, cardId) {
	this.cardName = cardName;
	this.family = family;
	this.desc = desc;
	this.pic = pic;
	this.cardId = cardId;

	this.properties = ['cardId', 'family'];
	// this.printToHtml = printMe; --> this is from functions only

	this.element = function() {
		return document.getElementById(this.cardId);
	}.bind(this);
  	console.log('Card instantiated');

}


//To print to ID of cardId method
Card.prototype.toLi = function() {
	
	// var htmlString = this.properties.reduce(function(html, property) {
	// 	return html + '<span>' + this[property] + '</span>';
	// }.bind(this), '');

	// this.element().innerHTML = htmlString;

	//Print Cards to HTML
	return '<img src=\" ' + this.pic + '\">' +
	"<br/><h3>" + this.cardName + "</h3>" +
	"<br/> Family is: " + this.family +
	"<br/> Description: " + this.desc;
};

//Print the short version of toLi before click
Card.prototype.toLiShort = function() {
	//Print Cards to HTML
	var element = document.getElementById(this.cardId);
	return element.innerHTML = 
	'<img src=\" ' + this.pic + '\">' +
	"<br/><h3>" + this.cardName + "</h3>" +
	"<button> Button Here </button>";

};

//Declare new card objects
var card1 = new Card('HTML', 'html', 'Stands for Hyper Markup Language', 'img/profile.png', 'card1');
var card2 = new Card('Head', 'html', 'Needed include external style sheets and scripts', 'img/profile.png', 'card2');
var card3 = new Card('Body', 'html', 'This is needed to make markup show up', 'img/profile.png', 'card3');
var card4 = new Card('Footer', 'html', 'Bottom tag to include info', 'img/profile.png', 'card4');


//use script to generate the li's with these data
var cards = [card1, card2, card3, card4];

var listing = document.getElementById("cardList");

//looping through arrays
cards.forEach(function(card) {
  listing.innerHTML += "<li class='card cardStyle' id=' " + card.cardId + " ' >" + card.toLi() + "</li>"    
});

//looping through objects
var obj = {a: '1', b: '2'}
Object.keys(obj).forEach(function(key) {
	console.log(key, obj[key]);
})

//Card Random Generator 

var cardArray = [card1, card2, card3, card4];


function myRand(){
	var rand = Math.random();
	rand *= cardArray.length;
	return Math.floor(rand);
}

//display random card onload
window.onload = function() {
  document.getElementById("myRandCard").innerHTML = myRand();
};

// function addHandler(card){
//     document.getElementById(this).onclick = card.toLi();
//  };

// function box1(){
// 	// document.getElementById('box1').style.display='block';
// }

// function box2(){
//  	document.getElementById('box2').style.display='block';
// }

// function box3(){
//  	document.getElementById('box3').style.display='block';
// }



//loop to close which ever boxes were added in array
// var boxArray = ['box1','box2','box3','box4'];
// window.addEventListener('mouseup', function(event){
// 	for(var i=0; i < boxArray.length; i++){
// 	    var box = document.getElementById(boxArray[i]);
// 	    if(event.target != box && event.target.parentNode != box){
// 		   box.style.display = 'none';
// 	    }
// 	}
// });







