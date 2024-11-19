// 1) Callback Hell :-


// #) Setup :-
// --> Go to "dummyjson.com"
// --> Go to the right bar, and move around users, posts, comments section
// --> Now we have to get the details of an user with a particular comment on someone's post.
// SECTIONS :-
//#) Get a single user
//#) Get a single post
//#) Get a single comment



// Logic :-
// --> First we need to get that particular user who posted (user1)
// --> Then we need to get the post where the comment happened (post)
// --> Then we need to get that particular comment in that post (comment)
// --> Then we need to get that particular user from that comment (user2)

// Hence, one by one only we can perform the task




// #) Hence, we require :-
// user1_id --> post_id --> comment_id --> user2_id

// Hence, one id is dependent till we get the other id
// Moreover one HTTP request is dependent till we get the details from another HTTP request


// e.g :-

const xhr = new XMLHTTPRequest();
xhr.reponseType = "json";

xhr.addEventListener("load", () => {
  console.log(xhr.response.users[0].id);

  // Now make a new Request for 
  const xhr2 = new XMLHttpRequest();
  xhr2.responseType = "json"
})

xhr.open("GET", "https://dummyjson.com/users")
xhr.send();



//******************** 

// Hence, to solve this problem we make a separate function just for making XHR requests

// Constraints :-
// --> For every request we might send different type of request like "POST", "PUT", etc 
// --> For every request we might send request to diferent URL
// --> Hence, get these request_type and URL as parameters and pass them in the function


function makeHttpRequest(method, URL) {
  const xhr = new XMLHTTPRequest();
  xhr.reponseType = "json";

  xhr.addEventListener("load", () => {
    console.log(xhr.response);
  })

  xhr.open(method, URL)
  xhr.send();
}

makeHttpRequest("GET", "https://dummyjson.com/users")




//*********************************** */


// How to execute our logic using XHR Request?

// --> We have to make sure that when we get the data from one request, we pass it to get data from the other request and continue this till we get our result.
// users --> user1 --> post --> comment :: (user2)


// #) We can implement this using higher order functions and callback functions :-


// Higher Order function's part :-

// #) We know that higher order function can call the callback function whenever it wants
// #) Hence, the higher order function will call the callback function, once the first request has been made and the response has been received
// #) While calling the callback function, it will pass the received response to the callback, so that the callback function can itself make an HTTP request

function makeHttpRequest(req, url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    callback(xhr.response);
  })
  xhr.open(req, url);
  xhr.send();
}



// Callback function's part :-
// --> It should be defined as an anonymous function or arrow function during the call of higher order function
// --> The callback function will call the second higher order function (second HTTP Request for one user) inside its body with new set of data received from the first Higher Order function
// --> Similarly the callback of second Higher order function will receive the second time response from the second Higher order function
// --> Now the second higher order function will then call the third Higher Order function (third HTTP Request for post data) and pass in the data received from second Higher order function

// --> This cycle will continue till we get the required data in the last callback function and we can use it inside the last callback function's definition

makeHttpRequest("GET", "https://dummyjson.com/users", (all_user_data) => {
  makeHttpRequest("GET", 'https://dummyjson.com/users/', (user_data) => {
    makeHttpRequest("GET", `https://dummyjson.com/posts/${user_data.id}`, (post_data) => {
      makeHttpRequest("GET", `https://dummyjson.com/comments/${post_data.id}`, (comment_data) => {
        console.log(comment_data.user.fullName);
      })
    })
  })
})



// The above is called Callback Hell.



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) Disadvantages of Callback Hell :-

// a) Code readability and maintainibility
// b) Inversion of Control :- The control of our data is given to the next callback leading to a various security issue that whether that callback will call the next callback with appropriate data or not. Sometimes the subsequent callbacks are called by external APIs leading to more security issues 