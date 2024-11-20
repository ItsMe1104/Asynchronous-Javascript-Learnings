
setTimeout(() => {
  console.log("Hiii");
}, 0);

const p9 = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
})


const p10 = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
})


p9.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err)
})


p10.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err)
})



//Output :-
// Promise Resolved
// Promise Resolved
// Hiii



// Conclusion :-
// Even though setTimeout() callback was registered first in callback queue and both the promises got registered in the microtask queue
// But when the Call Stack got empty, both the setTimeout() callback and the promise callbacks were waiting
// Since, micro task queue has higher priority, hence both the promise callbacks got executed first and then the setTimeout callback
