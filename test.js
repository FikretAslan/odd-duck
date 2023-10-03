// make sure the user has only 25 clicks

let userClicks = 0;
let maxClicks = 25;

// constructor that makes product objects

function Product(name) {
  this.name = name;
  this.src = `./Asset/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
}

// function that randomly gets an index for an item in item
const allDuckProducts =  [
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






function randomProdIdx () {
  return Math.floor(Math.random() * products.length);
}

// make a function that puts 3 random objects on page

// function to render 3 random products
function renderProducts() {
  // get 3 random indexes from our product array
  let prod1Index = getRandomIndex();
  let prod2Index = getRandomIndex();
  let prod3Index = getRandomIndex();
// prevent the two images being the same
while (prod1Index === prod2Index || prod1Index === prod3Index || prod2Index === prod3Index)
  prod2Index = getRandomIndex();
  prod3Index = getRandomIndex();



// increase view of objects



// handle what happens when click

// 'clicks property' of image clicked

// render 3 new image

// each image will have an event listener

// a button to view results
