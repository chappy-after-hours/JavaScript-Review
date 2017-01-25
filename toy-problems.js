/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
function plusOneSum(arr) {
  arr = arr.map(function(num){return num+1});
  return arr.reduce((prev, cur) => prev + cur);
}


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/


function flatten(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      console.log(arr[i])
      newArr.push(arr[i]);
    } else {
      for (var j = 0; j < arr[i].length; j++) {
        if (!Array.isArray(arr[i][j])){
          console.log(arr[i][j])
          newArr.push(arr[i][j]);
        }
        else {
          for (var k = 0; k < arr[i][j].length; k++) {
            console.log(arr[i][j][k])
            newArr.push(arr[i][j][k]);
          }
        }
      }
    }
  }
  return newArr;
}

/* found online - Recursion.

function flatten(items) {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}
undefined
flatten([1,2,[3,4,[5,6,[7,8,[9,11,[123]]]]]])
*/


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
function sortArr(arr) {
  var sortedArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (sortedArr.length = 0) {
      sortedArr.push(arr[i]);
    }else {
      var1 = arr[i][0];
      var2 = arr[i].slice(i);
      for (var j = 0; j < sortedArr.length;j++) {
        var a = sortedArr[j][0];
        var b = sortedArr.slice(j);
        var c = sortedArr[j+1][0];
        var d = sortedArr[j+1].slice(j);

      }
    }
  }
  loop through given array
    loop through answer array

}


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
function findMissing(arr1,arr2) {
  var countObj1 = {};
  var countObj2 = {};
  for (var i = 0; i < arr1.length; i++) {
    if (!countObj1[arr1[i]]) {
      countObj1[arr1[i]] = 1;
    } else {
      countObj1[arr1[i]]++;
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (!countObj2[arr2[j]]) {
      countObj2[arr2[j]] = 1;
    } else {
      countObj2[arr2[j]]++;
    }
  }
  for(prop in countObj1) {
    if (countObj2[prop] && countObj2[prop] !== countObj1[prop]) {
      return prop;
    } else {
      if (!countObj2[prop]) {
        return prop;
      }
    }
  }
}




/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
