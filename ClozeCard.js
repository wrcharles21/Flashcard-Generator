

function ClozeCard(text, cloze){
	this.cloze=cloze;
	this.fullText=text;
	this.partial=this.fullText.replace(this.cloze,'____');
};

var president = new ClozeCard('George Washington was the  President of the United States?', 'George Washington');
	console.log(president.fullText);
	console.log(president.cloze);
	console.log(president.partial);

var sixteenthPresident = new ClozeCard('Abraham Lincoln was the 16th President of the United States?', 'Abraham Lincoln');
	console.log(sixteenthPresident.fullText);
	console.log(sixteenthPresident.cloze);
	console.log(sixteenthPresident.partial);

var currentPresident = new ClozeCard('Donald Trump is the curent President of the United States?', 'Donald Trump');
	console.log(currentPresident.fullText);
	console.log(currentPresident.cloze);
	console.log(currentPresident.partial)




module.exports = ClozeCard;
