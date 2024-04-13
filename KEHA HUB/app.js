
  window.addEventListener("load", function(){
    var colors = ["radial-gradient(circle, rgb(0, 255, 255) 0%, rgba(0, 0, 0, 1) 100%)",
                "radial-gradient(circle, rgba(32, 9, 83, 1) 0%, rgba(0, 0, 0, 1) 100%);",
                  "radial-gradient(circle, rgb(170, 71, 28) 0%, rgba(0, 0, 0, 1) 100%);",
                  "radial-gradient(circle, rgb(170, 28, 132) 0%, rgba(0, 0, 0, 1) 100%);"];
    var currentIndex = 0;

    function changeColor() {
      document.body.style.background = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeColor, 3000); 
  });
  function initMap() {
    
    var myLatLng = {
      lat: -33.4372,
      lng: -70.6506
    };
  
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Ubicación de KEHA-HUB'
    });
  }
  