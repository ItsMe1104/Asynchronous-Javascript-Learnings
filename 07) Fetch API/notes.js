
// --> Now a days, we don't use the XMLHttpRequest()
// --> We use the fetch() API




//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 1) fetch() API

// --> It is a function provide by the Browser and not by core JS
// --> We need to pass one compulsary argument in fetch(), called the URL in string
// --> It returns a promise, which is initially pending but its state is automaticlly updated by the Browser once the response is received
// --> The response is stored in the PromiseResult key. The response is not purely in JSON format

fetch("https://www.dummyjson.com/products")



//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Response from the fetch() API

// --> The "PromiseResult" value from the returned promise of the fetch() API is not a perfect JSON or object or dtring, etc
// --> The value is in form of Response Object
// --> This is because when the response comes, there are mainly two components, data which is called body and Headers
// --> Sometimes the Headers come before the data (body) and hence the Promise gets resolved
// --> Hence, on attaching .then(), we won't get the actual data in the argument but just the Response object.




// #) Solution :-
// --> We can use a method in the Response Object called .json()
// --> It also returns a promise but in that returned promise we get the actual data in the "PromiseResult"
// --> Hence, we can attach another .then() and get the value of the PromiseResult of the in its argument





// MECHANISM :-

// --> Since, the fetch() API returns a promise, hence a .then() can be used to get the Response object.
// --> Then we can return the promise returned by ResponseObject.json()
// --> We can consume it using another .then(), whose argument will contain the actual data


fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')
  .then((responseObj) => { return responseObj.json(); })
  .then((data) => { console.log(data); })




  // Shorthand to Print data in the last .then() using console.log()
  // --> No need for any callback or any parantheses beside console.log() 

  .then(console.log)



//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Error Handling using fetch() :-

// --> Just use a .catch() at the last of the chain and use the argument to print in console

fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')
  .then((responseObj) => { return responseObj.json(); })
  .then((data) => { console.log(data); })
  .catch((err) => { console.log(err); })




// ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 4) Sending different requests using fetch()

// --> Using fetch() API, we can send different types of requests including PUT, PATCH, DELETE, etc
// --> We can send the request but the URL and the server/backend should also support that
// --> By-default the request type is "GET"





// To cahnge the request type :-

// ==> We pass a second argument in the fetch() API
// ==> It is an object with atleast one key named "method", and the value should be the type of request as a string in caps.

fetch("URL", {
  method: "DELETE"
})

// ==> For different type of requests, there might be extra properties required in the object
// ==> For PUT or PATCH request, a body property is required where the data might be sent 
// ==> The data is mostly send as a String, therefore we have to use JSON.stringify()
// ==> Sometimes, we also need to send headers property during POST or PATCH request
// ==> The headers property contains a property called "Content-Type" (in string) and the value is mostly "application/json"
// ==> Though headers are optional and only required if the backend wants


fetch("URL", {
  method: "POST",
  body: JSON.stringify({
    title: "ABCD",
    category: "Dance"
  }),

  headers: {
    'Content-Type': "application/json"
  },

})

