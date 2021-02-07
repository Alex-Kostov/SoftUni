function solve(arr, sortBy) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(Number(price).toFixed(2));
      this.status = status;
    };
  };

  let tickets = arr.map((line) => {
    let [destination, price, status] = line.split('|');
    return new Ticket(destination, price, status);
  });

  switch (sortBy) {
    case 'price':
      tickets.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case 'status':
      tickets.sort((a, b) => {
        return a.status.localeCompare(b.status);
      });
      break;
    default:
      tickets.sort((a, b) => {
        return a.destination.localeCompare(b.destination);
      });
      break;
  }
  // console.log(tickets); 
  return (tickets);
}


solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
  )
  
  // Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, representing a sorting criterion. The ticket descriptions have the following format:
  // <destinationName>|<price>|<status>
  // Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price or status, depending on the second parameter that your program received. Always sort in ascending order (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples for more information.
  
