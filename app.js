// DOM Nodes
const context = document.getElementById("myChart");
let duckContainer = document.querySelector(".duckContainer");
let image1 = document.querySelector(".Image1");
let image2 = document.querySelector(".Image2");
let image3 = document.querySelector(".Image3");
const productNames = [];
const productViews = [];
const productClicks = [];

// user clicks 25

let userClicks = 0;
const maxClicks = 25;

const allDuckProducts = [];

// keep each product in an object
function duckProd(name, views, clicks) {
  this.name = name;
  this.src = `./Asset/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;

  allDuckProducts.push(this);
}

// make the products
if (localStorage.getItem("allDuckProducts") === null) {
  new duckProd("bag", 0, 0);
  new duckProd("banana", 0, 0);
  new duckProd("bathroom", 0, 0);
  new duckProd("bubblegum", 0, 0);
  new duckProd("chair", 0, 0);
  new duckProd("cthulhu", 0, 0);
  new duckProd("dog-duck", 0, 0);
  new duckProd("dragon", 0, 0);
  new duckProd("pen", 0, 0);
  new duckProd("pet-sweep", 0, 0);
  new duckProd("scissors", 0, 0);
  new duckProd("shark", 0, 0);
  new duckProd("sweep", 0, 0);
  new duckProd("tauntaun", 0, 0);
  new duckProd("unicorn", 0, 0);
  new duckProd("water-can", 0, 0);
  new duckProd("wine-glass", 0, 0);
} else {
  const productsLS = JSON.parse(localStorage.getItem("allDuckProducts"));
  for (let i = 0; i < productsLS.length; i++) {
    new duckProd(productsLS[i].name, productsLS[i].views, productsLS[i].clicks);
  }
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
    prod1Index = getRandomIndex();
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
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    localStorage.setItem("allDuckProducts", JSON.stringify(allDuckProducts));
    return;
  }

  userClicks++;

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

// add the event listener
// duckContainer.addEventListener("click", handleprodClick);

renderProducts();

image1.addEventListener("click", handleprodClick);
image2.addEventListener("click", handleprodClick);
image3.addEventListener("click", handleprodClick);

// function showResults() {
//   const results = document.getElementById("results");

//   // loop through products and make an li for each one

//   for (let i = 0; i < allDuckProducts.length; i++) {
//     const li = document.createElement("li");
//     const products = allDuckProducts[i];
//     li.textContent = `${products.name} was viewed ${products.views} times and clicked ${products.clicks} times`;

//     viewResults.appendChild(li);
//     productNames.push(products.name);
//     productViews.push(products.views);
//     productClicks.push(products.clicks);
//   }
//   new Chart(context, {
//     type: "bar",
//     data: {
//       labels: productNames,
//       datasets: [
//         {
//           label: "# of clicks",
//           data: productClicks,
//           borderWidth: 1,
//         },
//         {
//           label: "# of views",
//           data: productViews,
//           borderWidth: 1,
//         },
//       ],
//     },
//   });
// }
const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderProducts();

// function to create a new chart

// chart
