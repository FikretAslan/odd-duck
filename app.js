// DOM Nodes
let duckContainer = document.querySelector("duckContainer");
let image1 = document.querySelector("Image1");
let image2 = document.querySelector("Image2");
let image3 = document.querySelector("Image3");

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
  while ((prod1Index === prod2Index) === prod3Index) {
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

  // increase the goats views
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
    renderProd();
  }

  // increase the clicks of the prod
  // loop through allDuckProducts
  for (let i = 0; i < allDuckProducts.length; i++) {
    // check if the name of the prod in the array, matches the alt tag of our image
    if (clickedProd === allDuckProducts[i].name) {
      // increase the number of clicks
      allGoats[i].clicks++;
      // stop the for loop because we found the prod
      break;
    }
  }
}

// make the products
const duckProd = [
  new Prod("bag", "./Asset/bag.jpg"),
  new Prod("banana", "./Asset/banana.jpg"),
  new Prod("bathroom", "./Asset/bathroom.jpg"),
  new Prod("bubblegum", "./Asset/bubblegum.jpg"),
  new Prod("chair", "./Asset/chair.jpg"),
  new Prod("cthulhu", "./Asset/cthulhu.jpg"),
  new Prod("dog-duck", "./Asset/dog-duck.jpg"),
  new Prod("dragon", "./Asset/dragon.jpg"),
  new Prod("pen", "./Asset/pen.jpg"),
  new Prod("pet sweep", "./Asset/pet-sweep.jpg"),
  new Prod("scissors", "./Asset/scissors.jpg"),
  new Prod("shark", "./Asset/shark.jpg"),
  new Prod("sweep", "./Asset/sweep.png"),
  new Prod("tauntaun", "./Asset/tauntaun.jpg"),
  new Prod("unicorn", "./Asset/unicorn.jpg"),
  new Prod("water can", "./Asset/water-can.jpg"),
  new Prod("wine glass", "./Asset/wine-glass.jpg"),
];

// add the event listener
prodContainer.addEventListener("click", handleprodClick);

renderProd();
