function encodeAndDecodeMessages() {

  let inputTextArea = document.querySelectorAll('textarea')[0];
  let outputMessageArea = document.querySelectorAll('textarea')[1];
  let encodeButton = document.querySelectorAll('button')[0];
  let decodeButton = document.querySelectorAll('button')[1];

  encodeButton.addEventListener('click', encode);
  decodeButton.addEventListener('click', decode);

  let decodedMsg = undefined;

  function encode() {
    decodedMsg = inputTextArea.value;
    let encodedMsg = inputTextArea.value.split('').map((el) => {
      let currCode = el.charCodeAt(0);
      let newLetter = String.fromCharCode(currCode + 1);
      return newLetter;
    }).join('');
    outputMessageArea.value = encodedMsg;
    inputTextArea.value = '';
  }
  function decode() {
    outputMessageArea.value = decodedMsg;
  }

}


// In this problem, you should create a JS functonality which encodes and decodes some
// messages which travel to the network.
 
// This program should contain two functionalities.
// The first one is to encode the given message and send it to the receiver. 
// The second one is to decode the received message and read it (display it).
// When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
// •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represent the current character in that message
// •	Clear the sender textarea and append the encoded message to the receiver textarea
 
 
// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
// •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
// •	Replace the encoded message with the already decoded message in the receiver textrea, to make it readable
