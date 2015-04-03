//Prototype patter:
var Card = function (cardName, family, desc, pic, cardId) {
	this.cardName = cardName;
	this.family = family;
	this.desc = desc;
	this.pic = pic;
	this.cardId = cardId;
	// this.printToHtml = printMe; --> this is from functions only

  	console.log('Card instantiated');

}

//To print to ID of cardId method
Card.prototype.printMe = function() {
	//Print Cards to HTML
	var element = document.getElementById(this.cardId);
	return element.innerHTML = 
	'<img src=\" ' + this.pic + '\">' +
	"<br/><h3>" + this.cardName + "</h3>" +
	"<br/> Family is: " + this.family +
	"<br/> Description: " + this.desc ;

};

//Declare new card objects
var card1 = new Card('HTML', 'html', 'Stands for Hyper Markup Language', 'img/profile.png', 'card1');
var card2 = new Card('Head', 'html', 'Needed to styles and scripts', 'img/profile.png', 'card2');;
var card3 = new Card('Body', 'html', 'Needed to styles and scripts', 'img/profile.png', 'card3');;
var card4 = new Card('Footer', 'html', 'Bottom tag to include info', 'img/profile.png', 'card4');;


function addHandler(){
    document.getElementById('card1').onclick = card1.printMe();
    };

//Print selected card to div
// card1.printMe();
// card3.printMe();
