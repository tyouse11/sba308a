
export async function fetchAndDisplayImages() {
  const url = `https://api.thedogapi.com/v1/images/search?limit=21`;
  const api_key = "live_M5iSn1Ms9iVph8qjvE9WPWl9A1N6FX5NzmmFXoE8qFpSycE7BRo2XSwtUHV10VjT";
  fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      clearGrid(); // Clear existing images before adding new ones

      let imagesData = data;
      imagesData.map(function (imageData) {
        let image = document.createElement("img");
        // use the url from the image object
        image.src = `${imageData.url}`;

        let gridCell = document.createElement("div");
        gridCell.classList.add("col");
        gridCell.classList.add("col-lg");
        gridCell.appendChild(image);

        document.getElementById("grid").appendChild(gridCell);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function clearGrid() {
  // Clear existing images in the grid
  const grid = document.getElementById("grid");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

// Add a button click event listener to trigger image loading
const loadImagesButton = document.getElementById("loadImagesButton");
loadImagesButton.addEventListener("click", fetchAndDisplayImages);

// Initial load of images
fetchAndDisplayImages();
