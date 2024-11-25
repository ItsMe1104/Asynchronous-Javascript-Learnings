try {
  console.log(a);
  console.log(56);
}
catch (err) {
  console.log(err);
}

console.log(39);



async function makeAsyncRequest() {
  try {
    const resObj = await fetch("https://dummyjson.com/users")
    const data = await resObj.json();
    console.log(data);
  }
  catch (err) {
    console.log(err);
    alert("Something went Wrong !!!")
  }

}

makeAsyncRequest()