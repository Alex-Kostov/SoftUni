

function solve() {
  let body = document.getElementsByTagName('body')[0];
  let inputName = document.getElementById('container').children[0];
  let inputHall = document.getElementById('container').children[1];
  let inputPrice = document.getElementById('container').children[2];
  let ulOnScrn = document.getElementsByTagName('ul')[0];
  let ulArchive = document.getElementsByTagName('ul')[1];


  body.addEventListener('click', onClick);

  function onClick(e) {
    e.preventDefault();
    if (e.target.textContent === 'On Screen') {
      let name = inputName.value;
      let hall = inputHall.value;
      let price = (Number(inputPrice.value)).toFixed(2);

      if (!name || !hall || !Number(price)) {
        return;
      }
      inputName.value = "";
      inputHall.value = "";
      inputPrice.value = "";

      let li = document.createElement('li');
      let span = document.createElement('span');
      let strongLi = document.createElement('strong');
      let div = document.createElement('div');
      let strongDiv = document.createElement('strong');
      let input = document.createElement('input');
      let button = document.createElement('button');

      span.textContent = `${name}`;
      strongLi.textContent = `Hall: ${hall}`;
      strongDiv.textContent = price;
      input.placeholder = "Tickets Sold";
      button.textContent = 'Archive'

      li.appendChild(span);
      li.appendChild(strongLi);
      li.appendChild(div);
      div.appendChild(strongDiv);
      div.appendChild(input);
      div.appendChild(button);
      ulOnScrn.appendChild(li);
    } else if (e.target.textContent == "Archive") {
      let name = e.target.parentNode.parentNode.children[0].textContent;
      let price = e.target.parentNode.children[0].textContent;
      let ticketsSold = Number(e.target.parentNode.children[1].value);

      if (!Number(ticketsSold)) {
        return;
      } else {
        let totalAmount = (price * ticketsSold).toFixed(2);

        let li = document.createElement('li');
        let span = document.createElement('span');
        let strong = document.createElement('strong');
        let button = document.createElement('button');

        span.textContent = name;
        strong.textContent = `Total amount: ${totalAmount}`;
        button.textContent = 'Delete';

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(button);
        ulArchive.appendChild(li);
      }
      e.target.parentNode.parentNode.remove();
    } else if (e.target.textContent == "Delete") {
      e.target.parentNode.remove();

    } else if (e.target.textContent == 'Clear') {
      while (ulArchive.firstChild) {
        ulArchive.firstChild.remove()
      }
    }
  }
}