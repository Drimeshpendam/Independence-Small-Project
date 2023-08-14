const flagContainer = document.querySelector('.flag-container');

flagContainer.addEventListener('mouseover', () => {
  flagContainer.classList.add('waving');
});

flagContainer.addEventListener('mouseout', () => {
  flagContainer.classList.remove('waving');
});
