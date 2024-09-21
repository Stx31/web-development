document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById('news-container');
    
    fetch('news.json')
        .then(response => response.json())
        .then(newsItems => {
            newsItems.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <small>${item.date}</small>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error loading news:', error));
});
