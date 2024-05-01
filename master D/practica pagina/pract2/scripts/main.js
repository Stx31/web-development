window.addEventListener('load', event => {
//FORM
const name = document.getElementById("fname");
const email = document.getElementById("mail");
const tlf = document.getElementById("tlf");

name.addEventListener("input", function (event) {
if (name.validity.typeMismatch) {
    name.setCustomValidity("Debes introdocir un nombre");
} else {
    name.setCustomValidity("");
}
});
email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Debes introdocir un email correcto");
    } else {
      email.setCustomValidity("");
    }
  });
tlf.addEventListener("input", function (event) {
    if (tlf.validity.typeMismatch) {
        tlf.setCustomValidity("Debes introdocir un telefono correcto");
    } else {
        tlf.setCustomValidity("");
    }
});

  // SECTION PLACES
  // Select
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

  // JSON
  const myList = document.querySelector('.places__container');

  const myRequest = new Request('data.json');
  let selectedCity = "";

  createGrid();
  /* <li class="col s12 m6 l4">
         <div class="places__img-container">
           <img class="places__img" src="img/foto3.png" alt="icono dispositivos" />
     </li>*/

  function createGrid() {
    myList.innerHTML = "";

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {
        for (const product of data.places) {
          console.log(selectedCity)

          if (product.City == selectedCity || !selectedCity) {

            let listItem = document.createElement('li');

            let listItemContainer = document.createElement('div');

            listItem.appendChild(listItemContainer);

            listItemContainer.appendChild(
              document.createElement('img')
            ).src = product.Url;
            listItemContainer.childNodes[0].setAttribute("alt", product.Alt);

            /*let listImg = document.createElement('img');
            listItemContainer.appendChild(listImg);
            listImg.setAttribute("src", product.Url);
            listImg.setAttribute("alt", product.Alt);*/

            /*listItemContainer.childNodes[product.Id].setAttribute("alt", product.Alt);*/

            listItem.classList.add("col", "s12", "m6", "l4");

            listItemContainer.classList.add("places__img-container");

            myList.appendChild(listItem);
          }
        }
      });
  }

  var BtnCity1 = document.querySelector('#btn__city1');
  BtnCity1.addEventListener("click", function () { checkCity("Madrid") });
  var BtnCity2 = document.querySelector('#btn__city2');
  BtnCity2.addEventListener("click", function () { checkCity("Roma") });
  var BtnCity3 = document.querySelector('#btn__city3');
  BtnCity3.addEventListener("click", function () { checkCity("Paris") });

  //SELECT

  let elemsSelect = document.querySelector('#elemsSelect');
  let selectOption;

  elemsSelect.addEventListener("change", function () {
    selectOption = elemsSelect.value;
    checkCity(selectOption)
  });

  function checkCity(city) {
    selectedCity = city;
    createGrid();
  }

  // SECTION DOWNLOAD
  // init controller
  var controller = new ScrollMagic.Controller();

  // build scene
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#download"
  })
    .on("enter leave", function (e) {

      var icon = document.querySelector('#download-icon');
      var title = document.querySelector('#download-title');
      var text = document.querySelector('#download-text');
      var buttonsDownload = document.querySelector('#download-buttons');
      TweenMax.to(icon, .8, { css: { opacity: 1 }, delay: .8 });
      TweenMax.to(title, .8, { css: { opacity: 1 }, delay: 1 });
      TweenMax.to(text, .8, { css: { opacity: 1 }, delay: 1.2 });
      TweenMax.to(buttonsDownload, .8, { css: { opacity: 1 }, delay: 1.4 });

    })
    //.addIndicators({name: "timeline"}) // add indicators (requires plugin)
    .addTo(controller);

  // MODAL
  $("#iframe-legal").colorbox({ iframe: true, width: "80%", height: "80%" });

  // CARRUSEL
  $('.advantages__carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

 //MAP
 function initMap() {
  var url = { lat: 40.418653, lng: -3.705161 };
  // The map, centered at url
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18, 
      center: url,
     styles:
    [
      {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#e5c163"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#c4c4c4"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#e5c163"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 21
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#e5c163"
              },
              {
                  "lightness": "0"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#e5c163"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#575757"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#2c2c2c"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#999999"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ]

  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: url, 
    map: map,
    icon: './img/marker.png'
  })
}



