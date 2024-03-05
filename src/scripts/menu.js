document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('Hamburger-menu');
  const navigation = document.querySelector('.nav-links'); // Utilisez `as` pour le cast si vous êtes sûr de l'élément
  const optimusLogo = document.querySelector('#Hamburger-menu img'); // Utilisez `as` pour le cast si vous êtes sûr de l'élément

  if (hamburgerMenu && navigation && optimusLogo) {
    hamburgerMenu.addEventListener('click', () => {
      // Ici, on vérifie si les éléments ont bien la méthode `classList`
      if ('classList' in navigation && 'classList' in optimusLogo) {
        navigation.classList.toggle('hidden');
        optimusLogo.classList.toggle('hidden');
      }
    });
  }
});
