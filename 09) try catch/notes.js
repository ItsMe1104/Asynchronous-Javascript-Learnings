
// 1) Difference between "undefined" and "not defined"


// a) not defined :-

// console.log(a);      --> It will give error as "a" is not defined


// b) undefined :-

// let a;
// console.log(a);      --> undefined



// --> "undefined" is a data type in JS which is assigned to a variable if we didn't initialize it while "not defined" is an error which comes if we try to access something that is not declared



//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Errors in JS

// --> Once JS Engine encounters an error, it stops the executes of the whole program and doesn't execute the rest of the lines of code

// --> To solve this problem, we use the try-catch{} block. It is a synchronous execution.
// --> Whatever error we catch in try block, it stops the execution of try{} block only, it offloads the error to the catch{} block
// --> But whatever code is outside the try-catch{} block will be still be executed


try {
  console.log(a);
  console.log(56);
}
catch (err) {
  console.log(err);
}

console.log(39);




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Error Object :-

// --> Whatever error we encounter in the try{} block, is thrown automatically to the catch{} block
// --> That error is received as the argument in the catch{} block.
// --> The Error is actually an object, but to see it as an object, we have to use console.dir() (just like we do for functions, DOM elements)


// --> The Error object mainly contains three properties :- message ,stack , Prototype
// message :- error message
// stack :- stack trace, line and character no. of the got error

// --> Inside Prototype property, there is a "name" property
// --> This name property gives us the type of error


// Type Error :-
// --> When we try to access a property which doesn't exist of a DOM element or normal object or undefined

const user = {
  name: "Hrithik",
  age: 34
}

console.log(user.address);        // undefined
console.log(user.address.city);   // Type Error as we cannot access the property of undefined




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) finally{} block
// --> The catch{} block only runs if the catch block encounters an error
// --> The try{} block runs always but when it encounters an error, its code gets blocked
// --> The finally{} block always executes even if the code passes through either of try or catch block
// --> the try-finally{} block without the catch{} block doesnt give any error, but with try{} block only we have to attch the catch{} block


try {
  console.log(a);
  console.log(56);
}
catch (err) {
  console.log(err);
}
finally {
  console.log("Hello world");

}




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 5) Use of try-catch Block :-

// --> Mainly used with async-await functions
// --> But can be used anywhere in the code


// #) Using async await with API call :-

// --> Mainly the error comes in API calls, due to network error, slowness of API, wrong URL ,etc
// --> Hence, we will use try-catch{} block while doing an API call


async function makeAsyncRequest() {
  try {
    const resObj = await fetch("https://dummyjson.com/users")
    const data = await resObj.json();
    console.log(data);
  }
  catch (err) {
    console.log(err);
    alert("Something went Wrong !!!")
  }

}