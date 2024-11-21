// GET :-

fetch('https://dummyjson.com/users')
  .then((responseObj) => {
    return responseObj.json();
  })
  .then(console.log)
  .catch((err) => {
    console.log(err);
  })



// POST (with error handling) :-

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
  .then((responseData) => {
    return responseData.json();
  })
  .then(console.log)
  .catch((err) => {
    console.log(err);

  })


