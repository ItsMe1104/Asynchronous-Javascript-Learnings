// 1) Higher Order Functions :-
// --> Whenever we return a function from inside other function or we pass a function in the argument of a function or both

function a(b) {
  console.log(typeof b);
  console.log(b);
  console.log("\n");

}

a("Hiii");
a({ username: "Hrihik", userAge: 24 })
a(['a', 2, 3, "hi"])


// Note :- Only functions can be called, any other primitive or objects getting called will result in error.
// 234()        :- error
// Hiii()       :- error
// undefined()  :- error
// {a : 123}()  :- error 



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) console.dir()

// --> If the element passed is an object it will print it in the form of an object, but if the element is a primitive type, it will print it as it is.

console.log(a);  // will not give the function as object
console.dir(a); // will print the function as an object


// Note :- All strings and numbers are primitive types in JS

console.dir(234)            //234
comsole.dir("Hiii")         //Hiii

// JS has some inbuilt objects/constructor function named as Number and String

console.dir(Number);    //object
console.dir(String);    //object


// Hence, functions are also objects
// --> We can also add our key value pairs, which will not interfere with the working of the function

a.age = 24;
console.log(a.age);


// Actually function is just an object with some more functionalities which help us to make it behave like a function





//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Some notes about function :-

// --> The names that we give to any function is merely just pointing to the memory location where the function is present

// --> If we try to copy a function to some other function, then it will be a deep copy

// --> Hence, every changes in the function prototype we do in the copy will also be reflected in the original function's prototypeS


// e.g :-

function fun1() {
  console.log("This is function 1");
}

const fun2 = fun1;
fun2.naam = "Hrithik"

console.log(fun2.naam);    // Hrithik
console.log(fun1.naam);    // Hrithik





// Note in function calls, we can give as many spaces as we want in between the name and the parantheses

// fun1()              //valid
// fun1 ()             //valid
// fun1       ()       //valid


//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) Callback function :-

// --> The function that we pass in the argument of some other function 

// --> Majorly the control to call or modify the prototype of the passed function is with the function whose argument was used. (Higher Order Function)

// --> Hence, Higher Order Function is responsible for calling that passed function whenever it requires. Hence, that passed function is named as callback function 






// Higher Order Function :-

// --> The function in whose argument we pass another function and that function is responsible for calling that passed function is called higher order function.

// --> Whenever we try to make a Higher Order Function, we always make sure that some function is passed in its argument




// Higher Order Fn :-
function abc(jkl) {
  console.dir(jkl)
  jkl.age = 95;
  jkl();

  console.log("Called jkl()");
}


// Callback function 
function jkl() {
  console.log("I am function jkl");
}

abc(jkl);

console.log(jkl.age);    //modified by higher order function




//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Anonymous Function :-

// --> Mostly anonymous functions are used instead of normal functions to be used as callback functions. Mostly used in map(), filter(), reduce()

// --> Anonymous functions dont have a name and their body is defined in the argument itself

// --> Since they do not have a name, hence nothing is pointing their memory location



// Higher Order Function
function f1(a) {
  console.log(a);
  a();
}

// Callback Function
fun1(function () {
  console.log("I am anonymous function")
})
