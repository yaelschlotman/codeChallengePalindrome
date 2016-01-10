"use strict";
function getUserInput(message) {
	return prompt(message); 
}

function getPhrase() {
	var phrase = getUserInput("Enter Phrase.");
	console.log("phrase");
	return phrase;	
}

//getPhrase();

function showLowerCase( ) {
	var term = getUserInput("Enter Phrase.");
	var lowercase = term.toLowerCase();
	console.log(term);
	console.log(lowercase);
	return lowercase;
}

// showLowerCase(); 

function showElimSpace() {
	var term = getUserInput("Enter Phrase.");
    var lowercase = term.toLowerCase();
	var elimSpace = lowercase.replace(/\s/g, "");
	console.log(term);
	console.log(lowercase);
	console.log(elimSpace);
}

//showElimSpace();

function showElimPunct() {
	var term = getUserInput("Enter Phrase.");
    var lowercase = term.toLowerCase();
	var elimSpace = lowercase.replace(/\s/g, "");
	var elimPunct = elimSpace.replace(/\W/g, "");
	console.log(term);
	console.log(lowercase);
	console.log(elimSpace);
	console.log(elimPunct);

}

//showElimPunct();

function showElimSpacePunct() {
	var term = getUserInput("Enter Phrase.");
    var lowercase = term.toLowerCase();
	var elimSpacePunct = lowercase.replace(/\s/g && /\W/g, "");
	console.log(term);
	console.log(lowercase);
	console.log(elimSpacePunct);
}

showElimSpacePunct();

//function palindromeCheck() {
//  reverse term, compare equality.
//   var term = getTerm().toLowercase;
//	var clean = 
//	if (term === reverse) {
//		log("Yes, this is a palindrome.")
//		return true;
//	} else{
//		log("This is not a palindrome.")
//		return false;
//	};
//}