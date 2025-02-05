document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    nav.style.right = 
      nav.style.right === '0px' ? '-100%' : '0px';
  });