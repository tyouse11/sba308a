export function displayImages(data) {
    clearGrid(); // Clear existing images before adding new ones
  
    if (data) {
      let imagesData = data;
      imagesData.forEach(function (imageData) {
        let image = document.createElement("img");
        // url from the image object
        image.src = `${imageData.url}`;
  
        let gridCell = document.createElement("div");
        gridCell.classList.add("col");
        gridCell.classList.add("col-lg");
        gridCell.appendChild(image);
  
        document.getElementById("grid").appendChild(gridCell);
      });
    }
  }
  
  export function clearGrid() {
    // Clear existing images in the grid
    const grid = document.getElementById("grid");
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }