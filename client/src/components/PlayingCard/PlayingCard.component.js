import React from "react";
const imageDict = {
	AC: "./Images/01_Ace_Clubs_100.png",
	AD: "./Images/01_Ace_Diamonds.png",
	AS: "./Images/01_Ace_Spades.png",
	AH: "./Images/01_Ace_Hearts.png",
	"2C": "./Images/02_Clubs.png",
	"2D": "./Images/02_Diamonds.png",
	"2H": "./Images/02_Hearts.png",
	"2S": "./Images/02_Spades.png",
	"3C": "./Images/03_Clubs.png",
	"3D": "./Images/03_Diamonds.png",
	"3H": "./Images/03_Hearts.png",
	"3S": "./Images/03_Spades.png",
	"4C": "./Images/04_Clubs.png",
	"4D": "./Images/04_Diamonds.png",
	"4H": "./Images/04_Hearts.png",
	"4S": "./Images/04_Spades.png",
	"5C": "./Images/05_Clubs.png",
	"5D": "./Images/05_Diamonds.png",
	"5H": "./Images/05_Hearts.png",
	"5S": "./Images/05_Spades.png",
	"6C": "./Images/06_Clubs.png",
	"6D": "./Images/06_Diamonds.png",
	"6H": "./Images/06_Hearts.png",
	"6S": "./Images/06_Spades.png",
	"7C": "./Images/07_Clubs.png",
	"7D": "./Images/07_Diamonds.png",
	"7H": "./Images/07_Hearts.png",
	"7S": "./Images/07_Spades.png",
	"8C": "./Images/08_Clubs.png",
	"8D": "./Images/08_Diamonds.png",
	"8H": "./Images/08_Hearts.png",
	"8S": "./Images/08_Spades.png",
	"9C": "./Images/09_Clubs.png",
	"9D": "./Images/09_Diamonds.png",
	"9H": "./Images/09_Hearts.png",
	"9S": "./Images/09_Spades.png",
	"10C": "./Images/10_Clubs.png",
	"10D": "./Images/10_Diamonds.png",
	"10H": "./Images/10_Hearts.png",
	"10S": "./Images/10_Spades.png",
	JC: "./Images/11_Jack_Clubs.png",
	JD: "./Images/11_Jack_Diamonds.png",
	JH: "./Images/11_Jack_Hearts.png",
	JS: "./Images/11_Jack_Spades.png",
	QC: "./Images/12_Queen_Clubs.png",
	QD: "./Images/12_Queen_Diamonds.png",
	QH: "./Images/12_Queen_Hearts.png",
	QS: "./Images/12_Queen_Spades.png",
	KC: "./Images/13_King_Clubs.png",
	KD: "./Images/13_King_Diamonds.png",
	KH: "./Images/13_King_Hearts.png",
	KS: "./Images/13_King_Spades.png",
};

export default function PlayingCard(props) {
	return (
		<img
			className={`fade-in-fast playingCard ${props.player}`}
			alt="playing card"
			src={imageDict[props.shortString]}
		></img>
	);
}
