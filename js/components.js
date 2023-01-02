export const NavBar = (locale, homePath) => {
    return `
        <a href='${homePath}' class="logo-named">
            <h1 class="large-subtitle logoName">${{
            fr: "Notaire", en: "Notary"
        }[locale]} Martin Sindabizera</h1>
        </a>
        <div class="navbar-actions flex">
            <div class="contextual-arrow" id="c-m-about">
                <a>${{
            fr: "À propos de nous", en: "About Us"
        }[locale]}
                <i class="fa fa-caret-down"></i>
                </a>
                <div class="contextual-menu">
                    <a href="${homePath}#why-us" onclick="handleCloseSideMenu()">${{
            fr: "Que fait un notaire ?", en: "What does a notary do?"
        }[locale]}</a>
                    <a href="${homePath}#when-us" onclick="handleCloseSideMenu()">${{
            fr: "Quand faire appel à un notaire ?", en: "When to call a notary?"
        }[locale]}</a>
                    <a href="${homePath}#our-services" onclick="handleCloseSideMenu()">${{
            fr: "Nos services", en: "Our services"
        }[locale]}</a>
                </div>
            </div>
            <a href='${homePath}#contact-us' onclick="handleCloseSideMenu()">${{
                fr: "Contactez-nous", en: "Contact Us"
            }[locale]}</a>
            <a class="buttoned-link" href="https://www.google.com/maps?ll=-3.387668,29.362155&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=Ave+De+La+Revolution+Bujumbura" target="_blank">${{
                fr: "ADDRESSE DU BUREAU", en: "OFFICE LOCATION"
            }[locale]}</a>
        </div>
        <div id="nav-icon">
            <i id="menu-icon-button" class="fa fa-bars action-icon" onclick="handleBarButton()"></i>
        </div>
    `;
}

export const Box = (locale, homePath) => {
    return `
    <img src="https://media.istockphoto.com/id/1174056245/photo/some-moments-require-some-seriousness.jpg?s=612x612&w=0&k=20&c=dPqQQq6wiygApzSF9r72B9p6Bp4pygxm3M7aqC1oae8="
    alt="Notaire Sindabizera Martin" />
    <h1 class="headline1">Martin Sindabizera</h1>
    <p class="large-subtitle">${{
            fr: "Pour l'authenticité de vos actes",
            en: "For the authenticity of your deeds",
        }[locale]}</p>
    `
}

export const AboutUs = (locale, homePath) => {
    return `
    ${{
            fr: "Nous sommes un officier public et ministériel chargé d'authentifier les actes pour le compte de nos clients. Nous avons également un rôle dans la conservation des actes et le conseil juridique.",
            en: "We are a public and ministerial officer responsible for authenticating deeds on behalf of our clients. We also have a role in record keeping and legal advice.",
        }[locale]}
    `
}

export const WhyUs = (locale, homePath) => {
    return `
    <div class="left-side">
    <h1 class="large-title">${{
            fr: "A quoi sert un notaire ?",
            en: "What does a notary do ?",
        }[locale]}</h1>
    <p class="p-medium text-align-justify">${{
            fr: "Mariage, achat d'une maison, décès d'un proche, etc., tout au long de votre vie, le notaire est présent pour vous informer de vos droits, de vos devoirs et des conséquences juridiques et fiscales de vos engagements.",
            en: "Marriage, purchase of a house, death of a loved one, etc., throughout your life, the notary is present to inform you of your rights, your duties and the legal and tax consequences of your commitments.",
        }[locale]}
        <br /><br />
        ${{
            fr: "Il s'assure que chacun a bien compris l'engagement qu'il s'apprête à signer et toutes les implications qui en découlent.",
            en: "He makes sure that everyone understands the commitment he is about to sign and all the ensuing implications.",
        }[locale]}
        <br /><br />
        ${{
            fr: "Le notaire est indépendant, impartial et tenu au secret professionnel.",
            en: "The notary is independent, impartial and bound by professional secrecy.",
        }[locale]}
        <br /><br />
        ${{
            fr: "Il garantit la sécurité juridique et matérielle des actes des citoyens.",
            en: "He guarantees the legal and material security of citizens' deeds.",
        }[locale]}
    </p>
</div>
<div class="right-side">
    <div class="bordered-section">
        <div class="bordered-item">
            <div class="bordered-item-no">01</div>
            <h1 class="p-medium b-t-title">${{
            fr: "Conseil",
            en: "Advice",
        }[locale]}</h1>
            <p>${{
            fr: "Il informe et conseille ceux qui le consultent",
            en: "He informs and advises those who consult him",
        }[locale]}</p>
        </div>
        <div class="bordered-item">
            <div class="bordered-item-no">02</div>
            <h1 class="p-medium b-t-title">${{
            fr: "Authentification",
            en: "Authentication",
        }[locale]}</h1>
            <p>${{
            fr: "Il s'assure de la régularité des actes qu'il dresse en les authentifiant et en leur donnant force probante et force exécutoire",
            en: "He ensures the regularity of the acts he draws up by authenticating them and giving them probative force and enforceability.",
        }[locale]}</p>
        </div>
        <div class="bordered-item">
            <div class="bordered-item-no">03</div>
            <h1 class="p-medium b-t-title">${{
            fr: "Conservation",
            en: "Conservation",
        }[locale]}</h1>
            <p>${{
            fr: "Il préserve les actes, les mettant à l'abri de toute perte",
            en: "He preserves the deeds, making them safe from loss",
        }[locale]}</p>
        </div>
        <div class="bordered-item">
            <div class="bordered-item-no">04</div>
            <h1 class="p-medium b-t-title">${{
            fr: "Collecte d'impôt",
            en: "Tax collection",
        }[locale]}</h1>
            <p>${{
            fr: "Il collecte l'impôt dû à l'Etat à l'occasion des faits, ce qui lui permet de contrôler le montant réclamé",
            en: "He collects the tax due to the State on the occasion of the facts, which allows him to control the amount claimed",
        }[locale]}</p>
        </div>
        <div class="bordered-item">
            <div class="bordered-item-no">05</div>
            <h1 class="p-medium b-t-title">${{
            fr: "Engagement",
            en: "Commitment",
        }[locale]}</h1>
            <p>${{
            fr: "Il est entièrement responsable des actes qu'il dresse et renseignements qu'il donne.",
            en: "He is entirely responsible for the acts he draws up and the information he gives.",
        }[locale]}</p>
        </div>
    </div>
</div>
    `
}

export const WhenUs = (locale, homePath) => {
    return `
    <div class="when-us-header">
    <h1 class="large-title">${{
            fr: "Quand faire appel à un notaire ? ",
            en: "When to call a notary?",
        }[locale]}</h1>
    <p class="large-subtitle">${{
            fr: "Le notaire est là pour vous aider dans tous les moments importants de votre vie",
            en: "The notary is there to help you in all the important moments of your life",
        }[locale]}
    </p>
    <!-- <p class="p-medium">${{
            fr: "Que fait-il exactement dans les différentes matières qu’il traite ?",
            en: "What exactly does he do in the various subjects it deals with?",
        }[locale]}</p> -->
</div>
<div class="when-items">
    <div class="bordered-item">
        <div class="bordered-item-no">01</div>
        <p>${{
            fr: "Mariage, divorce, etc., il vous aide dans les affaires familiales",
            en: "Marriage, divorce, etc., he helps you in family matters",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">02</div>
        <p>${{
            fr: "Un de vos proches vient de décéder, ou vous souhaitez préparer votre succession ? Le notaire est là pour vous aider",
            en: "One of your relatives has just died, or do you want to prepare your estate? The notary is there to help you",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">03</div>
        <p>${{
            fr: "Il vous accompagne tout au long de votre processus d'achat immobilier et apporte la sécurité juridique à la transaction",
            en: "He accompanies you throughout your real estate purchase process and brings legal certainty to the transaction.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">04</div>
        <p>${{
            fr: "Vous souhaitez créer votre entreprise ou vous protéger en tant qu'indépendant ? le notaire est votre conseiller incontournable",
            en: "Do you want to start your own business or protect yourself as a self-employed person? the notary is your essential advisor",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">05</div>
        <p>${{
            fr: "Le notaire est également là pour vous aider à résoudre vos conflits pacifiquement grâce à la médiation.",
            en: "The notary is also there to help you resolve your conflicts peacefully thanks to the mediation.",
        }[locale]}</p>
    </div>
</div>
    `
}

export const ContactUsHeader = (locale, homePath) => {
    return `
    <h1 class="large-title">${{
            fr: "Contactez-nous",
            en: "Contact us",
        }[locale]}</h1>
    <h4 class="wave_line">--------------------------------</h4>
    <p class="p-medium">${{
            fr: "Pour plus d'informations. Veuillez nous contacter sur les contacts donnés ou nous rejoindre à notre bureau pour plus de précisions. Nous sommes toujours prêts à vous offrir le meilleur service que vous méritez.",
            en: "For more information. Please contact us on the contacts given or join us at our office for more details. We are always ready to give you the best service you deserve.",
        }[locale]}</p>
    `;
}

export const Footer = (locale, homePath) => {
    return `
    <p>${{
            fr: "© Notaire Martin Sindabizera. Tous les droits sont réservés",
            en: "© Notary Martin Sindabizera. All rights reserved",
        }[locale]}</p>
    <p>${{
            fr: "Réalisation par",
            en: "Realization by",
        }[locale]} <a href="https://dieudonnecostes.github.io/" target="_blank">Dieudonné Assumani</a></p>
    `;
}

export const OurServices = (locale, homePath) => {
    return `
    <div class="heading_section">
    <h1 class="large-title">${{
        fr: "Nos services",
        en: "Our services",
    }[locale]}</h1>
    <h4 class="wave_line">------------</h4>
</div>
<div class="three_servicees">
<div class="one_services">
<div id="icon">
    <i class="fa fa-stamp"></i>
</div>
<h2 class="p-medium">${{
            fr: "Authentification",
            en: "Authentication",
        }[locale]}</h2>
<p>${{
            fr: "Nous authentifions les actes que nous établissons. En apposant notre sceau et notre propre signature, nous reconnaissons officiellement la volonté exprimée par les personnes qui les signent.",
            en: "We authenticate the deeds that we establish. By affixing our seal and our own signature, we officially recognize the will expressed by the people who sign them.",
        }[locale]}</p>
</div>
<div class="one_services">
<div id="icon">
    <i class="fa fa-lightbulb"></i>
</div>
<h2 class="p-medium">${{
            fr: "Conseil",
            en: "Advice",
        }[locale]}</h2>
<p>${{
            fr: "Nous avons l'obligation de conseiller nos clients. Nous leur fournissons une information complète et leur offrons les moyens les plus appropriés pour atteindre le résultat souhaité. Nous sommes impartiaux et nous plaçons l'intérêt du client avant notre propre intérêt.",
            en: "We have an obligation to advise our clients. We provide them with complete information and offer them the most appropriate means to achieve the desired result. We are impartial and we put the interest of the client before our own interest.",
        }[locale]}</p>
</div>
<div class="one_services">
<div id="icon">
    <i class="fa fa-box-archive"></i>
</div>
<h2 class="p-medium">${{
    fr: "Conservation",
    en: "Conservation",
}[locale]}</h2>
<p>${{
    fr: "Nous assurons la conservation des documents (par exemple, un testament) au siège de notre cabinet.",
    en: "We ensure the preservation of documents (for example, a will) at the registered office of our firm.",
}[locale]}
</p>
</div>
</div>
</div>
    `;
}