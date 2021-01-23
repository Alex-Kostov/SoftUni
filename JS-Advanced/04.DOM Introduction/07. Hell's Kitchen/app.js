function solve() {
  document.getElementById('btnSend').addEventListener('click', onClick);
  let textArr = document.getElementsByTagName('textarea')[0];
  let bestRestorantP = document.querySelector('#bestRestaurant p');
  let bestWorkersP = document.querySelector('#workers p');


  function onClick() {

    let bestRestorant = {};
    let arr = JSON.parse(textArr.value);

    //find Best Restorant
    for (const line of arr) {
      let tokens = line.split(' - ');
      let restorantName = tokens.shift();
      tokens = tokens[0].split(', ').join(' ').split(' ');

      let workers = tokens.filter(el => !Number(el));
      let sallaries = tokens.filter(el => Number(el)).map(Number);
      let avgSalary = (sallaries.reduce((a, b) => Number(a) + Number(b), 0) / sallaries.length).toFixed(2);
      let bestSalary = Math.max(...sallaries).toFixed(2);

      if (bestRestorant.hasOwnProperty(avgSalary)) {
        if (bestRestorant.avgSalary < avgSalary) {
          bestRestorant.name = restorantName;
          bestRestorant.workers = workers;
          bestRestorant.avgSalary = avgSalary;
          bestRestorant.sallaries = sallaries;
          bestRestorant.bestSalary = bestSalary;
        }
      } else {
        bestRestorant.name = restorantName;
        bestRestorant.workers = workers;
        bestRestorant.avgSalary = avgSalary;
        bestRestorant.sallaries = sallaries;
        bestRestorant.bestSalary = bestSalary;
      }
    }

    //adding the best Restorant to P
    bestRestorantP.textContent = `Name: ${bestRestorant.name} Average Salary: ${bestRestorant.avgSalary} Best Salary: ${bestRestorant.bestSalary}`;

    //adding the best Workers
    let bestWorkerPText = [];
    for (let i = 0; i < bestRestorant.workers.length; i++) {
      let worker = bestRestorant.workers[i];
      let salary = Number(bestRestorant.sallaries[i]);
      bestWorkerPText.push(`Name: ${worker} With Salary: ${salary}`);
    }

    bestWorkersP.textContent = bestWorkerPText.join(' ');
  }
}


//You will be given an array of strings, which represents a list of all the restaurants with their workers.
// When the Send button is clicked:
// •	display the best restaurant of all the added restaurants with its average salary and best salary. 
// •	If there is a restaurant in the input array which is added more than once you should update (add the new ones) the workers, average salary and best salary.
// •	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
// •	display all workers in the best restaurant with their salaries.
// The best restaurant's workers should be sorted by their salaries by descending order.
