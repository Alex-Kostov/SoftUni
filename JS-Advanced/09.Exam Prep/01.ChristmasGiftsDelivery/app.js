function solution() {
  let container = document.getElementsByClassName('container')[0];
  let input = document.getElementsByTagName('input')[0];
  let ulList = document.getElementsByTagName('ul')[0];
  let ulSent = document.getElementsByTagName('ul')[1];
  let ulDiscard = document.getElementsByTagName('ul')[2];

  container.addEventListener('click', onClick);

  function onClick(ev) {

    if (ev.target.textContent === 'Add gift') {

      let li = document.createElement('li');
      let btnSend = document.createElement('button');
      let btnDiscard = document.createElement('button');

      li.className = 'gift';
      btnSend.id = 'sendButton';
      btnDiscard.id = 'discardButton';

      li.textContent = input.value;
      btnSend.textContent = 'Send';
      btnDiscard.textContent = 'Discard';

      li.appendChild(btnSend);
      li.appendChild(btnDiscard);
      ulList.appendChild(li);

      //Sorting the Array form LI
      let sortableLi = Array.from(ulList.children).sort((a, b) => { return a.textContent.localeCompare(b.textContent) });
      //remove the unsorted LI
      while (ulList.children.length > 0) {
        ulList.removeChild(ulList.lastChild);
      }
      //add Sorted li's
      for (const li of sortableLi) {
        ulList.appendChild(li);
      }

      input.value = '';
    } else if (ev.target.textContent === 'Send') {

      let element = ev.target.parentNode;
      let text = element.textContent.slice(0, element.textContent.length - 11);
      element.remove();

      let li = document.createElement('li');
      li.textContent = text;
      li.className = 'gift';
      ulSent.appendChild(li);

    } else if (ev.target.textContent === 'Discard') {

      let element = ev.target.parentNode;
      let text = element.textContent.slice(0, element.textContent.length - 11);
      element.remove();

      let li = document.createElement('li');
      li.textContent = text;
      li.className = 'gift';
      ulDiscard.appendChild(li);

    }
  }
}

