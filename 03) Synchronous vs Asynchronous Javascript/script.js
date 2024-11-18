const button = document.querySelector("#btn")
const image = document.querySelector("#image")
button.addEventListener("click", () => {

  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);

  //     image.src = json.message;
  //   })


  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
  xhr.send()

  // xhr.addEventListener("load", () => {
  //   console.log(xhr.response);
  //   image.src = xhr.response.message;
  // })

  xhr.onload = () => {
    console.log(xhr.response);
    image.src = xhr.response.message;
  }
})


const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  let startTime = Date.now();
  let currentTime = startTime;

  while (startTime + 4000 > currentTime) {
    currentTime = Date.now();
  }
})
