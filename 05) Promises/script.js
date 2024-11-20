const btn1 = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

const p = new Promise((resolve, reject) => {

  // resolve button
  btn1.addEventListener("click", () => {
    resolve("Promise Fulfilled")
  })

  // reject button
  btn2.addEventListener("click", () => {
    reject("Promise Rejected")
  })
})
