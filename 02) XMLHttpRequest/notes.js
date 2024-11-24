
// 1) XHR request :-

// --> Whenever we call a function using "new", it returns an object
// --> An XMLHttpRequest() is also a function but it has been restrictred that it can only be called using "new" keyword
// --> It returns an object through which we can make an HTTP request
// --> Always store that object in a variable


const xhr = new XMLHttpRequest();

// Note :- Although its name is XML but this XML format was used in older times when data was not transferred using json format. Now this XML name is just added for historical reasons although XML can also be transferred using this




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Sending request using XMLHttpRequest()

// --> The object that we stored, has two methonds (open() and send())

// a) --> open("x","y") :- It is used to setup the request
// x :- type of request (GET, POST, PATHC, PUT, DELETE, etc)
// y :- URL we want to request


// b) --> send() :- It is used to send the request


xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
xhr.send()

// NOTE :- By Default the name of the request should be in CAPS




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) Response in XHR request :-

// --> Generally, the response that we get from the API, is stored in the "response" key of the XHR object





// --> Constrains :-
// a) The response is received as a string


// ==> Solution :-
// --> i) JSON.parse(a)
// --> a = JSON string


// --> ii) xhr.responseType = "json"
// --> just update the "responseType" key of xhr object to "json"
// NOTE :- It should be done before using send() to send the request


//************** */

// b) The data in response comes really slow for slow API's, hence we should make sure that we use the "response" key for the UI or other calculations only once the data has been stored in the "response" key

// ==> Solution :-
// --> i) Add an event listener in xhr and use the response data only when it has been "loaded"
// --> Since the Event listeners work on DOM elements, but an DOM element is an object at the end, hence event listener will also work on objects like xhr

xhr.addEventListener("load", () => {
  image.src = xhr.response.message;
})


// --> ii) Use "onload" key of xhr object
// --> initialize it with an arrow function, and inside that function write the logic function

xhr.onload = () => {
  image.src = xhr.response.message;
}



//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 4) Making Synchronous API request using CRH request :-

// --> In the second argurment of .open(), pass false
// --> It will become a synchronize request, and it will block the main thread till we actually get the response back


xhr.open("GET", "https://dog.ceo/api/breeds/image/random", false)
xhr.send()