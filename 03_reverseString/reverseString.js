const reverseString = function(word) {
   // if the string can't be reversed in place you have to change the string to an array then reverse the array and then return it as a string h e l l o -> iterate backwards and make a string "o l l e h" 
   let arr = [];
   for (let i = 0; i < word.length; i++) {
      arr.push(word.charAt(i));
    } //end for 
    //console.log(arr);
    newWord = "";
    for (let index = arr.length - 1; index >= 0; index--) {
      const element = arr[index];
      newWord+= element;
   }//end for 
   //console.log(newWord)
   return newWord
};
//reverseString("hello"); 
// Do not edit below this line
module.exports = reverseString;
