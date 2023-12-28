const repeatString = function(word, num) {
   if (num < 0) {
      return "ERROR"
   }
   let output = "";
   let i = 0;
   while (i < num) {
      output += word;
      i++;
   }
   return output
};

// Do not edit below this line
module.exports = repeatString;
