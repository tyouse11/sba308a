const dog = document.getElementById('dog');
const baseUrl = `https://dog.ceo/api/breeds/image/random`;
const api_key = "live_M5iSn1Ms9iVph8qjvE9WPWl9A1N6FX5NzmmFXoE8qFpSycE7BRo2XSwtUHV10VjT";

dog.addEventListener("click", getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch(baseUrl);
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';

    // POST request
    const postData = {
        breed: 'dog',
        imageUrl: url,
    };

    sendPostRequest(postData);
}

async function sendPostRequest(data) {
    try {
        const response = await fetch('baseUrl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('POST request successful:', responseData);
    } catch (error) {
        console.error('Error during POST request:', error);
    }
}

getNewDog()