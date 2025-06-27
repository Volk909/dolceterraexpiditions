document.addEventListener('DOMContentLoaded', function() {
// слайдер товаров в телефонной версии
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const currentCounter = document.querySelector('.current_slide');
    const totalCounter = document.querySelector('.total');
    let currentIndex = 0;
    const totalSlides = slides.length;
    totalCounter.textContent = totalSlides;
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      currentCounter.textContent = currentIndex + 1;
    }
    // Кнопка вперед
    nextBtn.addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
      }
    });
    // Кнопка назад
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    updateSlider();
  });