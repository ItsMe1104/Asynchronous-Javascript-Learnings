const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
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
}
);



function makeHttpRequest(req, url) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.open(req, url);
  xhr.send();

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response)
    })

  })
  return promise;
}




