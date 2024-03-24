document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('Hamburger-menu');
  const navigation = document.querySelector('.nav-links');
  const closeButton = document.getElementById('close-button');

  if (hamburgerMenu && navigation) {
    hamburgerMenu.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });
  }
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });
  }
});
