/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

var doubleArray;

function doubleArray(arr){
  var doubleArray = [];
  for (i=0; i < arr.length; i++){
    doubleArray.push(arr[i]*2)
  }
  return doubleArray;
}


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;

function sumArrays(arr,arr2){
  var total =0;
  for (i=0;i<arr.length;i++){
    total += arr[i];
  }
  for (i=0;i<arr2.length;i++){
    total += arr2[i];
  }
  return total;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;
function stringCount(str){
  for (i=0;i<str.length;i++){
    return str.length
  }
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;
function arrayLength(arr){
  for (i=0;i<arr.length;i++){
    return arr.length
  }
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;
function countAll(arr){
  var total = 0;
  for (i=0;i<arr.length;i++){
    total += arr[i];
  }
  return total;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;
function countStrings(arr){
  var strLengths = [];
  for (i=0;i<arr.length;i++){
    strLengths.push(arr[i].length);
  }
  return strLengths;
}


/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;
function countAllStrings(arr){
  var totalLength = 0;
  for (i=0;i<arr.length;i++){
    totalLength += arr[i].length;
  }
  return totalLength
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;
function convertToArray(obj){
  return Object.values(obj)
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;
function objectSize(obj){
  return Object.keys(obj).length;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;
function createZeroFilledArray(num){
  var arr = [];
  for (i = 0;i < num;i++){
    arr.push(0)
  }
  return arr
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;
function poppedArray(arr){
  arr.pop();
  return arr
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;
function splitString(str){
  for (i=0;i<str.length;i++){
    var arr = str.split('')
  }
  return arr
}
/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;
function lengthOfLast(arr){
  return arr.pop().length
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;
function sumBelowTen(arr){
  sum = 0;
  for(i=0;i<arr.length;i++){
    sum = arr[i] + arr[i+1]
    if (arr[i+1] === undefined){
      arr[i+1] = 0
    }
  if (sum < 10){
    return sum
  }
  }
}
/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;
function moreThanTenLetters(arr){
  var count = 0;
  for (i=0;i<arr.length;i++){
    if (arr[i].length > 10){
      count++
    }
  } return count
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll;
function multiplyAll(arr){
  var product = 1;
  for (i=0;i<arr.length;i++){
    product = product * arr[i]
  } return product
}
/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;
function sumAllPositive(arr){
  var sum = 0;
  for (i=0;i<arr.length;i++){
    if (i > 0){
      sum = sum + arr[i];
    }
  } return sum
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;
function stringCountBelowThree(arr){
  var newArr = [];
  for (i=0;i<arr.length;i++){
    if (arr[i].length <= 3){
      newArr.push(arr[i])
    }
  } return newArr.length
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;
function countObjects(arr){
  return arr.length
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;
function getObjectKeys(obj){
  return Object.keys(obj)
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;
function getObjectValues(obj){
  return Object.values(obj)
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;
function makeObject(key,value){
  obj = {
    [key]: value
  }
  return obj
} 


/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;
function makeObjectReverse(value, key){
  obj = {
    [key]: value
  }
  return obj
}
/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;
function tupleToObject(arr){
  obj = {
    [arr[0]]: arr[1]
  }
  return obj
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;
function tupleToObjectReverse(arr){
  obj = {
    [arr[1]]: arr[0]
  }
  return obj
}
/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;
function strToKeys(arr){
  obj = {};
  for (i=0;i<arr.length;i++){
    obj[arr[i]] = 0;
  }
  return obj
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;
function getValues(obj){
  return Object.values(obj)
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;
function getKeys(obj){
  return Object.keys(obj)
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;
function objectToArray(obj){
  var arr = Object.entries(obj)
  return arr
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;
function arrayToObject(arr){
  var obj = {};
  for (i=0;i<arr.length;i++){
    obj[arr[i]] = false
  }
  return obj
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;
function arraysToObject(arr,arr2){
  var obj = {};
  for (i=0;i<arr.length;i++){
    obj[arr[i]] = arr2[i]
  }
  return obj
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;
function objectsToTuples(obj,obj2){
  var newObj = Object.assign(obj, obj2)
  return Object.entries(newObj)
}
/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;
function mapArrayValues(arr){
  var obj = {};
  for (i=0;i<arr.length;i++){
    obj[arr[i]] = true;
  }
  return obj
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;
function mapStringCounts(arr){
  var obj = {};
  for (var i=0;i<arr.length;i++){
    if (arr[i].length >= 5){
      obj[arr[i]] = true;
    } else {
      obj[arr[i]] = false;
    }
  }
  return obj
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;
function arrayToObjectNums(arr){
  var obj = {};
  for (var i = 0;i<arr.length;i++){
    obj[arr[i]] = true;
  }
  return obj
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;
function stringToKeys(str){
  var obj = {};
  var newStr = str.split('');
  for (var i = 0; i<newStr.length;i++){
    obj[newStr[i]] = true;
  }
  return obj
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;
function charCountMap(arr){
  var obj = {};
  for (var i = 0; i < arr.length; i++){
    obj[arr[i]] = arr[i].length
  }
  return obj
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}    note: I believe it means array
 * @return {Object}
 */
var frequencyMap;
function frequencyMap(arr){
  var obj = {};
  var count = 1;
  arr.sort();
  for (var i = 0;i<arr.length;i++){
    if (arr[i] !== arr[i+1]){
      obj[arr[i]] = count;
      count = 1;
    } else {
      obj[arr[i]] = count++;
    }
  }
  return obj
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;
function tupleConvertToObject(arr){
  var obj = {};
  for (var i = 0;i<arr.length;i++){
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
