function getArticleGenerator(articles) {
  let divContent = document.getElementById('content');    
  let initialArray = articles;

  function showNext() {
    if(initialArray.length > 0){
      let curArrEl = initialArray.shift();
      let article = document.createElement('article');
      article.textContent = curArrEl;
      divContent.appendChild(article);
    }
  }
  return showNext;
}

// Write a JS program that sequentially displays articles on a web page when the user clicks a button. You will receive an array of strings that will initialize the program. You need to return a function that keeps the initial array in its closure and every time it’s called, it takes the first element from the array and displays it on the web page, inside a div with ID "content". If there are no more elements left, your function should do nothing.
// Your function will be called automatically, there is no need to attach any event listeners.

