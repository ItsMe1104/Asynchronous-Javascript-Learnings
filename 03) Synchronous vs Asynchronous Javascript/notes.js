
// 1) Single Thread or Multithread?

// --> Javascript Engine is single threaded
// --> It means JS can only do one thing at a time. Hence, it cannot do two things simultaneously

// Process :- Any program at execution.

// Thread :- It is a lightweight process. A process can contain multiple threads




// Question :- How does JS does some tasks simultaneously?
// --> e.g :-

setTimeout(() => {
  console.log("HIIII");
}, 4000);
console.log("Javascript");

// Output :-
Javascript
HIIII


// Conclusion :-
// --> Even though our JS was calculating 4 seconds behind the scenes, still simultaenously it printed "Javascript" before the setTimeout() printed its own output


// Solution :-
// --> Whenever JS Engine sees an asynchronous code, it offloads it to Browser
// --> Browser is multi-threaded as it is capable of handling multiple threads because it is written in c++ and other low-level languages



// **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 2) Synchronous and Asynchronous Code :-

// --> Synchronous code is one that is executed line by line and gets executed by the main thread of our JS engine
// e.g :- for loop, if-else, switch, etc


// --> Asynchronous code is the one that cannot be executed line by line, hence it is offloaded to Browser
// --> Browser creates a new thread of its own, and then executes the asynchronous code and gives away the result to the JS Engine
// e.g :- setTimeout, setInterval, API calls , etc





// **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************





// 3) Blocking synchronous code :-

// --> Any code that blocks our main thread is called blocking synchronous code.
// e.g :- alert(), prompt(), infinite loop





// For e.g :-

//Date.now() :-

// --> It is a function which gives the total number of mili seconds passed from 00:00am of 1st Jan 1970;

let startTime = Date.now();
let currentTime = startTime;

while (startTime + 4000 > currentTime) {
  currentTime = Date.now();
}

// Hence for 4 seconds our main thread will be blocked till the while loop gets out




// **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 5) Synchronous API call :-

// --> By default all the API calls are asynchronous in JS. Hence, JS engine offloads it to Browser
// --> But with the help of XMLHttpRequest(), we can make a synchronous API call, which will block the main thread till the response from the API is received



// Steps :-
//--> just in open() , pass the third argument as false
xhr.open("GET", URL, false)



// Constraints :-
// --> We cannot use "responseType" property, to change the response to "json" before making the send() request
// --> We directly need to use JSON.parse() to change the response to json



// Conclusion :-
// --> Making a synchronous API call is dangerous and considered a bad practise and should never be used in the industry





// **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 6) AJAX :-

// AJAX :- Asynchronous Javascript and XML
// --> Basically whatever code we wrote to make an API call using XMLHttpRequest() is known as AJAX. 