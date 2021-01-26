function lockedProfile() {
  let main = document.getElementsByTagName('main')[0].addEventListener('click', onClick);

  function onClick(ev) {
    let status = ev.target.parentNode.children[9].style;
    let button = ev.target.parentNode.children[10];

    if (ev.target.type == 'submit' && ev.target.parentNode.children[4].checked == true) {
      console.log('unlocked');
      
      status.display = status.display == 'block' ? 'none' : 'block';
      button.textContent = button.textContent == 'Hide it' ? 'Show more' : 'Hide it';
    } else if (ev.target.type == 'submit' && ev.target.parentNode.children[2].checked == true) {
      console.log('locked');
    }
  }
}

// In this problem, you should create a JS functonality which shows and hides the additional
// information about users.
 
// When one of the [Show more] buttons is clicked, the hiden information inside the div should
// be shown, only if the profile is not locked! If the current profile is locked, nothing should
// happen.
 
// If the hidden information is displayed and we lock the profile again, the [Hide it] button
// should not be working! Otherwise, when the profile is unlocked and we click on the [Hide it]
// button, the new fields must hide again.
