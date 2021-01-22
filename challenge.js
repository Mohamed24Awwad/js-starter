"use strict"

/*  
//       _                    ____            _       _     _____         _        
//     | | __ ___   ____ _  / ___|  ___ _ __(_)_ __ | |_  |_   _|_ _ ___| | _____ 
//  _  | |/ _` \ \ / / _` | \___ \ / __| '__| | '_ \| __|   | |/ _` / __| |/ / __|
// | |_| | (_| |\ V / (_| |  ___) | (__| |  | | |_) | |_    | | (_| \__ \   <\__ \
//  \___/ \__,_| \_/ \__,_| |____/ \___|_|  |_| .__/ \__|   |_|\__,_|___/_|\_\___/
//                                            |_|                        
// */

//Sheet 01 
//Question #1
// what is an Event Loop ?
/**
 * Its A process to facilitates the main process of call stack and 
  constantly checks whether the call stack is empty or not , if it empty then New Function is added from event queue and if not so the current function call still processed  
 */
//----------------------------------------------------------------
/** #2
   How do you add an element at the begining of an array? How do
   you add one at the end?
 */
//Answer 
let newArr = [1, 2, 3, 'Mohamed'];
//to add an element At the beginning of An array we use .unshift() method 
console.log(newArr.unshift('Hey !'));
console.table(newArr);
// To add an element at the end of an array alway using .push() method
console.log(newArr.push(`i'm the last element`));
console.log(newArr);


/**
 * =========================================================================
 * ============================== Question 02 ==============================
 * =========================================================================
 */

/**
 * 1- code snippet 01
 output will be (3) because of function invocation (inner) can acess the variable b in global scope with value 1 then with increament become 2 after that assign new value to it and becomes 3
 */

/**
  * 2-Code snippet 02
  output will be (0 1 2 3 4 ) after time interval with 1 second so the excusion will be a sequence of iteration between the for loop and the time delay with setTimeout Function
  */

/**
 * 3-Code Snippet 03
 Output will be ['baz] as we clear the array's length befor pushing a new string to last index
 */

/**
 * 4-Code Snippet 04
 Output will be (1  hello true) it's a reguler for loop
*/

/**
 * 5-Code Snippet 05
 true
 [ [ 'carName', 'BMW' ], [ 'carPrice', 100000 ] ] as The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value; and also the entries method gives an array of the given object within a string pairs [key and value].
 */

 
/**
 * =========================================================================
 * ============================== Question 03 ==============================
 * =========================================================================
 */

 //#1

 function sumObjectValues() {
   const objectNums = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
   console.log(Object.values(objectNums).reduce(function (result, num) {
      return result + num
   }, 0));
}
sumObjectValues();
//============================================================================

// #2
  

























//======================================= #7 ====================================
function resversArr() {
   arr = [1, 2, 3, 4, 5];
   return console.log(arr.reverse());
}
resversArr();
//========================================= #8 ==================================

//#8
function objToArr() {
   let car = { a: 1, b: 2, c: 3, d: 4 }
   return (console.log(Object.entries(car)));
};
objToArr();

//======================================= Bonus ==================================

//====== # 01 









//====== #02 
const add =()=>{var a =[2,3];console.log((a[0]+a[1]));}
add();
//===========================================================================

//====== #03 

var arr =['john', 'mohamed', 'salah'];
let isJhonExist = console.log(`It's`,arr.includes('john') );