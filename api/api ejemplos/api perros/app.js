document.addEventListener('DOMContentLoaded', function () {
    const dogImage = document.getElementById('dogImage');
    const getRandomDogButton = document.getElementById('getRandomDog');

    getRandomDogButton.addEventListener('click', function () {
        getRandomDog();
    });
    
    function getRandomDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {

                dogImage.src = data.message;
            })
            .catch(error => {
                console.error('Error al obtener el perro:', error);
            });
    }


    getRandomDog();
});
