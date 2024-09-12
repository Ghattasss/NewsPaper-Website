
function fetchArticles() {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-08-04&sortBy=publishedAt&apiKey=7ea223dfd6c34d6182877d32d6191b18')
      .then(response => response.json())
      .then(data => {
        const newsGrid = document.querySelector('.container');
  
        // Loop through the articles and create HTML elements for each one
        data.articles.slice(21, 25).forEach(article => {
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
  
  
          newsGrid.appendChild(articleItem);
        });
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }
  
  // Call the fetchArticles function initially to load the first set of articles
  fetchArticles();