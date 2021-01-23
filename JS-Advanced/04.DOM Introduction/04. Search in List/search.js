function search() {
  let searchText = document.getElementById('searchText').value;
  let result = document.getElementById('result');
  let collectionOfLis = document.getElementById('towns').children;

  let matched = Array.from(collectionOfLis).filter(li => li.textContent.includes(searchText));
  let unMatched = Array.from(collectionOfLis).filter(li => !li.textContent.includes(searchText));

  for (const li of matched) {
    li.style.textDecoration = 'underline';
    li.style.fontWeight = 'bold'
  };

  //Clearing the Old Search style
  unMatched.map(li => li.style = 'null');
  //

  result.textContent = `${matched.length} matches found`;
}


// /An HTML page holds a list of towns, a search box and a [Search] button. Implement the search function to bold and underline the items from the list which include the text from the search box. Also print the amount of items the current search matches in the format "<matches> matches found"

