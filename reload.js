// imageModule.js
export async function fetchAndDisplayImages(imageLimit) {
    const url = `https://api.thedogapi.com/v1/images/search?limit=${imageLimit || 15}`;
    const api_key = "live_M5iSn1Ms9iVph8qjvE9WPWl9A1N6FX5NzmmFXoE8qFpSycE7BRo2XSwtUHV10VjT";
  
    try {
      const response = await fetch(url, {
        headers: {
          "x-api-key": api_key,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      clearGrid(); // Clear existing images before adding new ones
  
      let imagesData = data;
      imagesData.map(function (imageData) {
        let image = document.createElement("img");
        // url from the image object
        image.src = `${imageData.url}`;
  
        let gridCell = document.createElement("div");
        gridCell.classList.add("col");
        gridCell.classList.add("col-lg");
        gridCell.appendChild(image);
  
        document.getElementById("grid").appendChild(gridCell);
      });
    } catch (error) {
      console.error("Oh no, something went wrong!", error);
    }
  }
  
  export function clearGrid() {
    // Clear existing images in the grid
    const grid = document.getElementById("grid");
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  }
  