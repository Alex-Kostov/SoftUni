function toggle() {
  let extra = document.getElementById('extra');
  let span = document.getElementsByTagName('span')[0];

  if (extra.style.display === 'block') {
    extra.style.display = 'none';
    span.textContent = 'More';
  } else {
    extra.style.display = 'block'
    span.textContent = 'Less';
  }
}



//An html file is given and your task is to show more/less information by clicking the [More] button , it should reveal the content of a hidden div and changes the text of the button to [Less]. When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. Link action should be toggleable (you should be able to click the button infinite amount of times).