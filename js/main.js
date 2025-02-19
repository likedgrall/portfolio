const languageBox = document.querySelector("#languageBox")
const languageButton = document.querySelector("#languageButton");
const languageBoxInfo = document.querySelector(".language-box__info")
const languageBoxButtons = document.querySelectorAll(".language-box-buttons button");


languageBoxInfo.onclick = function () {
    languageBox.classList.toggle("language-box_open");
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const navLinksA = document.querySelectorAll(".nav__links a")

hamburger.onclick = function () {
    hamburger.classList.toggle("_active");
    navLinks.classList.toggle("_active");
}

const Words = {
    en: [
        { key: "#languageButton", content: "EN" },
        { key: "#title", content: "Front-end developer" },
        { key: "#h1", content: "Likedgrall is a <span>web designer</span> and <span>front-end developer</span>" },
        { key: "#p-header", content: "I'm a web designer and front-end developer from Russia. I'm interested in design and everything connected with it." },
        { key: "#nav-home", content: "<span>#</span>home" },
        { key: "#nav-projects", content: "<span>#</span>projects" },
        { key: "#nav-skills", content: "<span>#</span>skills" },
        { key: "#nav-about", content: "<span>#</span>about-me" },
        { key: "#nav-contacts", content: "<span>#</span>contacts" },
        { key: "#contact-btn", content: "Contact me!!" },
        { key: "#quote", content: "Don't think about what might be, focus on what is" },
        { key: "#quote-author", content: "- Kratos (GOW4)" },
        { key: "#projects-title", content: "<span>#</span>projects" },
        { key: "#view-all", content: "Views all ~~>" },
        { key: "#portfolio-title", content: "Portfolio" },
        { key: "#portfolio-desc", content: "My portfolio" },
        { key: "#etalon-title", content: 'Site "ETALON"' },
        { key: "#etalon-desc", content: "Website of the health and beauty studio" },
        { key: "#nike-title", content: "Nike" },
        { key: "#nike-desc", content: "Nike sneakers website" },
        { key: "#lang-title", content: "Language" },
        { key: "#lang-content", content: "JavaScript Python Lua" },
        { key: "#db-title", content: "Databases" },
        { key: "#db-content", content: "SQLite JSON(JS)" },
        { key: "#other-title", content: "Other" },
        { key: "#other-content", content: "HTML CSS SCSS" },
        { key: "#tools-title", content: "Tools" },
        { key: "#tools-content", content: "VSCode Windows ChatGPT Figma GitHub Font Awesome" },
        { key: "#frameworks-title", content: "Frameworks" },
        { key: "#frameworks-content", content: "React Django" },
        { key: "#footer-desc", content: "Web designer and front-end developer." },
        { key: "#footer-media", content: "Media" },
        { key: "#copyright", content: "© Copyright 2024. Made by likedgrall" },
        { key: "#about-me-text", content: "Hello, i'm Gleb!<br><br>My nickname is likedgrall. I live in Russia, I was born in the Murmansk region of the city of Monchegorsk. Now I am 15 years old and I really like to develop websites.<br><br>I have been doing web development for 4 years now and completed a full course at the hwschool online school for front-end developer.<br><br>I started programming only thanks to my mom, she found an ad and I started studying.<br><br>And now I'm in front of you, to be honest, I didn't think that I could be here. Now I make turnkey websites." },
        { key: "#read-more", content: "Read more ->" },
        { key: "#contacts-text", content: "It's easy to get in touch with me, the main thing is to write and get interested. The price for all projects is contractual." },
        { key: "#message-title", content: "Message me here" },
        { key: "#about-title", content: "<span>#</span>about-me" },
        { key: "#skills-title", content: "<span>#</span>skills" },
        { key: "#contacts-title", content: "<span>#</span>contacts" },
        { key: "#currently-working", content: "Currently working on&nbsp<span class='portfolio'>Portfolio</span>" },
        { key: "#portfolio-live", content: "Live <~>" },
        { key: "#etalon-live", content: "Live <~>" },
        { key: "#nike-live", content: "Live <~>" }
    ],
    ru: [
        { key: "#languageButton", content: "RU" },
        { key: "#title", content: "Фронт-энд разработчик" },
        { key: "#h1", content: "Likedgrall - <span>веб-дизайнер</span> и <span>фронт-енд разработчик</span>" },
        { key: "#p-header", content: "Я веб-дизайнер и фронт-енд разработчик живущий в России. Я интересуюсь веб-дизайном и всем, что с ним связано." },
        { key: "#nav-home", content: "<span>#</span>главная" },
        { key: "#nav-projects", content: "<span>#</span>проекты" },
        { key: "#nav-skills", content: "<span>#</span>навыки" },
        { key: "#nav-about", content: "<span>#</span>обо-мне" },
        { key: "#nav-contacts", content: "<span>#</span>контакты" },
        { key: "#contact-btn", content: "Свяжитесь со мной!!" },
        { key: "#quote", content: "Не думай о том, что может быть, сосредоточься на том, что есть" },
        { key: "#quote-author", content: "- Кратос (GOW4)" },
        { key: "#projects-title", content: "<span>#</span>проекты" },
        { key: "#view-all", content: "Посмотреть все ~~>" },
        { key: "#portfolio-title", content: "Портфолио" },
        { key: "#portfolio-desc", content: "Моё портфолио" },
        { key: "#etalon-title", content: 'Сайт "ЭТАЛОН"' },
        { key: "#etalon-desc", content: "Веб-сайт студии здоровья и красоты" },
        { key: "#nike-title", content: "Nike" },
        { key: "#nike-desc", content: "Веб-сайт кроссовок Nike" },
        { key: "#lang-title", content: "Языки" },
        { key: "#lang-content", content: "JavaScript Python Lua" },
        { key: "#db-title", content: "Базы данных" },
        { key: "#db-content", content: "SQLite JSON(JS)" },
        { key: "#other-title", content: "Другое" },
        { key: "#other-content", content: "HTML CSS SCSS" },
        { key: "#tools-title", content: "Инструменты" },
        { key: "#tools-content", content: "VSCode Windows ChatGPT Figma GitHub Font Awesome" },
        { key: "#frameworks-title", content: "Фреймворки" },
        { key: "#frameworks-content", content: "React Django" },
        { key: "#footer-desc", content: "Веб-дизайнер и фронт-енд разработчик." },
        { key: "#footer-media", content: "Медиа" },
        { key: "#copyright", content: "© Copyright 2024. Сделано likedgrall" },
        { key: "#about-me-text", content: "Привет, я Глеб!<br><br>Мой никнейм likedgrall. Я живу в России, родился в Мурманской области в городе Мончегорск. Сейчас мне 15 лет и мне очень нравится разрабатывать сайты.<br><br>Я занимаюсь веб-разработкой уже 4 года и закончил полный курс в онлайн-школе hwschool на фронт-енд разработчика.<br><br>Я начал программировать только благодаря маме, она нашла объявление и я начал учиться.<br><br>И вот я перед вами, если честно, я не думал, что смогу быть здесь. Теперь я делаю сайты под ключ." },
        { key: "#read-more", content: "Читать далее ->" },
        { key: "#contacts-text", content: "Связаться со мной легко, главное написать и заинтересоваться. Цена за все проекты договорная." },
        { key: "#message-title", content: "Напишите мне здесь" },
        { key: "#about-title", content: "<span>#</span>обо-мне" },
        { key: "#skills-title", content: "<span>#</span>навыки" },
        { key: "#contacts-title", content: "<span>#</span>контакты" },
        { key: "#currently-working", content: "В настоящее время работаю над&nbsp<span class='portfolio'>Portfolio</span>" },
        { key: "#portfolio-live", content: "Смотреть <~>" },
        { key: "#etalon-live", content: "Смотреть <~>" },
        { key: "#nike-live", content: "Смотреть <~>" }
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
    const linkProjectsPage = document.querySelector(".views"); 
    linkProjectsPage.setAttribute("href", `./html/projects.html?lang=${language}`)
    const langElements = Words[language];
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

