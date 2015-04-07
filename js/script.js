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
	"<br/> Description: " + this.desc;

};

//Print the short version of printMe before click
Card.prototype.printMeShort = function() {
	//Print Cards to HTML
	var element = document.getElementById(this.cardId);
	return element.innerHTML = 
	'<img src=\" ' + this.pic + '\">' +
	"<br/><h3>" + this.cardName + "</h3>" +
	"<button> Button Here </button>";

};

//Declare new card objects
var card1 = new Card('HTML', 'html', 'Stands for Hyper Markup Language', 'img/profile.png', 'card1');
var card2 = new Card('Head', 'html', 'Needed include external style sheets and scripts', 'img/profile.png', 'card2');;
var card3 = new Card('Body', 'html', 'This is needed to make markup show up', 'img/profile.png', 'card3');;
var card4 = new Card('Footer', 'html', 'Bottom tag to include info', 'img/profile.png', 'card4');;

//Print selected card to div
card1.printMe();
card2.printMe();
card3.printMe();
card4.printMe();


//display random card onload
window.onload = function() {
  doSomethingElse();
};

function addHandler(card){
    document.getElementById(this).onclick = card.printMe();
    };


//loop to close which ever boxes were added in array
var boxArray = ['box1','box2','box3', 'box4'];
window.addEventListener('mouseup', function(event){
	for(var i=0; i < boxArray.length; i++){
	    var box = document.getElementById(boxArray[i]);
	    if(event.target != box && event.target.parentNode != box){
		   box.style.display = 'none';
	    }
	}
});

//Toggle between 2 classes:
// function toggleClass(el){
// 	if(el.className == "class1"){
// 		el.className = "modal";
// 	} else if(el.className =="modal") {
// 		el.className = "class1";
// 	} else {
// 		el.className = "modal";
// 	}
// }
