console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', getAllDogs())

function getAllDogs(){
  fetch(imgUrl)
  .then(res=>res.json())
  .then(dogs => {
    // debugger
    dogs["message"].forEach(printer)
  })
}
//DOM manipulation function
function printer(dog){
  let bigList = document.getElementById("dog-breeds")
  // debugger
  let dogEntry = document.createElement("img")
  dogEntry.src = dog
  // debugger
  bigList.appendChild(dogEntry)
}
