/*
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, 
our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values 
of the strings as explained above multiplied by the position of that string in the list. 
For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] 
because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. 
Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.
*/


// Solution

function wordValue(a) {
  return a.map((s,i) => s.replace(/\s/g, '')
                         .split('')
                         .map(b => (b.charCodeAt()-96))
                         .reduce((acc, cur) => (acc+=cur),0)*(i+1));
}

// or

function wordValue(a) {


  let returnArray =[], finalArray = [];
   
   for(let k = 0; k < a.length ; k++){
      let word = a[k]
      let num= 0
      for(let i = 0; i < word.length; i++){
         if( word[i] !== ' '){
               num += word[i].codePointAt() -96     
         }
      }
  returnArray.push(num)
   }
      
      for(let j =0; j < returnArray.length; j++){
         finalArray.push(returnArray[j] * (j + 1))
      }
     return finalArray;
  }