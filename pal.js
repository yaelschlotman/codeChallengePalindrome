"use strict";
function getUserInput(message) {
	return prompt(message); 
}

//function getPhrase() {
//	var phrase = getUserInput("Enter Phrase.");
//	console.log("phrase");
  //  return phrase;	
//}
 
//getPhrase();

function showLowerCase( ) {
  	var term = getUserInput("Enter Phrase.");
  	var lowercase = term.toLowerCase();
  	console.log(term);
    console.log(lowercase);
  	return lowercase;
}

showLowerCase(); 
//getPhrase();
//showLowerCase();

//function palindromeCheck() {
	//get term, convert to lower case, reverse term, compare equality.
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