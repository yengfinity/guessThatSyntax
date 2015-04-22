/******* MODEL *********/

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

	//letting console know card started
  	console.log('Card instantiated');

}

//Presenting Data
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

// random element from array
function getRandom(array){
	var rand = Math.random();
	rand *= array.length;
	var index = Math.floor(rand);
	return array[index];
}


//display random card onload
window.onload = function() {
	//Declare new card objects 
	var cardsArray = [
		new Card('HTML', 'html', 'Stands for Hyper Markup Language', 'img/profile.png', 'card1'),
		new Card('Head', 'html', 'Needed include external style sheets and scripts', 'img/profile.png', 'card2'),
		new Card('Body', 'html', 'This is needed to make markup show up', 'img/profile.png', 'card3'),
		new Card('Footer', 'html', 'Bottom tag to include info', 'img/profile.png', 'card4')
	];

	//Get the Element
	var listing = document.getElementById("cardList");

	//looping through arrays Printing Array to HTML
	cardsArray.forEach(function(card) {
	  listing.innerHTML += "<li class='card cardStyle' id=' " + card.cardId + " ' >" + card.toLi() + "</li>"    
	});
	
	//Printing the random array to HTML 
	document.getElementById("myRandCard").innerHTML = getRandom(cardsArray).toLi();

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







