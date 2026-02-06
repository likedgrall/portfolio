const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const navLinksAll = document.querySelector(".nav__links a")
const navLogo = document.querySelector("#logoLink");
const navContacts = document.querySelector(".nav__contacts");

const mainWrapper = document.querySelector(".main-wrapper");
const modalBlock = document.querySelector(".modal-block");
const personData = document.querySelector(".personal");
const closeButton = document.querySelector(".fa-xmark");

// hamburger.onclick = function () {
//   hamburger.classList.toggle("hamburger_active");
//   navLinks.classList.toggle("nav__links_active");
//   navContacts.classList.toggle("nav__contacts_active");
//   if (navLinks.classList.contains("nav__links_active")) {
//     body.classList.add("scroll-none");
//   } else {
//     body.classList.remove("scroll-none");
//   }
// }

function closeMenu() {
  hamburger.classList.remove("hamburger_active");
  navLinks.classList.remove("nav__links_active");
  navContacts.classList.remove("nav__contacts_active");
  document.body.classList.remove("scroll-none");
}

// Просто закрываем меню при клике на любую ссылку
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function () {
    closeMenu();
  });
});

document.querySelector('a[href="#main"]').addEventListener('click', closeMenu);

// Обработчик гамбургера
hamburger.addEventListener('click', function () {
  this.classList.toggle("hamburger_active");
  navLinks.classList.toggle("nav__links_active");
  navContacts.classList.toggle("nav__contacts_active");
  document.body.classList.toggle("scroll-none");
});

document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq__item');
  
  // Функция обновления высоты закрытого состояния
  function updateClosedHeights() {
    faqItems.forEach(item => {
      if (!item.classList.contains('active')) {
        const question = item.querySelector('.faq__question');
        item.style.height = question.scrollHeight + 'px';
      }
    });
  }
  
  // Инициализация
  updateClosedHeights();
  
  // Обработчик кликов
  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    
    question.addEventListener('click', function() {
      // Закрываем другие
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherQuestion = otherItem.querySelector('.faq__question');
          otherItem.style.height = otherQuestion.scrollHeight + 'px';
        }
      });
      
      if (item.classList.contains('active')) {
        // Закрываем текущий
        item.classList.remove('active');
        item.style.height = question.scrollHeight + 'px';
      } else {
        // Открываем текущий
        item.classList.add('active');
        const fullHeight = question.scrollHeight + answer.scrollHeight;
        item.style.height = fullHeight + 'px';
      }
    });
  });
  
  // Обновляем высоты при изменении размера окна
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateClosedHeights, 100);
  });
});


personData.onclick = function () {
  mainWrapper.classList.add("_show");
  modalBlock.classList.add("_show");

}

closeButton.addEventListener("click", function () {
  mainWrapper.classList.remove("_show");
  modalBlock.classList.remove("_show");
});