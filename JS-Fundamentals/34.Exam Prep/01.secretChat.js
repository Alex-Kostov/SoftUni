function solve(params) {
    let msg = params.shift();
    let endCommand = params.pop();

    for (const line of params) {
        let [command,arg1,arg2] = line.split(':|:');

        if(line.includes('InsertSpace:')){
            insert(arg1);
        } else if(line.includes('Reverse:')){
            reverse(arg1);
        } else if(line.includes('ChangeAll:')){
            changeAll(arg1,arg2);
        }
    }

    console.log(`You have a new text message: ${msg}`);

    function insert(index){
    msg = msg.split('');
    msg.splice(index,0,' ');
    msg = msg.join('')
    console.log(msg);
    }
    function reverse(substring){
        if(msg.includes(substring)){
            msg = msg.replace(substring,'');
            let reversed = substring.split('').reverse().join('');
            msg += reversed;
            console.log(msg);
        }
        else {
            console.log('error');
        }
    }
    function changeAll(substring,replacement){
        while (msg.includes(substring)) {
            msg = msg.replace(substring,replacement);
        }
        console.log(msg);
    }
}
solve(
    [
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
      ]
      
);

//Problem 1. Secret Chat

// You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in! 
// On the first line of the input you will receive the concealed message. After that, until the "Reveal" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the concealed message in order to interpret it and reveal its true content. There are several types of instructions, split by ":|:"
// •	InsertSpace:|:{index}
// o	Inserts a single empty space at the given index. The given index will always be valid.
// •	Reverse:|:{substring}
// o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
// o	If not, print "error". 
// o	This operation should replace only the first occurrence of the given substring if there are more than one such occurrences.
// •	ChangeAll:|:{substring}:|:{replacement} 
// o	Changes all occurrences of the given substring with the replacement text.
// Input / Constraints
// •	On the first line, you will receive a string with message.
// •	On the next lines, you will be receiving commands, split by ":|:".
// Output
// •	After each set of instructions, print the resulting string. 
// •	After the "Reveal" command is received, print this message:
// "You have a new text message: {message}"
