
// Async Await was intoduced to help us to simplify the code of fetching data using fetch() API


// 1) Async function :-

// --> A normal function returns some value on being called
// --> An aysnc function returns a Promise by default on being called
// --> Even if we return a value in the async Function, the value is attached to the "PromiseResult" property of the returned Promise.
// --> The Promise returned by Async function is by default fulfilled and resolved.

async function makeRequest() {
  return "Hello"
}




// *************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 2) "throw" keyword

// --> It throws an error such that no other lines of code after it will be executed, even if they are in the function or not.
// --> It stops the program then and there itself after throwing the error.

// Syntax :-
throw value



// e.g :-
function hi(params) {
  console.log("Hello");
  throw "Error in Program"
  console.log("Error Hello");

}
hi();
console.log("HIII");


// Output :-
//  Hello
//  Uncaught Error in Program



// #) value can be any other data type
// --> But mostly we return an Error using constructor function called new Error(value)

throw 56
throw "Hello"
throw undefined

// mostly used
throw new Error("Error in Program");
throw new Error(56);



// e.g :-
function hi(params) {
  console.log("Hello");
  throw new Error("Error in Program")
}



// *************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 3) Rejecting the Promise of an async function :-

// --> If we throw an error using the "throw" keyword inside an async function
// --> The Promise returned by the async function will be rejected

async function makeRequest() {
  console.log("Hiii");
  throw new Error("Error in Program")
}



// *************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 4) await keyword :-

// --> We know that the fetch() API or the then() or .json() returns a Promise and not the response directly
// --> The response is wrapped in that returned Promise as the "PromiseResult" value.

// --> "await" keyword helps in directly returning the response without attaching it in a Promise
// --> Hence the response can be directly stored in a variable
// --> Hence, no need of using .then() for retrieving the response from the arguments






//******************************************** */
//#) How to use await keyword ?

// --> Just write the "await" keyword before any function that would return a promise
// --> Hence, instead of returning a Promise, that function will return the value of the "PromiseResult" that was supposed to be attached to that returned Promise.


async function makeRequest() {
  const resObj = await fetch("https://dummyjson.com/users");
  const data = await resObj.json();

  console.log(data);
  console.log(89);
}

makeRequest();

console.log(53);


//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Mechanism of await :-

// --> "await" keyword first waits for the promise to get resolved, then it saves the value of "PromiseResult" inside it.
// --> Till it waits, it doesnt let the rest of the code of that context to get executed.
// --> Means it will block the rest of the code of that function / context, till it gets the response and stores its "PromiseResult" value
// --> Note :- await, always blocks the rest of the code in its own context only. It will not block the code of the other context.
// --> For e.g :- If the "await" keyword is used in a particular function's context, it will not block the code of the Global Execution context from getting executed
// --> But if "await" keyword is used in Global Execution Context, then it can block all the code of the Global Execution context
// --> Hence, it is advisable to use "await" keyword in an async function
// --> This is not the case when we use .then() and .catch() as it lets the function execute its synchronous part first and lets the asynchronous part execute as per Event Loop.





// #) Behind the scenes :-

// --> The "await" keyword stops the execution of the function till it receives the response
// --> The async function works synchronously till it encounters "await" or any fetch() / promise
// --> Once it encounters, it becomes asynchronous and gets removed from the Call Stack.
// --> It waits asynchronously, till the await function gets its response.
// --> Once it does, it waits till all the synchronous functions get executed and then again comes back to the call stack and executes its remaining synchronous code
// --> It doesn't happen if we use normal function or .then() and .catch(). In normal function, only the asynchronous part goes out of the call Stack while all its Synchronous part is executed


// e.g :-

async function makeRequest() {
  const resObj = await fetch("https://dummyjson.com/users");
  const data = await resObj.json();

  console.log(data);
  console.log(89);
}
makeRequest();

function sum() {
  return 100 + 200;
}
console.log(sum());


// Output :-
// 300
// API response
// 89




//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



//  6) Why async/await seems like synchronous code?

// --> Because it doesnt even let the synchronous part of the async function to get executed
// --> It waits till the await function gets its response and then lets the rest of the code of that function get executed.



// NOTE :- .json() method also does'nt return the data from the Response Object directly. It also returns a promise, hence we also need to use the await keyword in .json(), to get the data directly




//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 7) await function outside async functions :-

// --> In common js, we can only define "await" keyword inside async functions

// --> In ejs / module.js, we can define "await" keyword without using async functions
// --> Consequences :- Our whole file will become synchronous, and the API call will take place in the main thread synchronously 


// #) To convert a JS file into ejs,
// --> Inside index.html, in the <script> tage, add the attribute "type" and the value as "module"
<script src="./script.js" type="module"></script>


// --> This is because when we set type = "module" there is a module scope that is created, and all the variables from the Global scope get transferred to the Module scope even if we use let, const, var




//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 8) Return value of async function :-

// --> The async function always returns a Promise by default
// --> Even if we try to return a value, it will not be returned directly but wrapped inside the Promise inside the "PromiseResult" property.
// --> Hence we have to use the .then() again in the function call to retrieve the actual value.


async function makeHTTPRequest2() {
  const resObj = await fetch('https://dummyjson.com/users')
  const data = await resObj.json();
  return data;
}

makeHTTPRequest().then((data) => {
  console.log(data);
})
