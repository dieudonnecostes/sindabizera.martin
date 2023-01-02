import { NavBar, Box, AboutUs, WhyUs, WhenUs, ContactUsHeader, Footer } from './components.js';

const homePath = localStorage.getItem('home') ?? '/'

function innerHTML(key, html) {
    if (document.querySelector(key)) {
        document.querySelectorAll(key).forEach((element) => {
            element.innerHTML = html;
        });
    }
}

function insertTemplates({ locale = 'fr' }) {
    innerHTML('#nav', NavBar(locale, homePath));
    innerHTML('.navbar', NavBar(locale, homePath));
    innerHTML('.presentation-box', Box(locale, homePath));
    innerHTML('#about-us', AboutUs(locale, homePath));
    innerHTML('#why-us', WhyUs(locale, homePath));
    innerHTML('#when-us', WhenUs(locale, homePath));
    innerHTML('#contact-us-header', ContactUsHeader(locale, homePath));
    innerHTML('#footer-closure', Footer(locale, homePath));
}

insertTemplates({ locale: 'en' });

document.querySelector("#fr-lng").addEventListener("click", function set() {
    insertTemplates({ locale: 'fr' });
}, false);

document.querySelector("#en-lng").addEventListener("click", function set() {
    insertTemplates({ locale: 'en' });
}, false);










