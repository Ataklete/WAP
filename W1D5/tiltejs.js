

{/* /* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) { 
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

// /* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
 

    // <!-- 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.   -->
 
    function isVowel(letter) {

        var vowels = ["a", "e", "i", "o", "u"];
    
        for(var i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
            if(letter === vowels[i]){// Use array indexing instead
                return true;
             }
        }
    
        return false;// This is after the loop
    
    }
    console.log("Expectid output of isvowel(a) is true  "  + myFunctionTest(true, isVowel("a") ));
 

// <!-- 4.Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. -->
// 
    function sum(array){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum  += array[i];        
        }
        return sum;
    }
    
    function multiply(array){
        let product = 1;
        for(let num in array){
            product *= array[num];
        }
        return product;
    }
  
    console.log("Expectid output of sum(1,2,3,4) is 10  "  + myFunctionTest(10, sum([1,2,3,4]) ));
    console.log("Expectid output of multiply(1,2,3,4) is 24  "  + myFunctionTest(24, multiply([1,2,3,4]) ));
   
// <!-- 5.Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". -->
 
    function reverse(string){
        let result = "";
        for (let i = string.length-1; i >= 0 ; i--) {
            result += string[i];        
        }
        return result;
    }
    console.log("Expectid output of reverse(ratset gaj) is ratset gaj  "  + myFunctionTest("ratset gaj", reverse("jag testar") ));     
  
// <!-- 6.Write a function findLongestWord() that takes an array of words and returns the length of the longest one. -->

    function findLongestWord(arrayOfWords){
        let lengthOfLongestWord = 0;
        for (let i = 0; i < arrayOfWords.length; i++) {
            let len = arrayOfWords[i].length;
            if(len > lengthOfLongestWord){
                lengthOfLongestWord = len;
            }
                    
        }
        return lengthOfLongestWord;
    }
    console.log("Expectid output of findLongestWord(ratset gaj) is 6  "  + myFunctionTest(6, findLongestWord(["ratset", "gaj"]) ));  
  
// <!-- 7. Write a function filterLongWords() that takes an array of words and an integer i 
    // and returns a new array containing only those words that were longer than i characters. -->

    
    let filterLongWords = function(array, i){
        var newArray = [];
        array.forEach(function(element){
        if(element.length>i){
        newArray.push(element)
        };
        });
        return newArray;
        }
     console.log("Expectid output of findLongestWords(ratset gaj) is set  "  + 
     myFunctionTest(JSON.stringify(["ratset"]),JSON.stringify(filterLongWords(["ratset" , "gaj"], 3))));  
   
// <!-- 8.Modify the jsfiddle on the map/filter/reduce slide as follows:
// a) multiply each element by 10; 
// b) return array with all elements equal to 3; 
// c) return the product of all elements; -->

   const a = [1,3,5,3,3]; 
    const b = a.map(function(elem, i, array) {
    return elem * 10;
})
console.log("Expectid output of map([1,3,5,3.3]) is 10,30,50,30,30  "  + myFunctionTest(JSON.stringify([10,30,50,30,30]), JSON.stringify((b))));

const c = a.filter(function(elem, i, array){
  return elem !== 3;});

  
  console.log("Expectid output of filter([1,3,5,3.3]) is 1,5 "  + myFunctionTest(JSON.stringify([1,5]), JSON.stringify((c))));
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});

    console.log("Expectid output of reduce([1,3,5,3.3]) is 135  "  + myFunctionTest(135, (d)));  


}