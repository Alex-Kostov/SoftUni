function validate() {
  let button = document.getElementById('submit');
  let inputUsername = document.getElementById('username');
  let inputEmail = document.getElementById('email');
  let inputPass = document.getElementById('password');
  let inputConfirmPass = document.getElementById('confirm-password');
  let inputChechbox = document.getElementById('company');
  let inputComapnyNum = document.getElementById('companyNumber');
  let fieldSet = document.getElementById('companyInfo');
  let divValid = document.getElementById('valid');
  let checked = false;

  inputChechbox.addEventListener('change', onChange);
  button.addEventListener('click', onClick);

  function onChange(ev) {
    checked = ev.target.checked;
    fieldSet.style.display = checked ? 'block' : 'none';
  }
  function onClick(ev) {
    ev.preventDefault();
    let username = inputUsername.value;
    let email = inputEmail.value;
    let pass = inputPass.value;
    let passConf = inputConfirmPass.value;

    let rgxUsername = /^[A-z0-9]{3,20}$/gm;
    let rgxPass = /^[A-z0-9]{5,15}$/m;
    let rgxEmail = /@.*\./gm;

    let validUsername = rgxUsername.test(username);
    let validPass = rgxPass.test(pass);
    let validConfirmPass = false;
    if (rgxPass.test(passConf) && pass == passConf) {
      validConfirmPass = true;
    }
    let validEmail = rgxEmail.test(email);
    let validNum = undefined;

    if (checked) {
      let companyNum = Number(inputComapnyNum.value);
      if (companyNum >= 1000 & 9999 >= companyNum) {
        validNum = true;
      } else {
        validNum = false;
      }

      if (validUsername && validEmail && validConfirmPass && validNum) {
        divValid.style.display = 'block';
      } else {
        divValid.style.display = 'none';
      }

      inputUsername.style.borderColor = validUsername ? 'none' : 'red';
      inputEmail.style.borderColor = validEmail ? 'none' : 'red';
      inputPass.style.borderColor = validPass ? 'none' : 'red';
      inputConfirmPass.style.borderColor = validConfirmPass ? 'none' : 'red';
      inputComapnyNum.style.borderColor = validNum ? 'none' : 'red';

    } else {
      if (validUsername && validEmail && validConfirmPass) {
        divValid.style.display = 'block';
      } else {
        divValid.style.display = 'none';
      }

      inputUsername.style.borderColor = validUsername ? 'none' : 'red';
      inputEmail.style.borderColor = validEmail ? 'none' : 'red';
      inputPass.style.borderColor = validPass ? 'none' : 'red';
      inputConfirmPass.style.borderColor = validConfirmPass ? 'none' : 'red';

    }
  }
}
