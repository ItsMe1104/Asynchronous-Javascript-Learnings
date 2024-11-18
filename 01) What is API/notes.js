// Request :- It is an electromagnetic signal

// Basics :-
// --> In Browser we send an HTTP request through the URL
// --> The request is accepted or rejected by the server
// --> Whatever the response comes is turned to the UI by the browser




// HTTPS can be used to transfer various types of data like text, img, video, json, document, etc
// html data is also text and json data is also text



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


/* 1) What is JSON?

 --> Javascript object notation
--> It is similar to a JS object but somewhat different, but if we write the syntax of json in JS file then it will be treated as a JS object
--> In every key there is double quotes
--> strings in the value side should always be in double quotes.
--> It is a valid JS object
--> It is mainly used for client-side rendering


e.g :-
{
  "userId" : 1,
  "id" : 1,
  "title" : "delectus aut autem",
}
*/



// To test the json,  goto jsonplaceholder.com
// Create a JS file and use the fetch API code present in jasonplaceholder.com

// Use a google extension "JSON Viewer Pro" to get the JSON data in pretty format




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) HTTP Headers and HTTP Status Codes :-

// --> Whenever we send an HTTP request, Http aattaches various headers to the request
// --> Some Headers are :-
// #) Request URL :- (mostly GET while using URL)
// #) Request Method
// #) Status Code
// #) Remote Address
// #) Referrer Policy




// There are 4 types of requests :-
// --> Get (Read)
// --> Post (Create)
// --> Patch or PUT (Update)
// --> Delete (Delete)



// Note :- In Browsers, we can only make a Get request
// --> To test out all other requests, Download "POSTMAN" or use the online version
// --> Instead we can also use "Thunder Client" extension in VS Code



// HTTPS Status Codes :-

// 200 :- OK
// 500 :- Internal error in server
// 400 :- Bad Request (Server will not process the request due to some client error )
// 404 :- Not Found (Server cannot find the requested resource)


//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) Using Postman :-

// (Only for testing)
// --> First click the "Send a request"
// --> Choose which request we want to send (GET, POST, PATCH, DELETE)
// --> Now, enter the URL for that request
// Get the specific URL from JSON placeholder. Just copy the URL inside the fetch API and paste it in POSTMAN's URL



// #) For Get request :-
// --> Just click send, and we will get all the data in JSON format


//********************* */
// #) For Post request :-
// --> Change the Method to POST in Postman
// --> Paste the POST specific URL from json placeholder
// --> Now goto "Body" tab (just beneath URL) in Postman
// --> Click the "raw" button
// --> A rightmost dialogue box will open with default option "Text". Use "JSON"


// --> Create a JSON data
// (Note:- By default Postman creates its own id, even if we try to create our own id with name "id", it will overwrite it. Thought we can create our own id with different name like "userID")

// --> Now click the "Send Button"


// Note :- Here, even though we make a POST request, our JSON object will not be added in the jsonplaceholder's server. I we had made our own server, then it would have been added to our json

// To Actually play with real-type data :- use DOG API

//********************* */
// #) For Delete request :-
// --> Change the Method to DELETE in Postman
// --> Paste the DELETE specific URL from json placeholder
// --> Click the Send button
// --> The prebuilt id for the object to be deleted must be present in the URL




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) Using ThunderClient for testing API's

// --> Install the extension "Thunder Client" in VS Code.
// --> Its just like Postman's copy inside VS Code
// --> Use the new request button
// --> Similar to Postman, all the functions can be used
// --> Here, for POST request, inside BODY tab (beneath URL), we will directly get JSON option
// --> Here also default "id" is itself created




// **********************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 5) API :-

// API :-
// General Terms :- URL provied to talk to diferent websites





// What is an API?

// --> Application Programming Interface

// For e.g :- In Zomato, Uber, Ola we see a map and get the loaction of our driver
// --> But these companies haven't put their satellites in space
// --> Hence these companies mostly use maps from GOOGLE MAPS system
// --> But for security purpose Zomato or UBER directly cannot access the data from Google Maps.
// --> In between there is a security layer called Google Maps API
// --> Hence, Uber / Zomato, requests Google Maps for their data via API over the network

// --> Hence and API is like a messenger which can transfer data from one place to the other
// --> It is a mechanism through which two apps are sharing data over the network is called application programming interface




// For e.g :- Sometimes for an app a frontend can be written in JS while the backend can be written in Python.
// --> How will both the systems communicate?
// --> Hence this problem is solved using two ways :-
// --> a) By deciding the protocol
// --> b) By deciding what data we want to send


// --> Sometimes even in the same page, a video player can be written in python, comment button in js, while the like button in ruby on rails
// --> Hence these also need to communicate


// --> These problem is soled using API
// --> It provides a protocol as well as the data we want to send or receive






// #) Types of API structures

// a) SOAP (Simple Object Access Protocol) :-
// --> It used to transfer data in form of XML, hence was very secure and highly available
// --> It was little heavy and took extra time to transfer data


// --> REST (Representational State Transfer) :-
// --> Basically based on Client Server Architecture
// --> It used json to transfer data
// --> It was fast and light weight


// --> GraphQL
// --> To avoid extra data and not waste the bandwidth
// --> It gives the power to the client to get the data by just sending a query and getting the exact needed data
// --> It helps in Network and Space Optimization


// --> GRPC
// --> It is faster than REST


// --> Web sockets or Socket.io
// --> Two way communication where the server can also send data to the client independently
// --> e.g :- without updating the browser, the score card gets updated

