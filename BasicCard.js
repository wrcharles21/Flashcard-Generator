
function BasicCard(front, back){
	this.front=front;
	this.back=back;
};


var president = new BasicCard('Who was the first President of the United States?', 'George Washington');
	console.log(president.front);
	console.log(president.back);

var sixteenthPresident = new BasicCard('Who was the 16th President of the United States?', 'Abraham Lincoln');
	console.log(sixteenthPresident.front);
	console.log(sixteenthPresident.back);

var currentPresident = new BasicCard('Who is the curent President of the United States?', 'Donald Trump');
	console.log(currentPresident.front);
	console.log(currentPresident.back);

module.exports = BasicCard;