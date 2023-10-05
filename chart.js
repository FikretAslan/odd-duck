const productNames = [];
const productViews = [];
const productClicks = [];

function showResults() {
  const allDuckProducts = JSON.parse(localStorage.getItem("allDuckProducts"));
  const context = document.getElementById("myChart");

  // loop through products and make an li for each one

  for (let i = 0; i < allDuckProducts.length; i++) {
    productNames.push(allDuckProducts[i].name);
    productViews.push(allDuckProducts[i].views);
    productClicks.push(allDuckProducts[i].clicks);
  }
  new Chart(context, {
    type: "bar",
    data: {
      labels: productNames,
      datasets: [
        {
          label: "# of clicks",
          data: productClicks,
          borderWidth: 1,
        },
        {
          label: "# of views",
          data: productViews,
          borderWidth: 1,
        },
      ],
    },
  });
}

showResults();
