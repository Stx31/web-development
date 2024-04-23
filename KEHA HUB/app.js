function iniciarMap() {
  const santander = { lat: 43.4623, lng: -3.8099 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: santander, 
  });
  const marker = new google.maps.Marker({
    position: santander, 
    map: map, 
    title: "Santander, España", 
  });
}
