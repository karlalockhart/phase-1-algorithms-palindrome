/*
function reserved(word){
  // 'abc' => 'cba'
  // 'mom' => 'mom'
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reservedWord = reversedWordArray.join("");

  return reverseWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reserve(word)
  //if input is same as reverse input,
  if (word === reservedWord){
   //return true
    return true
  }  
   //else,
  //return false 
  else {
    return false
  }
}

/* 
If function is Palindrome (i.e. mom, racecar), return true
else, return false

make a function that returns true if word is a palindrome, if not, return false.
That means if the word is the same as the word in reverse, I should return true.

  Add your pseudocode here
if the word is the same as the word in reverse, I should return true
reverse the string

if input is same as reverse input, 
  return true
else,
  return false

*/

/*
  Add written explanation of your solution here
*/

/*
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
*/


function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  I need to make a isPalindrome function that returns either true or false. When
  the input string is the same forwards and backwards, I should return true. That
  means that if the input string is the same after I reverse it, I should return
  true. For instance, "mom" in reverse is also "mom", and "racecar" in reverse is
  also "racecar", so my solution should return true for these cases. "hi" in
  reverse is "ih", so my solution should return false for this case.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
