
function initMap() {
    var storeLocation = { lat: 19.432608, lng: -99.133209 }; 

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: storeLocation,
       
    });

    var marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: 'One Store - Nuestra ubicación'
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        event.preventDefault(); 
    }
});
