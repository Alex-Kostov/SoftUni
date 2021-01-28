function solve() {
  const mainDiv = document.getElementById('quizzie');
  let arrOfSections = Array.from(document.getElementsByTagName('section'));
  let resultDiv = document.getElementById('results');
  mainDiv.addEventListener('click', onClick);
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let points = 0;

  function onClick(ev) {

    if (ev.path[0].tagName == 'P') {
      let chosenAnswer = ev.path[0].textContent;
      if (rightAnswers.includes(chosenAnswer)) {
        points++;
      }
      if (chosenAnswer == 'onclick' || chosenAnswer == 'onmouseclick') {
        arrOfSections[0].classList.add('hidden');
        arrOfSections[1].classList.remove('hidden');
      } else if (chosenAnswer == 'JSON.toString()' || chosenAnswer == 'JSON.stringify()') {
        arrOfSections[1].classList.add('hidden');
        arrOfSections[2].classList.remove('hidden');
      } else if (chosenAnswer == 'A programming API for HTML and XML documents' || chosenAnswer == 'The DOM is your source HTML') {
        arrOfSections[2].classList.add('hidden');
        resultDiv.style.display = 'block';
        let text = points == 3 ? 'You are recognized as top JavaScript fan!' : `You have ${points} right answers`;
        resultDiv.children[0].children[0].textContent = text;
      }
    }
  }
}
