function solve() {
  let main = document.getElementsByTagName('main')[0];
  let taskInput = document.getElementById('task');
  let descriptionTextArea = document.getElementById('description');
  let dateInput = document.getElementById('date');
  let openDiv = document.getElementsByTagName('section')[1].children[1];
  let inProgressDiv = document.getElementsByTagName('section')[2].children[1];
  let completeDiv = document.getElementsByTagName('section')[3].children[1];

  main.addEventListener('click', onClick)

  function onClick(ev) {
    ev.preventDefault();

    let taskName = taskInput.value;
    let taskDescr = descriptionTextArea.value;
    let taskDate = dateInput.value;

    if (ev.target.textContent == 'Add') {
      if (!taskName || !taskDescr || !taskDate) {
        return;
      } else {
        //Creating new article
        let article = newArticle(taskName, taskDescr, taskDate, 'Start', 'Delete', 'green', 'red');
        openDiv.appendChild(article);
      }
    } else if (ev.target.textContent == "Start") {
      //Adding new Article in in Progres
      let article = newArticle(taskName, taskDescr, taskDate, 'Delete', 'Finish', 'red', 'orange');
      inProgressDiv.appendChild(article);

      //Delete the Article from Open
      ev.target.parentNode.parentNode.remove();
    } else if (ev.target.textContent == "Delete") {
      //Delete the Article from Open
      ev.target.parentNode.parentNode.remove();
    } else if (ev.target.textContent == 'Finish') {
      //Adding new Article in in Progres
      let article = newArticle(taskName, taskDescr, taskDate);
      completeDiv.appendChild(article);

      //Delete the Article from Open
      ev.target.parentNode.parentNode.remove();
    }

  }
  function newArticle(taskName, taskDescr, taskDate, buttonLeft, buttonRight, buttonLColor, buttonRColor) {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let pDescr = document.createElement('p');
    let pDate = document.createElement('p');

    h3.textContent = taskName;
    pDescr.textContent = `Description: ${taskDescr}`;
    pDate.textContent = `Due Date: ${taskDate}`;

    article.appendChild(h3);
    article.appendChild(pDescr);
    article.appendChild(pDate);

    if (buttonLeft) {
      let div = document.createElement('div');
      let buttonL = document.createElement('button');
      let buttonR = document.createElement('button');
      div.className = 'flex';
      buttonL.textContent = buttonLeft;
      buttonL.className = `${buttonLColor}`;
      buttonR.textContent = buttonRight;
      buttonR.className = `${buttonRColor}`;
      div.appendChild(buttonL);
      div.appendChild(buttonR);
      article.appendChild(div);
    }

    return article;
  }
}

