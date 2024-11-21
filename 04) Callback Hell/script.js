const btn2 = document.querySelector("#btn2")

btn2.addEventListener("click", () => {
  makeHttpRequest("GET", "https://dummyjson.com/users", (all_user_data) => {
    makeHttpRequest("GET", `https://dummyjson.com/users/${all_user_data.users[5].id}`, (user_data) => {
      makeHttpRequest("GET", `https://dummyjson.com/posts/${user_data.id}`, (post_data) => {
        makeHttpRequest("GET", `https://dummyjson.com/comments/${post_data.id}`, (comment_data) => {
          console.log(comment_data.user.fullName);
        })
      })
    })
  })

})



function makeHttpRequest(req, url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    callback(xhr.response);
  })
  xhr.open(req, url);
  xhr.send();
}







