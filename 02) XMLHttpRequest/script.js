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
  console.log(xhr);


  xhr.open("GET", "https://dog.ceo/api/breeds/image/random")
  xhr.send()

  

})
