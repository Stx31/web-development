document.addEventListener('DOMContentLoaded', function() {
    function setupDropdown(menuSelector, dropdownSelector) {
        var menu = document.querySelector(menuSelector);
        var dropdown = document.querySelector(dropdownSelector);

        menu.addEventListener('mouseover', function() {
            dropdown.classList.add('show');
        });

        menu.addEventListener('mouseout', function(event) {
            if (!menu.contains(event.relatedTarget)) {
                dropdown.classList.remove('show');
            }
        });

        dropdown.addEventListener('mouseover', function() {
            dropdown.classList.add('show');
        });

        dropdown.addEventListener('mouseout', function(event) {
            if (!menu.contains(event.relatedTarget)) {
                dropdown.classList.remove('show');
            }
        });
    }

    setupDropdown('.profile-menu', '.profile-menu .dropdown');
    setupDropdown('.friends-menu', '.friends-menu .dropdown');

    
    function handleLikeDislike(event) {
        var button = event.target;
        var movieId = button.closest('.movie').dataset.movieId;
        var action = button.classList.contains('like') ? 'like' : 'dislike';

        
        var isLiked = button.dataset.liked === 'true';
        var isDisliked = button.dataset.disliked === 'true';

        if (action === 'like') {
            isLiked = !isLiked;
            button.dataset.liked = isLiked;
            button.classList.toggle('liked', isLiked);

            
            var dislikeButton = button.nextElementSibling;
            if (isLiked && isDisliked) {
                dislikeButton.dataset.disliked = 'false';
                dislikeButton.classList.remove('disliked');
            }
        } else if (action === 'dislike') {
            isDisliked = !isDisliked;
            button.dataset.disliked = isDisliked;
            button.classList.toggle('disliked', isDisliked);

            
            var likeButton = button.previousElementSibling;
            if (isDisliked && isLiked) {
                likeButton.dataset.liked = 'false';
                likeButton.classList.remove('liked');
            }
        }

        
        saveLikeDislikeState(movieId, isLiked, isDisliked);
    }

    function saveLikeDislikeState(movieId, isLiked, isDisliked) {
        var likeDislikeData = JSON.parse(localStorage.getItem('likeDislikeData')) || {};
        likeDislikeData[movieId] = { liked: isLiked, disliked: isDisliked };
        localStorage.setItem('likeDislikeData', JSON.stringify(likeDislikeData));
    }

    function loadLikeDislikeState() {
        var likeDislikeData = JSON.parse(localStorage.getItem('likeDislikeData')) || {};
        var movies = document.querySelectorAll('.movie');

        movies.forEach(function(movie) {
            var movieId = movie.dataset.movieId;
            var data = likeDislikeData[movieId] || { liked: false, disliked: false };

            var likeButton = movie.querySelector('.like');
            var dislikeButton = movie.querySelector('.dislike');

            likeButton.dataset.liked = data.liked;
            likeButton.classList.toggle('liked', data.liked);

            dislikeButton.dataset.disliked = data.disliked;
            dislikeButton.classList.toggle('disliked', data.disliked);
        });
    }

    document.getElementById('movies-list').addEventListener('click', function(event) {
        if (event.target.classList.contains('like') || event.target.classList.contains('dislike')) {
            handleLikeDislike(event);
        }
    });

    
    loadLikeDislikeState();
});
