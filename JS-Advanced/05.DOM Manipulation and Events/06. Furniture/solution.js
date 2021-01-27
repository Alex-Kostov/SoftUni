function solve() {
  let inputTextArea = document.getElementsByTagName('textarea')[0];
  let outputTextArea = document.getElementsByTagName('textarea')[1];
  let mainDiv = document.getElementById('exercise');
  let tbody = document.getElementsByTagName('tbody')[0];
  mainDiv.addEventListener('click', onClick);

  let products = [];
  let productsBought = [];
  let prices = [];
  let decFactors = [];
  function onClick(ev) {

    if (ev.target.textContent == 'Generate') {
      let arrOfObj = JSON.parse(inputTextArea.value);
      arrOfObj.forEach(obj => {
        let tr = document.createElement('tr');

        let keys = Object.keys(obj);
        console.log(keys);

        //IMG
        let tdImg = document.createElement('td');
        let img = document.createElement('img');
        img.src = `${obj.img}`;
        tdImg.appendChild(img);
        tr.appendChild(tdImg);

        //Name
        let tdName = document.createElement('td');
        let pName = document.createElement('p');
        pName.textContent = obj.name;
        tdName.appendChild(pName);
        tr.appendChild(tdName);

        //Price
        let tdPrice = document.createElement('td');
        let pPrice = document.createElement('p');
        pPrice.textContent = obj.price;
        tdPrice.appendChild(pPrice);
        tr.appendChild(tdPrice);

        //DecorationFactor
        let tdDec = document.createElement('td');
        let pDec = document.createElement('p');
        pDec.textContent = obj.decFactor;
        tdDec.appendChild(pDec);
        tr.appendChild(tdDec);

        //Mark
        let tdMark = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'checkbox';
        tdMark.appendChild(input);
        tr.appendChild(tdMark);


        tbody.appendChild(tr);
        return products.push(obj);
      });
      inputTextArea.value = '';
    } else if (ev.target.textContent == 'Buy') {
      let checkboxex = document.querySelectorAll('input');
      checkboxex.forEach(el => {
        if (el.checked === true) {
          let name = el.parentNode.parentNode.children[1].children[0].textContent;
          productsBought.push(name);

          let price = Number(el.parentNode.parentNode.children[2].children[0].textContent);
          prices.push(price);

          let decFactor = Number(el.parentNode.parentNode.children[3].children[0].textContent);
          decFactors.push(decFactor);
        }
        let totalPrice = (prices.reduce((a, b) => a + b, 0)).toFixed(2);
        let avgFactor = decFactors.reduce((a, b) => a + b, 0) / decFactors.length;
        outputTextArea.value = `Bought furniture: ${productsBought.join(', ')}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgFactor}`;
      });
    }
  }
}


// You will be given some furniture as an array of objects. Each object will have a name, a price and a decoration factor. 
// When the "Generate" button is clicked, add a new row to the table for each piece of furniture with image, name, price and decoration factor (code example below). 
// When the "Buy" button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1} {furniture2}…".
// On the next line, print the total price in format: "Total price: {totalPrice}" (formatted to the second decimal point). Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"
