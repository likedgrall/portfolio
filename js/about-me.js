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

const WordsAboutMe = {
    en: [
        { key: "#title", content: "Front-end developer" },
        { key: "#nav-home", content: "<span>#</span>home" },
        { key: "#nav-projects", content: "<span>#</span>projects" },
        { key: "#nav-skills", content: "<span>#</span>skills" },
        { key: "#nav-about", content: "<span>#</span>about-me" },
        { key: "#nav-contacts", content: "<span>#</span>contacts" },
        { key: "#about-page-title", content: "<span>/</span>about-me" },
        { key: "#about-page-desc", content: "Who am i?" },
        { key: "#about-me-info", content: "Hello, i'm Gleb!<br><br>My nickname is likedgrall. I live in Russia, I was born in the Murmansk region of the city of Monchegorsk. Now I am 15 years old and I really like to develop websites.<br><br>I have been doing web development for 4 years now and completed a full course at the hwschool online school for front-end developer.<br><br>I started programming only thanks to my mom, she found an ad and I started studying.<br><br>And now I'm in front of you, to be honest, I didn't think that I could be here. Now I make turnkey websites." },
        { key: "#skills-title", content: "<span>#</span>skills" },
        { key: "#facts-title", content: "<span>#</span>my-fun-facts" },
        { key: "#lang-title", content: "Language" },
        { key: "#db-title", content: "Databases" },
        { key: "#other-title", content: "Other" },
        { key: "#tools-title", content: "Tools" },
        { key: "#frameworks-title", content: "Frameworks" },
        { key: "#fact-1", content: "I like summer" },
        { key: "#fact-2", content: "I do everything beautifully" },
        { key: "#fact-3", content: "I was in Egypt, Norway and Belarus" },
        { key: "#fact-4", content: "I like sports, gym and walk" },
        { key: "#fact-5", content: "I lover funk, but mostly i meloman" },
        { key: "#fact-6", content: "It's interesting to communicate with me" },
        { key: "#fact-7", content: "My favourite food is pasta" },
        { key: "#footer-desc", content: "Web designer and front-end developer." },
        { key: "#footer-media", content: "Media" },
        { key: "#copyright", content: "© Copyright 2024. Made by likedgrall" },
        { key: "#lang-content", content: "JavaScript Python Lua" },
        { key: "#db-content", content: "SQLite JSON(JS)" },
        { key: "#other-content", content: "HTML CSS SCSS" },
        { key: "#tools-content", content: "VSCode Windows ChatGPT Figma GitHub Font Awesome" },
        { key: "#frameworks-content", content: "React Django" },
        { key: "#languageButton", content: "EN" },
        { key: "#footer-web-designer", content: "Web designer and front-end developer." },
        { key: "#media", content: "Media" }
    ],
    ru: [
        { key: "#title", content: "Фронт-енд разработчик" },
        { key: "#nav-home", content: "<span>#</span>главная" },
        { key: "#nav-projects", content: "<span>#</span>проекты" },
        { key: "#nav-skills", content: "<span>#</span>навыки" },
        { key: "#nav-about", content: "<span>#</span>обо-мне" },
        { key: "#nav-contacts", content: "<span>#</span>контакты" },
        { key: "#about-page-title", content: "<span>/</span>обо-мне" },
        { key: "#about-page-desc", content: "Кто я?" },
        { key: "#about-me-info", content: "Привет, я Глеб!<br><br>Мой никнейм likedgrall. Я живу в России, родился в Мурманской области в городе Мончегорск. Сейчас мне 15 лет и мне очень нравится разрабатывать сайты.<br><br>Я занимаюсь веб-разработкой уже 4 года и закончил полный курс в онлайн-школе hwschool на фронт-енд разработчика.<br><br>Я начал программировать только благодаря маме, она нашла объявление и я начал учиться.<br><br>И вот я перед вами, если честно, я не думал, что смогу быть здесь. Теперь я делаю сайты под ключ." },
        { key: "#skills-title", content: "<span>#</span>навыки" },
        { key: "#facts-title", content: "<span>#</span>мои-факты" },
        { key: "#lang-title", content: "Языки" },
        { key: "#db-title", content: "Базы данных" },
        { key: "#other-title", content: "Другое" },
        { key: "#tools-title", content: "Инструменты" },
        { key: "#frameworks-title", content: "Фреймворки" },
        { key: "#fact-1", content: "Я люблю лето" },
        { key: "#fact-2", content: "Я делаю всё красиво" },
        { key: "#fact-3", content: "Я был в Египте, Норвегии и Беларуси" },
        { key: "#fact-4", content: "Я люблю спорт, тренажерный зал и прогулки" },
        { key: "#fact-5", content: "Я люблю фанк, но в основном я меломан" },
        { key: "#fact-6", content: "Со мной интересно общаться" },
        { key: "#fact-7", content: "Моя любимая еда - паста" },
        { key: "#footer-desc", content: "Веб-дизайнер и фронт-енд разработчик." },
        { key: "#footer-media", content: "Медиа" },
        { key: "#copyright", content: "© Copyright 2024. Сделано likedgrall" },
        { key: "#lang-content", content: "JavaScript Python Lua" },
        { key: "#db-content", content: "SQLite JSON(JS)" },
        { key: "#other-content", content: "HTML CSS SCSS" },
        { key: "#tools-content", content: "VSCode Windows ChatGPT Figma GitHub Font Awesome" },
        { key: "#frameworks-content", content: "React Django" },
        { key: "#languageButton", content: "RU" },
        { key: "#footer-web-designer", content: "Веб-дизайнер и фронт-энд разработчик." },
        { key: "#media", content: "Медиа" }
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
    const langElements = WordsAboutMe[language];
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
