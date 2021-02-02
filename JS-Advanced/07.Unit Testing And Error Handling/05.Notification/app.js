function notify(message) {
  let divNotification = document.getElementById('notification');
  divNotification.textContent = message;
  divNotification.style.display = 'block';
  divNotification.addEventListener('click',onClick);

  function onClick(ev) {
    divNotification.style.display = 'none';
  }

}