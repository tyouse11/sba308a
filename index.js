import { fetchImages, displayFetchedImages } from './module.js'

// Ensures the initial load waits for the HTML document to be fully loaded before attempting to fetch and display the images
document.addEventListener("DOMContentLoaded", async function() {
    // Initial load of images
    const data = await fetchImages(15, 'all');
    displayFetchedImages(data);
});

// Event listener to trigger image loading
const loadImagesButton = document.getElementById("loadImagesButton");
const imageLimitInput = document.getElementById("imageLimitInput")
const imageTypeDropdown = document.getElementById("imageTypeDropdown");


loadImagesButton.addEventListener("click", async function() {
    const limit = imageLimitInput.value || 15
    const imageType = imageTypeDropdown.value;
    const data = await fetchImages(limit, imageType)
    displayFetchedImages(data);
});
