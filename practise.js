//================= fibonacci Series =====================

// 1,1,2,3,4,5,6
//Every number is equavlint to the sum of the two previous number 

var num1 = 0 ;
var num2 = 1 ;
var result = num2;

for(var i = 1 ; i < 10 ; i++){
   console.log(result);
   result = num1 + num2 ;
   num1 = num2 ;
   num2 = result
}
