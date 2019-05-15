const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', getAllThings())

function getAllThings() {
  getAllDogs()
  getAllBreeds()
}

function getAllDogs(){
  fetch(imgUrl)
  .then(res=>res.json())
  .then(dogs => {
    // debugger
    dogs["message"].forEach(printer)
  })
}

function getAllBreeds() {
  fetch(breedUrl)
  .then(res => res.json())
  .then(dogs => {
    breedLogger(dogs)
    })
}

//DOM manipulation function
function printer(dog){
  let bigList = document.getElementById("dog-image-container")
  // debugger
  let dogEntry = document.createElement("img")
  dogEntry.src = dog
  // debugger
  bigList.appendChild(dogEntry)
}

function breedLogger(dogs) {
  for (const key in dogs["message"]) {
    makeBreedList(key)
  }
}

function makeBreedList(key) {
  let bigMoneyMoves = document.getElementById("dog-breeds")
  let li = document.createElement("li")
  li.innerText = key
  li.addEventListener('click', someOtherFunkyBoi)
  bigMoneyMoves.appendChild(li)
}

//well, we just told the code to listen for a client's click
// and addEventListener takes 2 arguments, the second one being the function we want to have something happen when the user clicks

function someOtherFunkyBoi(event){
  console.log("I got a bad feeling 'bout this, Rick...")
event.target.style.color = "firebrick"
}
