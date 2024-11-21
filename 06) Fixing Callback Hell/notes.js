
// Important Recap :-

// --> If we return a normal value in then(), the then() creates a new Promise, wraps the returned data in the "PromiseResult" of that new Promise and returns it. Automatically, the value in the "Promise Result" is received in the argument of next then()
// --> But if we return a Promise in itself, then the then() simply returns that promise without creating a new one. The PromiseResult value of that returned promise is received as an argument in the next then()



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 1) How to fix Callback Hell :-


// a) CREATING PROMISE :-

// --> Instead of using callbacks, we will use Promises
// --> We will try to define a function sunch that it will take care of sending requests, by taking the request_type and URL as parameter
// --> Inside that function, we will create the XHR request
// --> We will use the open() and send() to send the request using the required request_type and URL
// --> To receive the data, we will use a promise and inside its callback function will receive the data and resolve the response
// --> Inside the Promise, we will use the addEventListener() on xhr to know when we get the response and then resolve() the response inside the EventListener only
// --> On resolving, the response now can be received in the argument of the then()
// --> IMPORTANT :- We need to return the Promise that we created from the function else we cannot put a .then() into it


// Reality :- This function will be inbuilt and given by Browser. Hence, we dont need to create it. That is the ferch() API



function makeHttpRequest(req, URL) {

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json"

  xhr.open(req, URL);

  // Remember Promise should be a property of function so that we can return it and not of the EventListener 
  const p = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    })
    return p;
  })
}



// CONSUMING PROMISE :-

// --> Since we know, that the makeHTTPRequest() is returning a promise, we can add a .then() to it
// --> Since we know, that the then() will receive an argument from the resolve(), hence we will use that argument in then() callback
// --> Now we will again call the makeHTTPRequest() function for second request.
// --> Since the function will again return a promise, we will return the function itself from the .then(), so that the "PromiseResult" value of this second function call's promise can be used as an argument in the next then()
// --> This process continues till we get our required data 


makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((all_user_data) => {
    return makeHttpRequest("GET", `https://dummyjson.com/users/${all_user_data.users[5].id}`)
  })
  .then((user_data) => {
    return makeHttpRequest("GET", `https://dummyjson.com/posts/${user_data.id}`)
  })
  .then((post_data) => {
    return makeHttpRequest("GET", `https://dummyjson.com/comments/${post_data.id}`)
  })
  .then((comment_data) => {
    console.log(comment_data.user.fullName);
  })



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// 2) Error Handling :-

// --> If we get any error in place of response, then we have to handle it.
// --> To handle it we will use the event "error"
// --> We will again add an eventListener in XHR oject just like we did with the "load" event
// --> Inside that event we will call the reject()


function makeHttpRequest(req, URL) {

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json"
  xhr.open(req, URL);

  const p = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    })

    xhr.addEventListener("error", (err) => {
      reject(err);
    })
  })


  return p;
}



// Also while consuming the proomise using promise chaining, we have to catch the error

// While making a promise chain of .then(), we will add a .catch() at the end which will receive the argument passed by reject()  to display the error  


makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((all_user_data) => {
    return makeHttpRequest("GET", `https://dummyjson.com/users/${all_user_data.users[5].id}`)
  })
  .then((user_data) => {
    return makeHttpRequest("GET", `https://dummyjson.com/posts/${user_data.id}`)
  })
  .then((post_data) => {
    return makeHttpRequest("GET", `https://dummyjson.com/comments/${post_data.id}`)
  })
  .then((comment_data) => {
    console.log(comment_data.user.fullName);
  })
  .catch((err) => {
    console.log(err);
  })
