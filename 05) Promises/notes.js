// In generally, we get the already made promises, we just need to consume them


// 1) Promises :-
// --> It is a special type of object with some special functionalities
// --> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// It has been provided by the Browser as a Browser API




// *******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 2) Creating Promises :-

// --> We just have to use the Promise() function
// --> Just like XMLHttpRequest we have to create it using the new keyword
// --> Moreover, it requires a callback function as input, without which t will give an error

// const p = new Promise()      // will give error

const p = new Promise(() => {
})



//************************************* */


// Promise State :-

// --> There are 3 states of a Promise :-
// --> a) resolved / fulfilled :- promise has been fulfilled
// --> b) rejected :- promise has been rejected
// --> c) pending  :- promise neither fulfilled nor rejected, still waiting



//************************************* */



// Promise object :-

// --> It contains various properties which we cannot update like in normal object
// --> It contains a property called "Promise State", which tells the current state of the promise
// --> The state of the promise is initially "pending" and is automatically updated by Browser asynchronously and we dont have to take care of them



// --> Note :- Since console.log() is a synchronous function, hence it will execute at that time only with whatever value it got. Therefore, just console.logging the promise, will only show it as "pending" even though after some time.
// The value of the console.log() wont change automatically to fulfilled but will remain pending forever



// *******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 3) Changing the Promise State property :-

// --> Once a promise is resolved or rejected, the value of the PromiseState property is automatically changed by the browser automatically.



//****************************** */

// Resolving or Rejecting a promise :-

// --> A Promise can either be resolved or rejected only once.

// a) To resolve or reject a promise, first pass two parameters in the callback of Promise (resolve, reject)


// --> For resolving :-
// --> use the resolve() inside the callback of the Promise
// --> We can pass any value inside the resolve function which will then be received in the callback of the then() and also will be updated in the "PromiseResult" property


// --> For rejecting :-
// --> use the reject() inside the callback of the Promise
// --> We can pass any value inside the reject function which will then be received in the callback of the catch() and also will be updated in the "PromiseResult" property
// --> It will give an error if we dont attach catch() while  


const p2 = new Promise((resolve, reject) => {
  resolve("Hii")
})

const p3 = new Promise((reject) => {
  reject("Promise rejected");
})
  .catch((err) => {
    console.log(err);
  })




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 4) Changing the Promise Result property :-

// --> Whatever we pass in the resolve() or rejected() functions, it is automatically updated in the PromiseResult property of the promise object
// --> Initially it is undefined but just as the resolve/reject function is called instantly or after some time, the value of the PromiseResult is automatically updated by the Browser asynchronously.
// --> This function is very useful to know when our API calls have responded

//e.g :-

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hii");
  }, 4000);
})




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 5) then() and catch()

// --> If we try to see the "Prototype" property of the Promise, we will find properties with methods in values
// a) then : then()
// b) catch : catch()
// c) finally : finally()


// Both then() and catch() methods need callbacks as compulsary arguments



// *************************


// then()
// --> Whenever a promise is resolved using resolve(), it calls its then()
// --> then() executes its callback and itself returns a promise
// --> Whatever value we pass in the resolve() , can be received as a parameter in the then()
// --> If we use a then() on a promise that got rejected, then the then() will simply return the rejected promise without executing its callback so that the catch() function can have it


const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hii");
  }, 4000);
})

p5.then((data) => {
  console.log(data);
})


// Hence, after 4 seconds, when the promise is resolved, the then() will be called and we will get our "Hii" output



// ***************************


// catch()
// --> Whenever a promise is rejected using reject(), it calls its catch()
// --> catch() executes its callback and itself returns a promise
// --> Whatever value we pass in the reject() , can be received as a parameter in the catch()
// --> If we use a then() on a promise that got rejected, then the then() will simply return the rejected promise without executing its callback so that the catch() function can have it
// --> Hence no need to write the catch() separately, we just chain it with then()


const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rejected");
  }, 4000);
})

p6.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
})

// Hence, after 4 seconds, when the promise is resolved, the then() will be called and we will get our "Hii" output




// ***************************


// finally()

// --> Whenever a promise is reolved or rejected using resolve() or reject(), it gets called.
// --> Hence, it will get called everytime a promise is settled, no matter resolved or rejected.
// --> finally() doesnt take any argument


// --> What is settled state ?
// --> Whenever a promise is resolved or rejected and its out of the pending state, it is called the settled state.



const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hii");
  }, 4000);
})

p7.then((data) => {
  console.log(data);
}).finally(() => {
  "Promise is settled"
})



const p8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rejected");
  }, 4000);
})

p6.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log("Promise is settled");

})



//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 6) Browser's hand in Promises :-


// --> The whole setup and functionality of Promises has been provided by the Browser and is not core JS. It is native code.
// --> Maintaining the promise is also done be Browser and that too asynchronously
// --> Hence tracking the promise and updating its state is done by the Browser asynchronously (not in main Thread)
// --> Even though we try to make our own setup of Promise, we might never be able to execute it asynchronously



// Behind the scenes (Important) :-

// --> Whenever the JS engine finds a Promise in our code, it offloads it to Browser to execute it asynchronously
// --> The Browser provides a separate thread that keeps tracking when the Promise is fullfilled.
// --> Simultaneously, the synchronous code is being executed by the JS in the Global Execution Context of the Callback Queue
// --> Whenever a promise is resolved or rejected, the subsequent callback of then() or catch() along with finally() is sent to the micro task queue, instead of the Callback Queue
// --> Whenever the synchronous code is over and the Global Execution Context is empty, all the callbacks from the microtask queue are executed first , then from the callback queue




// Micro Task Queue :-

// --> The Micro task queue has more priority over callback queue
// --> It is only available for promises and mutation observer (which tracks any changes in the DOM Tree)
// --> If two callbacks, one in the callback queue and one in the micro task queue are ready to be executed, then when the Global Execution Context is free and the Call Stack is empty, all the callbacks of the micro task queue will be executed in the call stack , and then the callbacks of the callback queue will be executed.



// For e.g :- check micro_task.js file in the same folder




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 7) Promise Chaining :-

// a) both the then() and catch functions returns a new promise which we can store

// b) Whatever will be state of the Promise that called the then() or catch() will also become the State of the Promise that is returned by then() or catch()

// c) The value of the "PromiseResult" key is same as the value that is passed through resolve() or reject(). This value can be received as argument in the then() or catch(). This is valid for normal promises

// d) The value of the "PromiseResult" key in the promise returned by the then() or catch() is the value that is returned by the then() or catch() using the "return" keyword.



// Conslusion :-
// Since the then() or catch function also returns a promise . Hence we can store it, and apply then() or catch() on that returned Promise

const j = new Promise((resolve, reject) => {
  resolve("Hiii");
})

const k = j.then((data) => {
  new_data = data + " Hello"
  return new_data;
}).catch((err) => {
  return err; s
})

// k :- the promise returned by the then() of J
k.then((newer_data) => {
  console.log(newer_data);
})



//************************************** */
// Shorthand :-

// --> Since we know that .then() or .catch() method returns a Promise hence, we can call the .then() on that returned Promise directly. This way we can create a long chain of .then() for every promise returned by the above .then()


// Note :- Generally we can have a chain of .then() but we just require only one .catch() at last for catching error of any type in the whole chain .(Even though .catch() also returns a Promise hence, we can get it in between of chain for no reason)


const j1 = new Promise((resolve, reject) => {
  resolve("Hiii");
})



j1.then((data) => {
  new_data = data + " Hello"
  return new_data;
}).then((newer_data) => {
  return newer_data + " Heyyy"
}).then((newest_data) => {
  console.log(newest_data);
}).catch((err) => {
  console.log(err);
})
