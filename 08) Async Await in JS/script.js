async function makeHTTPRequest() {
  const resObj = await fetch('https://dummyjson.com/users')
  const data = await resObj.json();
  console.log(data);
}


makeHTTPRequest();
console.log("Called function 1");



// or
async function makeHTTPRequest2() {
  const resObj = await fetch('https://dummyjson.com/users')
  const data = await resObj.json();
  return data;
}


makeHTTPRequest().then((data) => {
  console.log(data);
})
console.log("Called function 2");

