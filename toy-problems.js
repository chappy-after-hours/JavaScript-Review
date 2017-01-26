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
  var letter = "a";
  var num = 1;
  var sortedArr=[];
  for (var i = 0; i < arr.length; i++) {
    if (arr.includes(letter+num)) {
      sortedArr.push(letter.concat(num));
      if (letter === "c") {
        letter = "a";
        num++;
        // i++;
      }else {
        letter = String.fromCharCode(letter.charCodeAt()+1);
        // i++;
      }
    }
  }
  return sortedArr;
}


// function sortArr(arr) {
//   var newArr = [];
//   var char = "a";
//   var num = 1;
//   if (arr.includes()) {
//
//   }
// }

/////////////////////////////

// function sortArr(arr) {
//   var countObj = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (!countObj[arr[i]]) {
//       countObj[arr[i]] = 1;
//     } else {
//       countObj[arr[i]]++;
//     }
//   }
//   return countObj;
// }

/////////////////////////

// function sortArr(arr) {
//   var sortedArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (sortedArr.length === 0) {
//       console.log(sortedArr, 1);
//       sortedArr.push(arr[i]);
//       i++;
//     }else {
//       var let1 = arr[i][0];
//       var num1 = arr[i].slice(1);
//       for (var j = 0; j < sortedArr.length;j++) {
//         var let2 = sortedArr[j][0];
//         var num2 = sortedArr[j].slice(1);
//
//         if (sortedArr.length >= 3 && num1 > num2 && num1 < num3) {
//           var let3 = sortedArr[j+1][0];
//           var num3 = sortedArr[j+1].slice(1);
//           sortedArr.splice(j+1, 0, arr[i]);
//           i++;
//         } else if (sortedArr.length >= 3 && num1 === num2 && num1 < num3 && let1 > let2) {
//           sortedArr.splice(j+1, 0, arr[i]);
//           i++;
//         } else if (sortedArr.length >= 3 && num1 > num2 && num1 === num3 && let1 < let3) {
//           sortedArr.splice(j+1, 0, arr[i]);
//           i++;
//         }
//
//         if (sortedArr.length===2 && num1 > num2) {
//           sortedArr.push(arr[i]);
//           i++;
//         }else if (sortedArr.length===2 && num1 < num2) {
//           sortedArr.unshift(arr[i]);
//           i++;
//         } else if (sortedArr.length===2 && num1 === num2 && let1 > let2) {
//           sortedArr.push(arr[i]);
//           i++;
//         }else {
//           sortedArr.unshift(arr[i]);
//           i++;
//         }
//       }
//     }
//   }
//   return sortedArr;
//}

sortArr(["a1", "a2","a3","a4","a5", "b1", "b2","b3","b4","b5", "c1", "c2", "c3","c4","c5"]);


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

findMissing([1,2,3,4,5,6],[6,1,4,2,3])



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longestWords(sent) {
  var sentArr = sent.split(' ');
  var longest = [];
  for (var i = 0; i < sentArr.length; i++) {
    if (longest.length ===0) {
      longest.push(sentArr[i]);
    }else if (longest[0].length < sentArr[i].length) {
      longest = [];
      longest.push(sentArr[i])
    }else if (longest[0].length === sentArr[i].length && longest[0].toLowerCase() !== sentArr[i].toLowerCase()) {
      longest.push(sentArr[i]);
    }
  }
  return longest;
}




/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multipleSum(mult1, mult2, num) {
  var multiples = [];
  for (var i = 1; i< num;i++) {
    if (i % mult1 === 0 || i % mult2 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce(function(a,b){return a+b});
}

multipleSum(3,5,1000);

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function removeDup(str) {
  var arr = str.split('');
  var dup = {};
  for (var i = 0; i < arr.length; i++) {
    if (!dup[arr[i]]) {
      dup[arr[i]] = 1;
    } else {
      arr.splice(i,1);
      i--;
    }
  }
  console.log(dup);
  return arr.join('');
}



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

sum = function (x,y) {
  if(y) {
    return x + y;
  } else {
    return function(y){
      return x+y
    }
  }
}
