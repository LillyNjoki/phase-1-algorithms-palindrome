// function isPalindrome(word) {
//   // Write your algorithm here
// }

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input String
  return word.split("").reverse().join("") === word
}


  // Write your algorithm here

// reverse the input's string
/*
  Add your pseudocode here
*/
// Palindrome means that first half of the words are the same as the last half of the word in reverse
// if the string is a palindrome, I should return true else return false


/*
  Add written explanation of your solution here
*/
// a function isPalindrome will has a single argument of string type
// the function should return true if the string is a palindrome
// else return false if it is not a palindrome
// if the a word reads the same forward and backwards, it is a palindrome
// madam === madam //true
// rotor === rotor//true
// god === god //false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
