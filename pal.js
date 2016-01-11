"use strict";
function getUserInput(message) {
    return prompt(message);
}

function palindromeCheck() {
    var phrase;
    var cleanPhrase;
    var toArray;
    var revPhrase; 

    phrase = getUserInput("Enter Phrase.");
    cleanPhrase = phrase.replace(/\s/g && /\W/g, "").toLowerCase();
    toArray = cleanPhrase.split("");
    revPhrase = toArray.reverse().join("");

    if (cleanPhrase === revPhrase) {
        console.log("\"" + phrase + "\"" + " is a palindrome.");
        return true;
    }
    else {
        console.log("\"" + phrase + "\"" + " is not a palindrome.");
    }
}

palindromeCheck();
 