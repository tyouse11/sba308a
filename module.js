import { displayImages } from './display.js';

export async function fetchImages(imageLimit, imageType) {
  const base_url = `https://api.thedogapi.com/v1/images/search?limit=${imageLimit || 15}`;
  const api_key = "live_M5iSn1Ms9iVph8qjvE9WPWl9A1N6FX5NzmmFXoE8qFpSycE7BRo2XSwtUHV10VjT";
 
  let constructedUrl;
  const lowerCaseImageType = imageType.toLowerCase();

  if (lowerCaseImageType === 'gifs') {
    constructedUrl = `${base_url}&mime_types=image/gif`;
  } else if (lowerCaseImageType === 'pictures') {
    constructedUrl = `${base_url}&mime_types=image/jpeg,image/png`;
  } else {
    constructedUrl = base_url;
  }

  try {
    const response = await fetch(constructedUrl, {
      headers: {
        "x-api-key": api_key,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Oh no, something went wrong!", error);
    return null;
  }
}

export function displayFetchedImages(data) {
  displayImages(data);
}

export async function updateData(data, resourceId) {
  const apiUrl = `https://api.thedogapi.com/v1/images/search?limit=${imageLimit || 15}`;
  const api_key = "live_M5iSn1Ms9iVph8qjvE9WPWl9A1N6FX5NzmmFXoE8qFpSycE7BRo2XSwtUHV10VjT";

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': api_key,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during PUT request:', error);
    return null;
  }
}