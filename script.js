
// Add any interactive behavior you need here// Add any interactive behavior you need here
document.querySelector('.view-more').addEventListener('click', () => {
    fetchArticles();
  });
  
  // Fetch articles from the API
  function fetchArticles() {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-04&sortBy=publishedAt&apiKey=7ea223dfd6c34d6182877d32d6191b18')
      .then(response => response.json())
      .then(data => {

        console.log(data);
        
        const newsGrid = document.querySelector('.news-grid');
  
        // Loop through the articles and create HTML elements for each one
        data.articles.slice(0, 4).forEach(article => {
          const articleItem = document.createElement('article');
          articleItem.classList.add('news-item');
  
          const articleImage = document.createElement('img');
          articleImage.src = article.urlToImage;
          articleImage.alt = article.title;
          articleItem.appendChild(articleImage);
  
          const articleTitle = document.createElement('h3');
          articleTitle.textContent = article.title;
          articleItem.appendChild(articleTitle);
  
          const articleDescription = document.createElement('p');
          articleDescription.textContent = article.description;
          articleItem.appendChild(articleDescription);
  
          const articleLink = document.createElement('a');
          articleLink.href = article.url;
          articleLink.textContent = 'Read More';
          articleItem.appendChild(articleLink);
  
          newsGrid.appendChild(articleItem);
        });
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }
  
  // Call the fetchArticles function initially to load the first set of articles
  fetchArticles();