// //---------------------------------------------------------variables
// // var firstName , age;
// // firstName="mohamed";
// // age = 26;

// // var lastName = prompt('what is the last name ');
// // console.log(firstName, lastName)

// //----------------------------------------------------------Operators

// // var now =2020;
// // var yearBorn = 1994;
// // var fullAge =26;
// // var isFullAge = now - yearBorn < fullAge;
// // // console.log(isFullAge);
// // var firstName = 'john';
// // var age = 16;

// // if (age <13){
// //    console.log('john is a teen.');
// // } else if (age >=13 && age < 30){
// //     console.log('john is a man.');
// // } else if (age === 13){
// //    console.log('john is a boy')
// // }
// //AND = (&&) , OR = (||) ,NOT = (!)
// // Ternary OPerator

// // var firstName = 'john';
// // var  age = 18;

// // age != 20 ? console.log(firstName +''+ 'drinks juice')
// // : console.log(firstName +''+ 'drinks beer');

// // var drink = age <=
// //  20 ? 'juice' : 'beer';
// // console.log(drink);

// // //Switch Statement

// // var job ='programer';
// // var firstName = 'john';

// //  function oddNumbers(){
// //        return (result);
// //  }

// //  if (result=== 0){
// //    console.log( oddNumbers() + ' '+'is an even number ');
// //  }else if (result!=0){
// //     console.log(result +''+'is an odd number');
// //  }else{
// //    console.log('Nothing here ;)')};
// // for loop

// // for(index =1 ; index <=10 ; index++){
// //    console.log(`${index} : Hello there`);
// // }

// // stars patterns

// // for(i=0 ; i<=7 ; i++){
// //    for(j=0 ; j<i ; j++){
// //       document.write('*')
// //    }
// //    document.write("<br>")
// // }

// // For... in

// // let person={
// //    name:'Ahmed',
// //    age:26
// // }
// // for(let p in person){
// //    console.log(p);
// //    console.log(person[p]);
// // }

// // For ..... Of
// // let ages = [20,30,40];

// // for(let a of ages){
// //    console.log(a);

// // While Loop

// // let ages=20;
// // while(ages <=20){
// //   console.log('Older');
// //   ages++;
// // }
// // do{console.log(ages);
// //   ages++;}while(ages<10);

// // for (let i = 0; i <= 20; i++) {
// //   console.log(i);
// // }
// for(var i=1; i<=4; i++){
 //  console.log("*".repeat(i));
//   }

// // let SomBody = {
// //   name: "Ahmed",
// //   age: 26,
// //   address: "25 tahrir square",
// // };

// // for (let som in SomBody) {
// //   console.log(SomBody);
// // }

// // let address = ['21 st tahrir', 20, 30];
// // for (let add in address) {
// //   console.log(add)
// // }

// // let namePerson = 'ahmed';
// // switch (namePerson) {
// //   case (namePerson = 'ahmed'):
// //     console.log(`he is ${namePerson}`);
// //     document.write(`${namePerson}`)
// //   default:
// // }


// // for (i = 0; i <= 5; i++) {
// //   for (j = 0; j < i; j++) {
// //     document.write('&');
// //   }
// //   document.write('<br>');
// // }
// // for (i = 0; i <= 7; i++) {
// //   for (j = 0; j < i; j++) {
// //     document.write('*')
// //   }
// //   document.write("<br>")
// // }


// // let address = {
// //   name: 'ahmed',
// //   age: 20
// // }
// // for(let data in address ){
// //   console.log(data,address);
// // }



// // let adrry =[20,30];
// // for (let details of adrry){
// //   console.log(details)
// // }

// // for (i = 0 ; i < 10 ; i++){
// //    for(j = 0 ; j < i ; j++){
// //      for(k = 0 ; k < j ; k++){
// //       document.write('');
// //      }
// //    }
// //    document.write('<br>');
// // }

// // let drink = age >= 18 ? 'beer' : 'juice';
// // console.log(drink);


// // if(age >= 18){
// //    console.log('beer');

// // }else{
// //    console.log('another juice ');
// // // }
// // age>= 20? console.log('beer'):console.log('tomato');

// // var job = 'pro';

// // switch(job){
// //    case  job = 'tech':
// //       console.log("he is a teacher");
// //       break;
// //    case job = 'pro':
// //       console.log('he is a programmer');
// //       break;
// //    default:
// // }




// //   Functions 
// /**
//  * Regular Function 
//  */
// //  function calcAge(birthDate , currentDate ){
// //     return currentDate - birthDate;
// //  }
// // let result = calcAge(1994 , 2021);
// // console.log(result);
 
// // Arro Function 

// // let calcAge = (birthDate)=> 2021-birthDate;
// // console.log(calcAge(1994));

// // Function expression 

// // var wahtIsJob = function (job , firstName){
// //    switch(job){
// //       case 'teacher':
// //          return firstName + ' he is teacher';
// //       case 'pro':
// //          return firstName + ' he is programmer';
// //       default :
// //          return firstName + ' he is something else';
// //    }
// // }
// // console.log(wahtIsJob('teacher','john'));
// // // wahtIsJob('tech ', 'mohamed');

// //  Arrays


// // var names =['ahmed', 'mohamed','ali'];
// // var ages = new Array(23,26,28);

// // // mUTATE array = assign new value to it 


// // names[0]='ibram';
// // names[names.indexOf]=3;
// // console.table(names);


// // ARRAY With Ternary Operator 

// // var listArras = ['ahmed','moahmed',25];

// // // var result = listArras.indexOf('ahmed')=== 0? 'he is here':'he is not here';
// // // console.log(result);



// // listArras.push('ali');

// // console.log(listArras);

// // function tipCalculator(bill) {
// //    var presentage;
// //    if (bill < 50) {
// //       presentage = .2;
// //    } else if (bill >= 50 && bill < 200) {
// //       presentage = .15;
// //    } else {
// //       presentage = .1;
// //    }
// //    return presentage * bill;
// // }
// // console.log(tipCalculator(100));

// // var bills = [124, 48, 268];
// // var tips = [tipCalculator(bills[0]),
// //    tipCalculator(bills[1]),
// //    tipCalculator(bills[2])
// // ];
// // console.log(tips);


// // Objects
// //  var mohamed = {
// //      firstName : 'mohamed',
// //      lastName : 'AWWAD',
// //      id :12,
// //      birthyear:1994,
// //      family :['ali','aza','hager'],
// //      negbour :['ibrahim','emad'],
// //      calcAge : function (){     // Called Function Expresssion Here
// //        return 2021 - this.birthyear;
// //      }
// //  }; 
// //  console.log(mohamed.calcAge());


 
// //For Loop 
// var john = ['john' , 'mohamed','ahmed'];

// // for (var i = 0 ; i <john.length; i++){
// //    console.log(john[i]);}

// // while  // LOoping Backwards
// var i = john.length -1;
// while (i >= 0){
//    console.log(john[i]);
//    i--;
// }



// var b = 1;
// function outer (){
//    var b =2 ;
//    function inner(){
//       b++;
//       var b =3;
//       console.log(b)
//    }
//    inner();
// }
// outer();

// for (let i= 0 ; i <5 ; i++){
//    setTimeout(function(){
//       console.log(i);},i * 1000);
// }
// let arr = ['foo' , 'bar'];
//  arr.length=0;
// arr.push('baz');
// console.log(arr);

// function func(){
//    for (let key in arguments){
//       console.log(arguments[key]);
//    }
// }
// func(1,'hello',true);


// let car={
//    carName : 'BMW',
//    carPrice : 100000
// }
// console.log(car instanceof Object);
// console.log(Object.entries(car));


// for (let i = 0 ; i<5 ; i++){
//    console.log('*'.repeat(i));
// }

// // For each array method 
// var arr = [1,2,3,4];
// arr.forEach(function(val){ // callBack Function 
//    console.log(val);
// });



// var myError = new Error('This is an Error');
// console.log(myError.message);
// function sumObjectValues() {
//    const objectNums = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
//    console.log(Object.values(objectNums).reduce(function (result, num) {
//       return result + num
//    }, 0));
// }
// sumObjectValues();




// function resversArr() {
//    arr = [1, 2, 3, 4, 5];
//    return console.log(arr.reverse());
// }
// resversArr();

// function objToArr() {
//    let car = { a: 1, b: 2, c: 3, d: 4 }
//    return (console.log(Object.entries(car)));
// };
// objToArr();



// const add =()=>{var a =[2,3];console.log((a[0]+a[1]));}
// add();


   // var arr =['john', 'mohamed', 'salah'];
   // let isJhonExist = console.log(`It's`,arr.includes('john') );
    


   // let arr = [1000, 2000 , 3000 , 4000];
   // let salaries= arr.map(function (val){return val *2;});
   // console.log(salaries);

// const students = [
//    { name: 'ahmed', grade: 80 },
//    { name: 'ali', grade: 85 },
//    { name: 'mohamed', grade: 90 },

// ];
// const stdAfterFilter= students.filter(function (std){
//    return std.grade > 85 ;
// });
// console.log(stdAfterFilter);


// const groupNum= [1 , 2 , 3];
// const sumNumbers= groupNum.reduce(function(result,sum){
//    return result + sum
// },0);
// console.log(sumNumbers);

// const hasPositiveNum = [-1 , -2 , 2 ,-3].some(function(item){
//       return item > 0;
// });
// console.log(hasPositiveNum);

// const hasPositiveNum = [1 , 2 , 3].every(function(item){
//    return item >0;
// });
// console.log(hasPositiveNum);

// var arr =['john', 'mohamed', 'salah'];
// // let isJhonExist = console.log(`It's`,arr.includes('john') );
// let result= arr.find(function (item){
//    return item == 'john';
// });
// console.log(result);



// let arrNumbers = [10, 20 , 30 , 40 ,50];
// let maxNum = Math.max(...arrNumbers);
// // console.log('Index of ',arrNumbers.indexOf(maxNum),'\n',`${maxNum} is the Maximum Number In The Array `);
// const arr = [5,10,20,6];
// const max = arr.reduce((a , b)=> a > b ?  a : b);
// console.log(arr.indexOf(max));


// function multValues() {
//    let firstValue = 12;
//    let lastValue  = 20;

//    return [firstValue, lastValue];

// }
// console.log(multValues());

class book {
   title;
   author;

   constructor(title) {
      this.title = title;
   }
}

const b = new book('mohamed');

console.log(b); 




const arrNew =[1000 , 2000 , 3000];
let value = arrNew.map(function (val){
   return val * 2 ;
})
console.log(value);
