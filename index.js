import { fetchAndDisplayImages } from './module.js';

const loadImagesButton = document.getElementById("loadImagesButton");
const imageLimitInput = document.getElementById("imageLimitInput");
const imageTypeDropdown = document.getElementById("imageTypeDropdown");

loadImagesButton.addEventListener("click", function() {
  const limit = imageLimitInput.value || 15;
  const imageType = imageTypeDropdown.value; // Get the selected image type
  fetchAndDisplayImages(limit, imageType);
});

// Initial load of images
fetchAndDisplayImages();