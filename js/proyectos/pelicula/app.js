function searchMovies() {
    var searchInput = document.getElementById('searchInput').value;
    var apiUrl = 'https://api.themoviedb.org/3/search/movie';
    var apiKey = 'YOUR_API_KEY';
    var url = `${apiUrl}?api_key=${apiKey}&query=${searchInput}`;
  
    // Realizar la solicitud a la API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';
  
        // Recorrer los resultados de búsqueda y mostrarlos en pantalla
        data.results.forEach(movie => {
          var movieElement = document.createElement('div');
          movieElement.innerHTML = `<h2>${movie.title}</h2><p>${movie.overview}</p>`;
          searchResults.appendChild(movieElement);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }