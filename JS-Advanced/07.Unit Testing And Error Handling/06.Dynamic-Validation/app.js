function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);
    
    function onChange(ev) {
      let email = input.value;
      let rgxEmail = /^[a-z0-9]*@[a-z0-9]*.[a-z0-9]*$/gm;
      let isValidEmail = rgxEmail.test(email);
      input.className = isValidEmail ? '' : 'error';
    }
}

// Write a JS function that dynamically validates an email input field when it is changed. If the input is invalid, apply to it the style "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.
// A valid email will be in format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style.
