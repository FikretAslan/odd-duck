// DOM Nodes
let duckContainer = document.querySelector(".duckContainer");
let image1 = document.querySelector(".Image1");
let image2 = document.querySelector(".Image2");
let image3 = document.querySelector(".Image3");

// user clicks 25

let userClicks = 0;
let maxClicks = 25;

// keep each product in an object
function duckProd(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

// function to choose a random product
function getRandomIndex() {
  return Math.floor(Math.random() * allDuckProducts.length);
}

// function to render 3 random products
function renderProducts() {
  // get 3 random indexes from our product array
  let prod1Index = getRandomIndex();
  let prod2Index = getRandomIndex();
  let prod3Index = getRandomIndex();

  // prevent the two images being the same
  while (
    prod1Index === prod2Index ||
    prod1Index === prod3Index ||
    prod2Index === prod3Index
  ) {
    prod2Index = getRandomIndex();
    prod3Index = getRandomIndex();
  }
  // change the src of our 3 images
  image1.src = allDuckProducts[prod1Index].src;
  image2.src = allDuckProducts[prod2Index].src;
  image3.src = allDuckProducts[prod3Index].src;
  image1.alt = allDuckProducts[prod1Index].name;
  image2.alt = allDuckProducts[prod2Index].name;
  image3.alt = allDuckProducts[prod3Index].name;

  // increase the views
  allDuckProducts[prod1Index].views++;
  allDuckProducts[prod2Index].views++;
  allDuckProducts[prod3Index].views++;
}

// handle being clicked
function handleprodClick(event) {
  // get the name of the prod we just clicked
  let clickedProd = event.target.alt;

  // check if the click is on an image
  if (event.target === duckContainer) {
    alert("Please click on an image");
  } else {
    // render more
    renderProducts();
  }

  // increase the clicks of the prod
  // loop through allDuckProducts
  for (let i = 0; i < allDuckProducts.length; i++) {
    // check if the name of the prod in the array, matches the alt tag of our image
    if (clickedProd === allDuckProducts[i].name) {
      // increase the number of clicks
      allDuckProducts[i].clicks++;
      // stop the for loop because we found the prod
      break;
    }
  }
}

// make the products
const allDuckProducts = [
  new duckProd("bag", "./Asset/bag.jpg"),
  new duckProd("banana", "./Asset/banana.jpg"),
  new duckProd("bathroom", "./Asset/bathroom.jpg"),
  new duckProd("bubblegum", "./Asset/bubblegum.jpg"),
  new duckProd("chair", "./Asset/chair.jpg"),
  new duckProd("cthulhu", "./Asset/cthulhu.jpg"),
  new duckProd("dog-duck", "./Asset/dog-duck.jpg"),
  new duckProd("dragon", "./Asset/dragon.jpg"),
  new duckProd("pen", "./Asset/pen.jpg"),
  new duckProd("pet sweep", "./Asset/pet-sweep.jpg"),
  new duckProd("scissors", "./Asset/scissors.jpg"),
  new duckProd("shark", "./Asset/shark.jpg"),
  new duckProd("sweep", "./Asset/sweep.png"),
  new duckProd("tauntaun", "./Asset/tauntaun.jpg"),
  new duckProd("unicorn", "./Asset/unicorn.jpg"),
  new duckProd("water can", "./Asset/water-can.jpg"),
  new duckProd("wine glass", "./Asset/wine-glass.jpg"),
];

// add the event listener
duckContainer.addEventListener("click", handleprodClick);

renderProducts();

image1.addEventListener("click", handleprodClick);
image2.addEventListener("click", handleprodClick);
image3.addEventListener("click", handleprodClick);

function showResults() {
  const results = document.getElementById("results");

  // loop through products and make an li for each one

  for (let i = 0; i < allDuckProducts.length; i++) {
    const li = document.createElement("li");
    const products = allDuckProducts[i];
    li.textContent = `${products.name} was viewed ${products.views} times and clicked ${products.clicks} times`;
    viewResults.appendChild(li);
  }
}

const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderProducts();
