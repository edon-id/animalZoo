// animal data
let animalData = [
  ["Lion", "./img/lion.jpg", "4"],
  ["Australian pelican", "./img/pelican.jpg", "5"],
  ["Campo flicker", "./img/flicker.jpg", "4"],
  ["Deer, Rein", "./img/deer.jpg", "5"],
  ["Panda, John", "./img/panda.jpg", "6"],
  ["Owl, Charlie", "./img/owl.jpg", "6"],
  ["Red-tailed phascogale", "./img/zebra.jpg", "7"],
  ["Greylag goose", "./img/goose.jpg", "7"],
  ["Cat, toddy", "./img/cat.jpg", "7"],
  ["Hippopotamus", "./img/hippo.jpg", "5"],
];


// I:

const boxesWrapper = document.querySelector('.boxes-wrapper')

function createBox (image, name, age) {
    const animalBox = document.createElement('div')
    animalBox.classList.add('col-6', 'col-md-3', 'text-center', 'mb-4')
    
    boxesWrapper.appendChild(animalBox)

    const innerDiv = document.createElement('div')
    innerDiv.classList.add('border', 'h-100', 'p-2')

    animalBox.appendChild(innerDiv)

    const img = document.createElement('img')
    img.classList.add('w-100')
    img.src = `${image}`

    const h2 = document.createElement('h2')
    h2.classList.add('h4', 'mt-3')
    h2.innerText = `${name}`
    
    const p = document.createElement('p')
    p.innerText = `age - ${age}`

    innerDiv.append(img, h2, p)

    return animalBox
}

function appendAllAnimalsFromArray(array){
  boxesWrapper.innerHTML = '';
  array.forEach(([nameAnimal, imgAnimal, ageAnimal]) => {
    // destructuring 

    createBox(imgAnimal, nameAnimal, ageAnimal)
  })
}

appendAllAnimalsFromArray(animalData)
// console.log(animalData);

// II:

const removeBtn = document.querySelector('#remove-all')

function removeAllBoxes() {
  boxesWrapper.innerHTML = '';
  animalData = []; 
  // or
  // animalData.length = 0
}

removeBtn.addEventListener('click', removeAllBoxes)

// III:

const addAnimal = document.querySelector('#add-animal');
const inputs = document.querySelectorAll('.modal-inputs')

function emptyInputValues() {
inputs.forEach((input) => (input.value = ''))
}

function createNewAnimalBox() {
  const values = Array.from(inputs).map((input) => input.value.trim());
 // console.log(values);
  animalData.push(values)
  appendAllAnimalsFromArray(animalData)
  // console.log(animalData);
  emptyInputValues()
}

addAnimal.addEventListener("click", createNewAnimalBox);

// IV:

const filterBtns = document.querySelectorAll('.filters .btn')

filterBtns.forEach((item) => item.addEventListener('click', filterAnimalbyAge))

function filterAnimalbyAge(e) {
  const clickedBtnAgeData = e.currentTarget.dataset.age;
  // console.log(clickedBtnAgeData);
  let filteredAnimalsByAgeResult = animalData.filter((item) => item.includes(clickedBtnAgeData))

  if (clickedBtnAgeData === 'all') {
    filteredAnimalsByAgeResult = [...animalData];
  }

  appendAllAnimalsFromArray(filteredAnimalsByAgeResult)
};