const button = document.querySelector("#btn")
const image = document.querySelector("#image")
button.addEventListener("click", () => {
  return (
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        console.log(json);

        image.src = json.message;
      })
  )
})


