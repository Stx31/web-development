document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.getElementById('catImage');
    const newCatButton = document.getElementById('newCatButton');

    async function fetchCatImage() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            catImage.src = data[0].url;
        } catch (error) {
            console.error('Error fetching cat image:', error);
        }
    }

    newCatButton.addEventListener('click', fetchCatImage);

    fetchCatImage();
});
