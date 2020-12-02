//Problem 2. Emoji Detector
function solve(arr) {

 
 let text = arr[0];
 let regex= /\*\*([A-Z][a-z]{2,})\*\*|\:\:([A-Z][a-z]{2,})\:\:/gm;
 let allEmojis = [];
 let coolEmojis = [];
 let numbers = [];

 let tokens = text.split('');
 for (const token of tokens) {
     if(Number(token)){
         numbers.push(Number(token));
     }
 }
 let coolNumber = numbers.reduce((a, b) => a * b);
 allEmojis = text.match(regex);

 console.log(`Cool threshold: ${coolNumber}`);
 console.log(`${allEmojis.length} emojis found in the text. The cool ones are:`);

 for (const emoji of allEmojis) {
     let rgx = /[A-Z][a-z]{2,}/gm;
     let word = emoji.match(rgx);
     let letters = word[0].split('');
     let valueOfletters = 0;
     for (const letter of letters) {
        let code = letter.charCodeAt(0);
        valueOfletters += code;
     }
     if(valueOfletters >= coolNumber){
         console.log(emoji);
     }
 }
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]);