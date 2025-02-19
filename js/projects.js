const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const languageBox = document.querySelector("#languageBox")
const languageButton = document.querySelector("#languageButton");
const languageBoxInfo = document.querySelector(".language-box__info")
const languageBoxButtons = document.querySelectorAll(".language-box-buttons button");


hamburger.onclick = function () {
    hamburger.classList.toggle("_active");
    navLinks.classList.toggle("_active");
}

languageBoxInfo.onclick = function () {
    languageBox.classList.toggle("language-box_open");
}



const WordsProjects = {
    en: [
        { key: "#languageButton", content: "EN" },
        { key: "#title", content: "Front-end developer" },
        { key: "#nav-home", content: "<span>#</span>home" },
        { key: "#nav-projects", content: "<span>#</span>projects" },
        { key: "#nav-skills", content: "<span>#</span>skills" },
        { key: "#nav-about", content: "<span>#</span>about-me" },
        { key: "#nav-contacts", content: "<span>#</span>contacts" },
        { key: "#projects-page-title", content: "<span>/</span>projects" },
        { key: "#projects-page-desc", content: "List of my projects" },
        { key: "#complete-apps-title", content: "<span>#</span>complete-apps" },
        { key: "#portfolio-title", content: "Portfolio" },
        { key: "#portfolio-desc", content: "My portfolio" },
        { key: "#portfolio-live", content: "Live <~>" },
        { key: "#etalon-title", content: 'Site "ETALON"' },
        { key: "#etalon-desc", content: "Website of the health and beauty studio" },
        { key: "#etalon-live", content: "Live <~>" },
        { key: "#nike-title", content: "Nike" },
        { key: "#nike-desc", content: "Nike sneakers website" },
        { key: "#nike-live", content: "Live <~>" },
        { key: "#prof-title", content: "Proforientolog" },
        { key: "#prof-desc", content: "Proforientolog Olga" },
        { key: "#prof-live", content: "Live <~>" },
        { key: "#training-title", content: 'Training Center "Etalon"' },
        { key: "#training-desc", content: "Cosmetology courses" },
        { key: "#training-live", content: "Live <~>" },
        { key: "#footer-desc", content: "Web designer and front-end developer." },
        { key: "#footer-media", content: "Media" },
        { key: "#copyright", content: "© Copyright 2024. Made by likedgrall" }
    ],
    ru: [
        { key: "#languageButton", content: "RU" },
        { key: "#title", content: "Фронт-енд разработчик" },
        { key: "#nav-home", content: "<span>#</span>главная" },
        { key: "#nav-projects", content: "<span>#</span>проекты" },
        { key: "#nav-skills", content: "<span>#</span>навыки" },
        { key: "#nav-about", content: "<span>#</span>обо-мне" },
        { key: "#nav-contacts", content: "<span>#</span>контакты" },
        { key: "#projects-page-title", content: "<span>/</span>проекты" },
        { key: "#projects-page-desc", content: "Список моих проектов" },
        { key: "#complete-apps-title", content: "<span>#</span>завершенные-приложения" },
        { key: "#portfolio-title", content: "Портфолио" },
        { key: "#portfolio-desc", content: "Моё портфолио" },
        { key: "#portfolio-live", content: "Смотреть <~>" },
        { key: "#etalon-title", content: 'Сайт "ЭТАЛОН"' },
        { key: "#etalon-desc", content: "Веб-сайт студии здоровья и красоты" },
        { key: "#etalon-live", content: "Смотреть <~>" },
        { key: "#nike-title", content: "Nike" },
        { key: "#nike-desc", content: "Веб-сайт кроссовок Nike" },
        { key: "#nike-live", content: "Смотреть <~>" },
        { key: "#prof-title", content: "Профориентолог" },
        { key: "#prof-desc", content: "Профориентолог Ольга" },
        { key: "#prof-live", content: "Смотреть <~>" },
        { key: "#training-title", content: 'Учебный Центр "Эталон"' },
        { key: "#training-desc", content: "Курсы косметологии" },
        { key: "#training-live", content: "Смотреть <~>" },
        { key: "#footer-desc", content: "Веб-дизайнер и фронт-енд разработчик." },
        { key: "#footer-media", content: "Медиа" },
        { key: "#copyright", content: "© Copyright 2024. Сделано likedgrall" }
    ]
};

for (let i = 0; i < languageBoxButtons.length; i++) {
    const button = languageBoxButtons[i];
    button.onclick = function () {
        const buttonID = button.getAttribute("id");
        if (buttonID === "button-ru") {
            PageRender("ru");
            localStorage.setItem("lang", "ru")
        } else {
            PageRender("en");
            localStorage.setItem("lang", "en")
        }
        languageBox.classList.remove("language-box_open");
        languageButton.innerText = languageBoxButtons[i].innerText;
    };
}

function PageRender(language) {
    const langElements = WordsProjects[language];
    for (let i = 0; i < langElements.length; i++) {
        const langElement = langElements[i];
        const pageElement = document.querySelector(langElement.key);
        if (pageElement) {
            pageElement.innerHTML = langElement.content;
        }
    }
}

const savedLang = localStorage.getItem("lang");
if (savedLang == "ru") {
    PageRender("ru");
} 

else if (savedLang == "en") {
    PageRender("en");
}

