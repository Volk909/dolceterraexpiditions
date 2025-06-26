document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.events-filter p');
  const posterContainers = document.querySelectorAll('.posters-container');
  const blockTitle = document.querySelector('.block h2');
  
  // сортировка мероприятий
  
  function setVisibility(activeFilter) {
    if (activeFilter === 'Регулярные') {
      posterContainers[0].style.display = 'none';
      posterContainers[1].style.display = 'none';
      posterContainers[2].style.display = 'flex';
    } 
    else if (activeFilter === 'Текущие') {
      posterContainers[0].style.display = 'flex';
      posterContainers[1].style.display = 'none';
      posterContainers[2].style.display = 'none';
    } 
    else if (activeFilter === 'Прошедшие') {
      posterContainers[0].style.display = 'none';
      posterContainers[1].style.display = 'flex';
      posterContainers[2].style.display = 'none';
    }
  }
  filterButtons[0].classList.add('active');
  blockTitle.textContent = 'Регулярные мероприятия';
  setVisibility('Регулярные');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const buttonText = this.textContent.trim();
      blockTitle.textContent = `${buttonText} мероприятия`;
      setVisibility(buttonText);
    });
  });
});