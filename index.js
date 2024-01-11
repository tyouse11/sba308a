// import 
import { fetchAndDisplayImages } from './reload.js'


// Event listener to trigger image loading
const loadImagesButton = document.getElementById("loadImagesButton");
const imageLimitInput = document.getElementById("imageLimitInput")

loadImagesButton.addEventListener("click", function() {
    const limit = imageLimitInput.value || 15
    fetchAndDisplayImages(limit)
});



// Initial load of images
fetchAndDisplayImages();