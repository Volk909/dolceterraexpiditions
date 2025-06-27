// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav');
  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });
  // Закрытие меню при клике на ссылку
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
    });
  });
  // Автоматическое закрытие при ресайзе
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1200) {
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
    }
  });
});
// Бекграунд - падающие сладости.
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.drop-candy');
    const imageUrls = [
        'images/bg_sweets1.png',
        'images/bg_sweets2.png',
        'images/bg_sweets3.png',
        'images/bg_sweets4.png',
        'images/bg_sweets5.png'
    ];
    // Параметры анимации
    const minSize = 30;
    const maxSize = 50;
    const minDuration = 5;
    const maxDuration = 35;
    const spawnInterval = 3500;
    
    function createFallingImage() {
        const img = document.createElement('img');
        img.className = 'falling-image';
        
        // Случайное изображение
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        img.src = randomImageUrl;
        
        // Случайный размер
        const size = Math.random() * (maxSize - minSize) + minSize;
        img.style.width = `${size}vw`;
        
        // Начальная позиция 
        const startX = Math.random() * 100;
        img.style.left = `${startX}vw`;
        img.style.top = `-${size}vw`;
        
        // Случайная продолжительность анимации
        const duration = Math.random() * (maxDuration - minDuration) + minDuration;
        img.style.animation = `fall ${duration}s linear forwards`;
        
        // Добавляем изображение в контейнер
        container.appendChild(img);
        
        // Удаляем изображение после завершения анимации
        setTimeout(() => {
            img.remove();
        }, duration * 10000);
    }
    
    // анимация динамически
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(calc(700vh + 50vw));
            }
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем создание падающих изображений
    setInterval(createFallingImage, spawnInterval);
    
    // Создаем несколько изображений сразу при загрузке
    for (let i = 0; i < 5; i++) {
        setTimeout(createFallingImage, i * 200);
    }
});
