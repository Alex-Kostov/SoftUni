function trackOfGuestList(arr) {

    let partyList = [];

    for (let i = 0; i < arr.length; i++) {

        let splited = arr[i].split(' ');
        let name = splited[0];

        if (splited.length === 3) {      //going
            if (partyList.includes(name)) {
                console.log(name + " is already in the list!");
            }
            else {
                partyList.push(name);
            }
        }
        else {       //not going  
            if (partyList.includes(name)) {
                let index = partyList.indexOf(name);
                partyList.splice(index,1);
            }
            else {
               console.log(name + " is not in the list!");
            }
        }
    }
    // output
    for (const name of partyList) {
        console.log(name);
    }
}
trackOfGuestList(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);

// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.
