    /*
        JS Special Function/ Array Method:-
            *  toString()
            *  push()
            *  pop()
            *  shift()
            *  unshift()
            *  splice(indexToChange, indexToDeleteItsValue, newValue)
            *  concat()
            *  reverse()
            *  trim()    --> valid of string, it removes extra white space from start and end of string 
    */
     
    /*
        Write a js program to check two numbers and return true if one of the numbers 100 or if sum of two numbers is 100.
    */
// function nikalo(num1, num2){
//     for(let i=0 ; i<2 ; i++){
//         if((num1 === 100) || (num2 === 100)){
//             console.log("number 100 h");
//             return true;
//         }
//         let sum = num1+num2;
//         if(sum === 100){
//             console.log("sum 100 h");
//             return true;
//         };
//     };
//     console.log('Nahi h')
// };
// nikalo(90,1000);


    /*
        Factorial program usig iterative approach
        eg:- 5! : 5x4x3x2x1
    */
// function factorialNum(num){
//     let factorial = 1
//     for(let i = num ; i > 0 ; i--){
//         factorial *= i;
//     };
//     return factorial ;
//  };
// console.log(factorialNum(5));


    /*
        Factorial program usig recursive approach
        eg: 5! = 5*4*3*2*1
    */
// let factorial = 1;
// function recursiveFactorialNum(num){
//     factorial *= num;
//     if(num === 2){
//         return true;
//     }
//     num--;
//     recursiveFactorialNum(num);
// }
// recursiveFactorialNum(10);
// console.log(factorial);

// ****** OR ******

// const recursiveFactorialNum = (num) => {
//     if(num === 1){
//         return true;
//     }
//     console.log(num, "*", num-1);
//     return num * recursiveFactorialNum(num-1)
// }
// const answer = recursiveFactorialNum(4);
// console.log(answer);


    /*
        Factorial program usig shortcut method (in one line)
        eg: 5! = 5*4*3*2*1
    */
// const factorial = (n) => (n <=1 ? 1 : n * factorial(n-1));
// console.log(factorial(3));


    /*
        Fibonacci program usig iterative approach
        The number which sum with its previous number and write it to its next.
        0,1,1,2,3,5,8,13,21,34...
    */ 
// function fibonacciNumber(num){
//     let arr = [0,1];
//     let sum = 0;
//     for(let i=0; i<=num ; i++){
//         sum = arr[i]+arr[i+1];
//         // console.log(sum);
//         arr.push(sum)
//     }
//     console.log(arr);

// }
// fibonacciNumber(20);

    /*
        Fibonacci program usig recursive approach
        The number which sum with its previous number and write it to its next.
        0,1,1,2,3,5,8,13,21,34...
    */
// const fibonacciNumber = (num) =>{
//     if(num < 2){
//         return true;
//     }
//     return fibonacciNumber(num-1) + fibonacciNumber(num-2);
// }
// const answer = fibonacciNumber(5);
// console.log(answer);


    /*
        Closure : It is just a combination of functions bundle together.
    */
// console.log(carName);

// const car = (cName) =>{
//     console.log('Its inside 1st or parent function');
//     return (modelNumber) =>{
//         console.log(`The car is ${cName} and model number is ${modelNumber}`);
//     }
// }
// var cName = car('BMW');
// cName('BMW X6');


    /*
        Class and Inheritance
    */
// class Person{
//     constructor(name, age, gender){
//         this.name = name, // 'this' is used to get the value or properties of same class
//         this.age = age,
//         this.gender = gender
//     }
//     yearOfBirth(){
//         return 2022 - this.age;
//     }
// }

// personDetail = new Person('Himanshu', 24, 'Male') // Make Object 
// console.log(personDetail.yearOfBirth()); 
// /* Inheritance */
// class Female extends Person{ /* extends is used to allow the inheritance class to access the properties of Parent class */
//     constructor(name, age, gender, peofession){
//         super(name, age, gender, peofession) /* super is used to get the value or properties of another class */
//         this.profession = this.profession
//     }
// }

// femaleDetail = new Female('Gita', 23, 'Female', 'Doctor');
// console.log(femaleDetail);


    /*
        Reduce
    */
// const arr = [5, 7, 8];
// let result = arr.reduce((preNumber, current, index, arr1) =>{
//     return preNumber + current;
// })
// console.log(result);


    /*
        Checking 1st pair sum ZERO
        input - [-5, -4, -3, -2, 0, 2, 4, 6, 8 ]
    */
// let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8 ];
// function checkSum(arr){
//     for(let num of arr){
//         // console.log(arr[i]);
//         for(let j=1 ; j <= arr.length; j++){
//             if(num + arr[j] === 0){
//                 return [num, arr[j]]
//             }
//         }
//     }
// }
// console.log(checkSum(arr));

    /**********OR**********/

// let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8 ];

// function checkSum(arr){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         let sum = arr[left] + arr[right]
//         if(sum === 0){
//             return `[${arr[left]} ${arr[right]}]`
//         }else if(sum > 0){
//             right--;
//         }else{
//             left++;
//         }
//     }
// }   
// console.log(checkSum(arr));


    /*
        String Anagram:
            condition:
                1. both strings length will be same i.e 'sonu' --> 'uons', here length is 4.
                2. word should same in both string. i.e s->1, o->1, n->1, u->1 => in both string 
    */
// function anagram(str1, str2){
//     const counter = {};
//     if(str1.length !== str2.length){
//         return false;
//     }
//     for(let letter of str1){
//         counter[letter] = (counter[letter] || 0) +1;
//     }
//     for(let items of str2){
//         if(!counter[items]){
//             return false;
//         }
//         counter[items] -= 1;
//     }
//     return true;
// }
// console.log(anagram('sonnu', 'nuons'));


    /*
        Counting unique number
        input - [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8 ]
        
        Condition :-
            i=0, j=1
            arr[i] != arr[j] --> i++ , arr[i] ==> arr[j]
    */

    // function uniNum(arr){
    //     let i=0;
    //     for(let j=1 ; j<=arr.length-1 ; j++){
    //         if(arr[i] !== arr[j]){
    //             i++;
    //             arr[i] = arr[j]
    //         }
    //     }
    //     return i+1;
    // }
    // console.log(uniNum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8 ]));



    /*
        Reverse string
    */  
// function reverseStr(str){
//     return str.split("").reverse().join('')
// }
// console.log(reverseStr('himanshu'))

        /********** OR ***********/

// function reverseStr(str){
//     var newString = "";
//     for(let i = str.length-1 ; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }
// var a = reverseStr('himanshu');
// console.log(a);


    /*
        How would you check if a number is an integer?
    */ 
// function checkInt(num){
//     if(num % 1 === 0){
//         return true;
//     }
//     return false
// }
// console.log(checkInt(5));
// console.log(checkInt(5.32));


    /*
        Find the output: mul(2)(3)(4)
    */ 
    // const mul = (a) =>{
    //     return (b) =>{
    //         return (c) =>{
    //             return a*b*c;
    //         }
    //     }
    // }     
        
    // console.log(mul(2)(3)(4)); 


    /*
        Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
    */
    // for(let i=1 ; i<=100 ; i++){
    //     let MOT = i % 3 == 0;
    //     let MOF  = i % 5 == 0;
        
    //     console.log(MOT ? (MOF ? `FizzBuzz` : `Fizz`) : MOF ? `Buzz` : i);
    // }


    /*
        Given two strings, return true if they are anagrams of one another;
        condition : length will same
                    all chracters are available inside another
    */
// function anagram(str1, str2){
//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()
//     if(str1.length !== str2.length){
//         return false
//     };
//     let counter = {};
//     for(let letter of str1){
//         counter[letter] = (counter[letter] || 0) + 1
//     }
//     for(let items of str2){
//         if(!counter[items]){ // check if it return undefined or not
//             return false
//         }
//         counter[items] - 1;
//     } 
//     return true;   
// }
// var anagram = anagram('Ma8ry', 'Ar8my');
// console.log(anagram);


    /*
        multiply(5)(6);
    */
// const multiply = (a) =>{
//     return (b) => {
//         return a*b;
//     }
// }

// var mul = multiply(5)(6);
// console.log(mul);


    /*
        How does the this keyword work?
    */
        /*
        * In an object method, this refers to the object.
        * Alone, this refers to the global object.
        * In a function, this refers to the global object.
        * In a function, in strict mode, this is undefined.
        * In an event, this refers to the element that received the  event.
        * Methods like call(), apply(), and bind() can refer this to any object. 
        */
// const person = {
//     name       : "Himanshu",
//     profession : "Frontend Developer",
//     func       : function(){
//         return `Hello i'm ${this.name} and my profession is ${this.profession}`
//     } 
// }
// console.log(person.func());


    /*
        Write a JavaScript program to find the maximum possible sum of some of its consecutive numbers.
        Condition:-
            => take consecutive number : matlab ki aap kitne digit tak sum karna chahte ho, like num = 4, matlab main pahle array ke 4 digit ko sum krna chahta hu then ek step aage badh ke age 4 digit ko sum krna chahta hu.
            eg : in array  [1, 22, 3, 14, 5, 1, 22, 3, 14, 5] , 
                first 4 consecutive sum = 1+22+3+14, then 22+3+14+5 and so on...
            => maximum possible sum ka matlab ki sabse jyada sum ka value hoga wo return ho jayega.
             
    */
// let arr = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];
    // function sumResult(arr, num){
    //     if(num > arr.length){
    //         return 'Number can"t be greater than array size.'
    //     }else{
    //         let max = 0;
    //         for(let i = 0; i<= arr.length - num +1 ; i++){
    //             let temVal = 0;
    //             for(let j=0 ; j<num ; j++){
    //                 temVal+=arr[i+j]
    //             }
    //             if(temVal > max){
    //                 max = temVal
    //             }
    //         }
    //         return max
    //     }
    // }
    // console.log(sumResult(arr, 4));



    /*
        Palindrom number --> OYO reverse== OYO
    */
//    CHECK FOR STRING
// function palindromNum(str){
//    let newStr = ''
//    for(let i = str.length-1 ; i >= 0 ; i--){
//        newStr+=str[i]
//    }
//    if(newStr === str){
//        return true;
//    }
//    return false;
// }
// console.log(palindromNum("sks"));

//    CHECK FOR NUMBER

// function palindromNum(num){
//     let newNum = parseInt(num.toString().split("").reverse().join(''))
//     if(newNum === num){
//         return true;
//     }
//     return false
// }
// console.log(palindromNum(56865));


    /*
        Armstrong number:
        condition: 153 ---> 1*1*1 + 5*5*5 + 3*3*3 = 153 then this number is Armstrong number
    */
// function armstrong(num){
//     let sum = 0;
//     let digit = num.toString().length;
//     let newNumber = num;
//     while(num > 0){
//         let remainder = num%10;
//         remainder = remainder ** digit;
//         sum = sum + remainder;
//         console.log(sum);
//         num = parseInt(num/10); // convert float into integer
//     }
//     if(newNumber === sum){
//         return true
//     }
//     return false;
// }
// console.log(armstrong(92727));

    /*
        Searching : a sting in sentence
    */
// let str = "Mr. Blue has a blue house";
// console.log(str.search("has"));


    /*
        Searching : Linear Search
        [5,9,4,8,69] - search 8
    */ 
// let arr = [5,9,4,8,69];
// const linearSearch = (arr, numToFind) =>{
//     for(let i = 0; i <= arr.length-1 ; i++){
//         if(arr[i] === numToFind){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch(arr, 9));


    /*
        Searching : Binary Search for sorted array
            Consition: Only work on sorted array
            // let arr = [5,9,14,18,69];
    */
// function binarySearch(arr, numToFind){
//     let start = 0;
//     let end   = arr.length-1

//     while(start <= end){
//         let mid = parseInt((start+end)/2);
//         if(arr[mid] == numToFind){
//             return mid;
//         }
//         if(arr[mid] < numToFind){
//             start = mid+1
//         }else{
//             end = mid-1;
//         }
//     }
//     return false;
// }
// console.log(binarySearch(arr, 69));


    /*
        Shorting : bubble sort
        [555,99,14,88,69,10]
        /*
            [99,555,14,88,69,10]
            [99,14,555,88,69,10]
            [99,14,88,555,69,10]
            [99,14,88,69,555,10]
            [99,14,88,69,10,555]
        /*
    */
// function sortKro(arr){
//     for(let i=0 ; i<= arr.length-1 ; i++){
//         console.log(i);
//         for(let j=0 ; j<= arr.length-i ; j++){
//             if(arr[j] > arr[j+1]){
//                 console.log(j, j+1);
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(sortKro([555,99,14,88,69,10]));

                /****** OR *******/
// function sortArray(arr){
//     for(let i=0 ; i<arr.length ; i++){        
//         for(let j=0 ; j< arr.length-i; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortArray([555,99,14,88,69,10]));


    /*
        Shorting : Insertion sort
        [555,99,14,88,69,10]
    */




    /*
        Shorting(Numeric sort)
    */
// let arr = [5,9,4,8,69,10]
// function sortArray(arr){
//     return arr.sort(function (a,b){
//         return a-b
//     })
// }
// console.log(sortArray(arr));


    /*
        Shorting(string sort)
    */
// let str = 'himanshu';
// console.log(str.split("").sort().join(''));


    /*
        Find the second largest number in array
        [5,9,4,8,69,10]
    */
// function largeNum(arr){
//     let max = 0;
//     let secMax = 0;
//     for(let i=0; i<= arr.length-1; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         };
//     };
//     for(let i=0 ; i<=arr.length-1 ; i++){
//         if(arr[i] > secMax && arr[i] < max){
//             secMax = arr[i]
//         };
//     };
//     return [max, secMax];
// };
// console.log(largeNum([5,79,4,88,69,9]));


    /*
        forEach method
    */
// let arr = [5,79,4,88,69,9];
// let newArr=[];
// arr.forEach((val) =>{
//     newArr.push(val*2)
// })
// console.log(newArr);


    /*
        map method
    */
// let arr = [5,79,4,88,69,9];
// let newArray = []
// arr.map((item) =>{
//     newArray.push(item*2)
// })
// console.log(arr);


    /*
        map V/S forEach
    */
            /* forEach */
// let arr1 = [5,79,4,88,69,9];
// arr1 = arr1.forEach(val  =>  val*2)
// console.log(arr1);
//             /* map */
// let arr2 = [5,79,4,88,69,9];
// arr2 = arr2.map(val  =>  val*2)
// console.log(arr2);


    /*
        for in loop
    */
// let arr = [5,79,4,88,69,9];

// for(let i in arr){
//     console.log(i);
// }


    /*
        for of loop
    */
// let arr = [5,79,4,88,69,9];

// for(let val of arr){
//     console.log(val);
// }



    /*
        Checking Square in another array
        arr1 = [1,2,3,4] | arr2 = [1,9,4,16]
        Condition:-
            => check the square of the element of arr1 is availablle in arr2.
    */
// let arr1 = [1,2,3,4];
// let arr2 = [1,9,4,16];
// function check(arr1, arr2) {
//     let isSQR = false;
//     for(let i of arr1){
//         if(arr2.includes(i*i)){
//             isSQR = true
//         }else{
//             return false
//         }
//     }
//     return isSQR;
// }
// console.log(check(arr1, arr2));


    /*
        Find the maximum occuring character in string
    */
// function maxChar(str){
//     let count = {};
//     str.split("").forEach((char) => {
//         count[char] = count[char] ? count[char]+1 : 1
//     })
//     return count;
// }
// console.log(maxChar('Himanshu Kumar'));



    /*
        Flatten the Array
            let arr = [
                [1,2],
                [3,4],
                [5,6,[7,8],9],
                [10,11,12]
            ];
    */
// let arr = [
//     [1,2],
//     [3,4],
//     [5,6,[7,8],9],
//     [10,11,12]
// ];

/******* Custom Method *******/
// function customFlat(arr, depth=1){
//     let result = [];
//     arr.forEach((ele) => {
//         if(Array.isArray(ele) && depth > 0){
//             result.push(...customFlat(ele, depth-1))
//         }else{
//             result.push(ele)
//         }
//     })
//     return result;
// }
// console.log(customFlat(arr, 2));


/***** Shortcut Method *****/

// let shortcutFlat = arr.flat(2)
// console.log(shortcutFlat);



    /*
        var v/s let v/s const
    */
/*
    1. var is functional scope but let and const are block scope.
        eg:-
            {
                var a=5;
                let b=6;
                const c=7
            }
            console.log(a,b,c)
    2. var can be redeclare and reassign and let can't be redeclare but can reassign but const neither be redeclare nor reassign.
*/

    /*
        What's the output:- // It happens because var is a functional scope.
            function a(){
                for(var i=0 ; i<3 ; i++){
                    setTimeOut(function log(){
                        console.log(i)
                    }, i*1000)
                }
            }
            a()

    */

    /*
        call, apply, bind
    */
// var person = {
//     name : 'Himanshu',
//     intro: function(arg){
//         console.log(this.name + " says " + arg)
//     }
// }
// person.intro('Pranam')

/* using call : It takes the object which became the context of the particular function (like:- intro) and for the other paramether, it takes the argument after that object. */
// var anotherPerson = {
//     name : 'Himanshu Kumar'
// } 
// person.intro.call(anotherPerson, 'Nameste')

/* using apply : It takes the object which takes which became the context of the particular function (like:- intro) and for the other paramether, it takes the argument as an array after that object. */
// var anotherPerson = {
//     name : 'Himanshu Raj'
// } 
// person.intro.apply(anotherPerson, ['Jay shree Krishna'])

/* using bind : It returns a complete new function. */
// var anotherPerson = {
//     name : 'Himanshu Chaudhary'
// }
// let newDeclare = person.intro.bind(anotherPerson)
// newDeclare('Radhaswami');



    /*
        Composition POlyfill:-
            function addFive(a){
                return a+5
            }
            function substractTwo(a){
                return a-2
            }
            function multiplyFour(a){
                return a*4
            }
    */



    /*
        Promise
    */
// function sum(a,b){
//     return promise = new Promise(function(reject, resolve) {
//         let sum = a+b;
//         console.log('Please wait...');
//         setTimeout(() =>{
        
//             if(sum > 5){
//                 resolve('Resolve')
//             }else{
//                 reject('Rejected')
//             }
//         }, 3000)
//     })
// }
        
// sum(1,3).then((result) => {
//     console.log(result);
// }).catch((err) =>{
//     console.log(err);
// })



    /*
        Promise.all
    */
// let p1 = new Promise((resolve, reject) =>{
//     let time = setTimeout(() =>{
//         resolve(10)
//     })
// })
// let p2 = new Promise((resolve, reject) =>{
//     let time = setTimeout(() =>{
//         reject('failed')
//     })
// })
// let p3 = new Promise((resolve, reject) =>{
//     let time = setTimeout(() =>{
//         resolve(10)
//     })
// })
        
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// }).catch((err) =>{
//     console.log(err);
// })



    /*
        How to get the 10 random number between 1 to 100 and find max and min between them.
    */
// let numbers = [];
// for(let i = 0; i < 10; ++i) {
//    numbers.push(Math.floor(Math.random() * 100) + 1);
// }
// console.log(numbers);
// let max = 0, min=0;
// for(let i=0; i<=numbers.length-1 ; i++){
//     if(numbers[i] > max){
//         max = numbers[i]
//     }
// }
// let newMax = max; 
// for(let i=0; i<=numbers.length-1 ; i++){
//     if(numbers[i] < newMax){
//         newMax = numbers[i];
//         min = newMax;
//     }
// }

// console.log("max: ", max);
// console.log("min: ", min);


    /*
        Async/await :-
            async: The word “async” before a function means one simple thing: a function always returns a promise. 
            await: The keyword await makes JavaScript wait until that promise settles and returns its result. It always work or use with async function.
    */
/* async */
// async function asyncFun() {
//     return Promise.resolve(1);
// }
  
// asyncFun().then((result) => console.log(result));

/* async-await */
// async function asyAwaitFun() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 3000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result);; // "done!"
// }  
// asyAwaitFun();

/* async-await*/
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
// }
  
// async function asyncCall() {
//     console.log('loading...');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
// }  
// asyncCall();
  


    /*
        API:- API stands for Application Programming Interface. API is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.

        Get the data from API and show like the object
            // https://api.unsplash.com/search/users?query=nas&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg
    */

// let userData = {
//     profilePic: '',
//     profileUrl: '',
//     username: '',
//     fullname: '',
//     likes: '',
//     postId: '',
// }
// async function apiCall(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     const dataResult = data.results.map((item) =>{
//         return (
//             userData.profilePic = item.profile_image.small,
//             userData.profileUrl = item.links.html,
//             userData.username = item.first_name,
//             userData.fullname = item.name,
//             userData.likes = item.total_likes,
//             userData.postId = item.id
//         )
//     })
// }
// apiCall('https://api.unsplash.com/search/users?query=nas&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg');
// console.log(userData);