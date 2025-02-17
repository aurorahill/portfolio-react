import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaPaintBrush,
  FaLightbulb,
  FaRegEnvelope,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

import {
  musicPlayerPrj,
  malinkaPrj,
  geminiClonePrj,
  korylMeblePrj,
  currencyConverterPrj,
  toDoListPrj,
  nightSkyPrj,
  littleLemonPrj,
  colorBoardPrj,
  brainwavePrj,
  portfolioPrj,
  findCoachPrj,
  reactBlogPrj,
  html,
  css,
  javascript,
  bootstrap,
  tailwind,
  git,
  github,
  gulp,
  sass,
  figma,
  vue,
  react,
  webpack,
  gmail,
  whatsapp,
  download,
  typescript,
  UI,
  UX,
  code,
  python,
  node,
  mongodb,
  express,
} from "./assets";

const dataPl = {
  hireMe: "Napisz",
  header: {
    description: `Witaj! Zajmuję się projektowaniem i kodowaniem nowoczesnych stron internetowych, zoptymalizowanych pod względem SEO  z podejściem mobile-first. Obecnie koncentruję się na doskonaleniu umiejętności front-endowych, dążąc do tworzenia intuicyjnych i estetycznych aplikacji webowych. Zapraszam do przejrzenia mojego portfolio!`,
    fact1: "Godzin nauki",
    fact2: "Wysiłku i zaangażowania",
    fact3: "Responsywnych projektów",
  },

  menu: [
    { name: "O mnie", id: "About" },
    { name: "Usługi", id: "Services" },
    { name: "Umiejętności", id: "Skills" },
    { name: "Projekty", id: "Projects" },
    { name: "Certyfikaty", id: "Courses" },
    { name: "Kontakt", id: "Contact" },
  ],
  aboutMe: {
    title: "O mnie",
    name: "Nazywam się",
    description: `Wykształcenie chemiczne i kilkuletnie doświadczenie laboratoryjne rozwinęło u mnie analityczne myślenie i zdolność rozwiązywania problemów. Jednak kreatywność i pasja do zdobywania wiedzy skłoniły mnie do zmiany ścieżki kariery – projektowania i tworzenia aplikacji internetowych. Skupiam się na budowaniu nowoczesnych, zoptymalizowanych pod kątem SEO stron internetowych z podejściem mobile-first. Jednocześnie stale poszerzam swoją wiedzę, by tworzyć intuicyjne i wydajne rozwiązania. Jestem pracowita, dobrze zorganizowana i świetnie radzę sobie z pracą pod presją czasu. Chętnie podejmuję nowe wyzwania i szukam możliwości współpracy ze specjalistami backendu oraz projektów, które pozwolą mi rozwijać się jako front-end developer. Moim celem jest osiągnięcie poziomu full-stack developera i czynny udział w innowacyjnych projektach. Wspólnie możemy stworzyć coś wyjątkowego!`,
    download: "Pobierz CV",
  },

  servicesTitle: "Usługi",
  services: [
    {
      title: "Projektowanie UI/UX",
      icon: <FaPaintBrush />,
      description: `Projektowanie intuicyjnych interfejsów użytkownika we współpracy z zespołami projektowymi, z wykorzystaniem narzędzi takich jak Figma. Skupiam się na zapewnieniu użyteczności i estetyki, jednocześnie dbając o zgodność z wymaganiami technicznymi.`,
    },
    {
      title: "Tworzenie stron internetowych",
      icon: <FaCode />,
      color: "blueviolet",
      colorRGB: "138, 43, 226",
      description: `Tworzenie responsywnych i dynamicznych stron internetowych z wykorzystaniem nowoczesnych technologii frontendowych, takich jak HTML, CSS, JavaScript, React i Vue. Dążę do optymalizacji wydajności i dostępności, aby zapewnić doskonałe doświadczenie użytkownika.`,
    },
    {
      title: "Tworzenie treści",
      icon: <FaLightbulb />,
      color: "var(--color-success)",
      colorRGB: "var(--color-success-rgb)",
      description: `Tworzenie treści stron internetowych, które wspierają komunikację z klientami i promują usługi. Staram się dostosować treści do potrzeb użytkowników, koncentrując się na jasnym przekazie, który angażuje i wspiera cele biznesowe.`,
    },
  ],
  projectsTitle: "Projekty",
  projects: [
    {
      title: "Blog Rodzinny",
      content:
        "Ten projekt to w pełni funkcjonalna aplikacja blogowa stworzona w React, która umożliwia użytkownikom tworzenie, przeglądanie, aktualizowanie, usuwanie i komentowanie postów. Zawiera uwierzytelnianie użytkowników oraz bezpieczne przechowywanie danych z wykorzystaniem Firebase.",
      img: reactBlogPrj,
      githubUrl: "https://github.com/aurorahill/react-firebase-blog",
      url: "https://react-blog-app-c9c57.web.app/",
      stacks: [
        {
          name: "React",
          svg: react,
        },
        {
          name: "SASS",
          svg: sass,
        },
      ],
    },
    {
      title: "Znajdź nauczyciela",
      content:
        "Aplikacja typu Single Page (SPA) stworzona podczas kursu Vue, wykorzystująca Vue 3, Vuex, Vue Router, Firebase Realtime Database, Firebase Authentication oraz Firebase Hosting.",
      img: findCoachPrj,
      githubUrl: "https://github.com/aurorahill/coach-list-project",
      url: "https://coach-project-824fc.web.app/",
      stacks: [
        {
          name: "Vue",
          svg: vue,
        },
        {
          name: "SASS",
          svg: sass,
        },
      ],
    },
    {
      title: "Odtwarzacz muzyki",
      content:
        "Atrakcyjny wizualnie odtwarzacz muzyki stworzony w React.js i Vite. Dzięki nowoczesnemu, responsywnemu designowi oferuje pozytywne wrażenia użytkownika oraz intuicyjne sterowanie utworami.",
      img: musicPlayerPrj,
      githubUrl: "https://github.com/aurorahill/music-player",
      url: "https://aurorahill.github.io/music-player/",
      stacks: [
        {
          name: "React",
          svg: react,
        },
        {
          name: "CSS",
          svg: css,
        },
      ],
    },
    {
      title: "Malinka",
      content:
        "Klasyczna strona internetowa cukierni Malinka, stworzona przy użyciu HTML, SASS, JavaScript oraz Webpack. Nowoczesny design i pełna responsywność oferują przyjemne i angażujące doświadczenie dla użytkowników.",
      img: malinkaPrj,
      githubUrl: "https://github.com/aurorahill/cukiernia-malinka",
      url: "https://aurorahill.github.io/cukiernia-malinka/",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "SASS",
          svg: sass,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
        {
          name: "Webpack",
          svg: webpack,
        },
      ],
    },
    {
      title: "Portfolio",
      content:
        "Moje pierwsze osobiste portfolio, prezentujące moje projekty i umiejętności. Klasyczna strona internetowa stworzona przy użyciu HTML, SASS, JavaScript i Webpack z responsywnym i nowoczesnym designem.",
      img: portfolioPrj,
      githubUrl: "https://github.com/aurorahill/portfolio",
      url: "https://aurorahill.github.io/portfolio/",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "SASS",
          svg: sass,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
        {
          name: "Webpack",
          svg: webpack,
        },
      ],
    },
    {
      title: "Klon Gemini Chatbot",
      content:
        "Uproszczona wersja chatbota Gemini stworzona z wykorzystaniem Google Chat API, z frontendem opartym na HTML, SASS, JavaScript i Webpack. Strona w pełni responsywna zapewniająca dobre i intuicyjne wrażenia użytkownika.",
      img: geminiClonePrj,
      githubUrl: "https://github.com/aurorahill/gemini-clone",
      url: "https://aurorahill.github.io/gemini-clone/",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "SASS",
          svg: sass,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
        {
          name: "Webpack",
          svg: webpack,
        },
      ],
    },
    {
      title: "Koryl MEBLE",
      content:
        "Strona typu landing page dla firmy stolarskiej, stworzona przy użyciu HTML, SASS, Bootstrap, JavaScript i Webpack. Zaprojektowana w celu zdobycia potencjalnych klientów dzięki profesjonalnemu i przyjaznemu interfejsowi użytkownika, klasycznemu designowi i pełnej responsywności.",
      img: korylMeblePrj,
      githubUrl: "https://github.com/aurorahill/koryl-meble",
      url: "https://aurorahill.github.io/koryl-meble/",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "SASS",
          svg: sass,
        },
        {
          name: "Bootstrap",
          svg: bootstrap,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
        {
          name: "Webpack",
          svg: webpack,
        },
      ],
    },
    {
      title: "Currency Converter",
      content:
        "Aplikacja internetowa stworzona z wykorzystaniem darmowego API Narodowego Banku Polskiego, opracowana w React i Vite, oferująca aktualne kursy wymiany walut oraz dane finansowe.",
      img: currencyConverterPrj,
      githubUrl: "https://github.com/aurorahill/currency-converter",
      url: "https://aurorahill.github.io/currency-converter/",
      stacks: [
        {
          name: "React",
          svg: react,
        },
        {
          name: "SASS",
          svg: sass,
        },
      ],
    },
    {
      title: "To Do App",
      content:
        "Klasyczna aplikacja 'To Do List' stworzona w React i Vite, z funkcjami grupowania i edytowania zadań z wyszukiwarką. Dane przechowywane w local storage.",
      img: toDoListPrj,
      githubUrl: "https://github.com/aurorahill/to-do-app",
      url: "https://aurorahill.github.io/to-do-app/",
      stacks: [
        {
          name: "React",
          svg: react,
        },
        {
          name: "CSS",
          svg: css,
        },
      ],
    },
    {
      title: "Brainwave",
      content:
        "Strona typu landing page stworzona przy użyciu React oraz Tailwind CSS. Projekt opracowany od podstaw, oparty na tutorialu JavaScript Mastery, koncentrujący się na responsywnym designie i architekturze opartej na komponentach, mający na celu rozwój umiejętności w React i Tailwind.",
      img: brainwavePrj,
      githubUrl: "https://github.com/aurorahill/brainwave",
      url: "https://aurorahill.github.io/brainwave/",
      stacks: [
        {
          name: "React",
          svg: react,
        },
        {
          name: "Tailwind",
          svg: tailwind,
        },
      ],
    },
    {
      title: "Night Sky",
      content:
        "Prosty projekt nocnego nieba z losowo generowanymi konstelacjami, stworzony przy użyciu HTML5 canvas i JavaScript. Projekt ten symuluje ruchome, gwiaździste niebo, na którym konstelacje pojawiają się i przesuwają, oferując estetyczne wizualne doświadczenia.",
      img: nightSkyPrj,
      githubUrl: "https://github.com/aurorahill/night-sky",
      url: "https://aurorahill.github.io/night-sky/",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "SASS",
          svg: sass,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
        {
          name: "Webpack",
          svg: webpack,
        },
      ],
    },
    {
      title: "Little Lemon",
      content:
        "Aplikacja typu Single Page (SPA) stworzona w React, zawierająca kontrolowany formularz z wbudowaną walidacją. Projekt ten został opracowany w ramach profesjonalnego kursu Meta Front-End Developer, mając na celu wykazanie biegłości w React i obsłudze formularzy.",
      img: littleLemonPrj,
      githubUrl: "https://github.com/aurorahill/little-lemon",
      url: "https://aurorahill.github.io/little-lemon/",
      stacks: [
        {
          name: "React",
          svg: react,
        },
        {
          name: "CSS",
          svg: css,
        },
      ],
    },
    {
      title: "Color board",
      content:
        "Interaktywny projekt stworzony w JavaScript, w którym poruszanie myszką po planszy dynamicznie zmienia jej kolory. Posiada możliwość ustawienia palety kolorów oraz szybkości ich zanikania.",
      img: colorBoardPrj,
      githubUrl: "https://github.com/aurorahill/color-board",
      url: "https://aurorahill.github.io/color-board/",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "SASS",
          svg: sass,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
        {
          name: "Webpack",
          svg: webpack,
        },
      ],
    },
  ],

  skillsTitle: "Umiejętności",
  skills: [
    {
      title: "UI/UX",
      data: [
        {
          svg: figma,
          name: "Figma",
        },
      ],
    },
    {
      title: "Frontend",
      data: [
        {
          svg: html,
          name: "HTML5",
        },
        {
          svg: css,
          name: "CSS3",
        },
        {
          svg: javascript,
          name: "JavaScript",
        },
        {
          svg: sass,
          name: "Sass",
        },
        {
          svg: bootstrap,
          name: "Bootstrap",
        },
        {
          svg: tailwind,
          name: "Tailwind",
        },
        {
          svg: react,
          name: "React",
        },
        {
          svg: vue,
          name: "Vue",
        },
        {
          svg: github,
          name: "Github",
        },
        // {
        //   svg: git,
        //   name: "Git",
        // },
        {
          svg: webpack,
          name: "Webpack",
        },
        {
          svg: gulp,
          name: "Gulp",
        },
      ],
    },
  ],

  socialHandles: [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:katarzyna.lubecka93@gmail.com",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/aurorahill",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/katarzyna-lubecka-b4736a182/",
    },
    {
      name: "Telefon",
      icon: <FaPhoneAlt />,
      link: "tel:+48792829594",
    },
  ],

  coursesTitle: "Certyfikaty",
  coursesInstructor: "Instruktor",

  courses: [
    {
      title: "Meta Front-End Developer Professional Certificate",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/professional-cert/9QPYEX94GYMO",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "Code",
          svg: code,
        },
      ],
    },
    {
      title: "Vue - The Complete Guide",
      verifyLink:
        "https://www.udemy.com/certificate/UC-fc51bd71-1d14-4594-912a-4c8f1cee1226/",
      institution: "Udemy",
      tutor: "Maximilian Schwarzmuller",
      stacks: [
        {
          name: "Vue",
          svg: vue,
        },
      ],
    },
    {
      title: "Learn Tailwind CSS",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/H22X7QOQTK5D",
      institution: "Coursera",
      tutor: "Scrimba",
      stacks: [
        {
          name: "Tailwind",
          svg: tailwind,
        },
      ],
    },
    {
      title: "Bootstrap",
      verifyLink:
        "https://www.udemy.com/certificate/UC-e5f92a2d-e95a-4859-ae2a-5fa13c4975a6/",
      institution: "Udemy",
      tutor: "Mateusz Maj",
      stacks: [
        {
          name: "Bootstrap",
          svg: bootstrap,
        },
      ],
    },
    {
      title: "Introduction to Front-End Development",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/FJB07QL7LEQK",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "Code",
          svg: code,
        },
      ],
    },
    {
      title: "Learn TypeScript",
      verifyLink: "https://coursera.org/verify/TXY6WDK4ZM2D",
      institution: "Coursera",
      tutor: "Scrimba",
      stacks: [
        {
          name: "Typescript",
          svg: typescript,
        },
      ],
    },

    {
      title: "Coding Interview Preparation",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/E69SJJKOBOLX",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "Code",
          svg: code,
        },
      ],
    },

    {
      title: "Principles of UX/UI Design",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/4DD153MTYRPT",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "UI",
          svg: UI,
        },
        {
          name: "UX",
          svg: UX,
        },
      ],
    },
    {
      title: "Advanced React",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/K5XHDU9S1LTP",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "React",
          svg: react,
        },
      ],
    },
    {
      title: "React Basics",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/DP4DS5W03JBA",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "React",
          svg: react,
        },
      ],
    },
    {
      title: "Learn TypeScript",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/KG33YCZR06BQ",
      institution: "Coursera",
      tutor: "Bob Ziroll",
      stacks: [
        {
          name: "Typescript",
          svg: typescript,
        },
      ],
    },
    {
      title: "Front-End Developer Capstone",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/0YFI7NFMJGLZ",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "Code",
          svg: code,
        },
      ],
    },
    {
      title: "Programming with JavaScript",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/YBMNSNJRG1T9",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "Javascript",
          svg: javascript,
        },
      ],
    },
    {
      title: "Version Control",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/GFFLGQGSFTOS",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "Git",
          svg: git,
        },
        {
          name: "Github",
          svg: github,
        },
      ],
    },
    {
      title: "HTML and CSS in depth",
      verifyLink:
        "https://www.coursera.org/account/accomplishments/verify/J55JYVXDR6V7",
      institution: "Coursera",
      tutor: "Meta",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "CSS",
          svg: css,
        },
      ],
    },

    {
      title: "15 komponentów na strony WWW!",
      verifyLink:
        "https://www.udemy.com/certificate/UC-f4acbf46-245b-41be-99b9-0cded3f2756c/",
      institution: "Udemy",
      tutor: "Mateusz Maj",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "CSS",
          svg: css,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
      ],
    },
    {
      title: "Zaawansowane projekty w CSS i JavaScript",
      verifyLink:
        "https://www.udemy.com/certificate/UC-713f39f0-4afd-44e9-b5dc-cde903efdc31/",
      institution: "Udemy",
      tutor: "Samuraj Programowania",
      stacks: [
        {
          name: "Webpack",
          svg: webpack,
        },
        {
          name: "Sass",
          svg: sass,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
      ],
    },
    {
      title: "Kompletmy kurs programowania w JavaScript",
      verifyLink:
        "https://www.udemy.com/certificate/UC-c5102507-d58a-4fc0-809d-a45a42254f6a/",
      institution: "Udemy",
      tutor: "Samuraj Programowania",
      stacks: [
        {
          name: "JavaScript",
          svg: javascript,
        },
      ],
    },
    {
      title: "Node.js, Express i MongoDB",
      verifyLink:
        "https://www.udemy.com/certificate/UC-5250918b-1581-47f6-a82e-6bdb334b2388/",
      institution: "Udemy",
      tutor: "Samuraj Programowania",
      stacks: [
        {
          name: "MongoDB",
          svg: mongodb,
        },
        {
          name: "NodeJS",
          svg: node,
        },
        {
          name: "Express",
          svg: express,
        },
      ],
    },
    {
      title: "Frontend średniozaawansowany",
      verifyLink:
        "https://www.udemy.com/certificate/UC-1ff8911b-66df-448c-8ddb-8b518ce251ef/",
      institution: "Udemy",
      tutor: "Samuraj Programowania",
      stacks: [
        {
          name: "Sass",
          svg: sass,
        },
        {
          name: "CSS",
          svg: css,
        },
        {
          name: "JavaScript",
          svg: javascript,
        },
      ],
    },
    {
      title: "Web developer od podstaw",
      verifyLink:
        "https://www.udemy.com/certificate/UC-5ac593a1-7c47-42d2-a7bc-862b9a530177/",
      institution: "Udemy",
      tutor: "Samuraj Programowania",
      stacks: [
        {
          name: "HTML",
          svg: html,
        },
        {
          name: "CSS",
          svg: css,
        },
      ],
    },
    {
      title: "Python dla początkujących",
      verifyLink:
        "https://www.udemy.com/certificate/UC-7384e6cb-1c87-4575-a43b-4f1211da846b/",
      institution: "Udemy",
      tutor: "Rafał Mobilo",
      stacks: [
        {
          name: "Python",
          svg: python,
        },
      ],
    },
    {
      title: "Python dla średniozaawansowanych",
      verifyLink:
        "https://www.udemy.com/certificate/UC-ba64bde7-7275-4ab5-8b51-b00782c4636b/",
      institution: "Udemy",
      tutor: "Rafał Mobilo",
      stacks: [
        {
          name: "Python",
          svg: python,
        },
      ],
    },
  ],

  contactTitle: "Kontakt",
  contactDescription1: "Chętnie pomogę przy ",
  contactDescription2: "Twoim projekcie.",
  contactDescription3: "Zapraszam do kontaktu!",
  contactBtnMsg: "Wiadomość",
  contactBtnDownload: "Pobierz",

  contactInfo: [
    {
      name: "Email",
      value: "katarzyna.lubecka93@gmail.com",
      link: "mailto:katarzyna.lubecka93@gmail.com",
      icon: gmail,
      btnIcon: <FaRegEnvelope />,
      color: "rgb(202,55,55)",
    },
    {
      name: "WhatsApp",
      value: "+48792829594",
      link: "https://wa.me/48792829594",
      icon: whatsapp,
      btnIcon: <FaWhatsapp />,
      color: "rgb(64,195,81)",
    },
    {
      name: "CV",
      value: "Katarzyna Lubecka",
      link: "/KatarzynaLubeckaCVpl.pdf",
      icon: download,
      btnIcon: <FaDownload />,
      color: "var(--color-primary)",
    },
  ],
  formData: {
    namePlaceholder: "Imię i nazwisko",
    emailPlaceholder: "Email",
    messagePlaceholder: "Wiadomość",
    button: "Wyślij",
    buttonSending: "Czekaj...",
    validateTextEmpty: "To pole nie może być puste",
    validateTextNumber: "Minimalna liczba znaków: ",
    validateEmailText: "Wpisz poprawny adres email",
    agreeTerm:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ",
    privacyPolicy: "Polityką prywatności.",
    validatePolicy: "Musisz wyrazić zgodę na przetwarzanie danych osobowych",
  },
  privacyPolicy: `
1. Administrator Danych
Administratorem danych osobowych jest Katarzyna Lubecka.

2. Zakres zbieranych danych
Zbieramy dane osobowe, które użytkownik dobrowolnie podaje w formularzu kontaktowym, tj. imię i nazwisko, adres e-mail oraz treść wiadomości.

3. Cel przetwarzania danych
Dane osobowe użytkowników będą przetwarzane wyłącznie w celu udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy.

4. Podstawa prawna przetwarzania danych
Podstawą prawną przetwarzania danych osobowych jest zgoda użytkownika (art. 6 ust. 1 lit. a RODO).

5. Okres przechowywania danych
Dane osobowe będą przechowywane przez okres niezbędny do udzielenia odpowiedzi na zapytanie, a po tym czasie zostaną usunięte.

6. Prawa użytkownika
Użytkownik ma prawo dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo do przenoszenia danych. Użytkownik może wycofać zgodę na przetwarzanie danych w dowolnym momencie, co nie wpływa na zgodność z prawem przetwarzania danych przed jej wycofaniem.

7. Odbiorcy danych
Dane osobowe użytkowników mogą być przekazywane firmie hostingowej, która zapewnia usługi techniczne związane z funkcjonowaniem strony internetowej.

8. Informacja o cookies
Strona korzysta tylko z niezbędnych plików cookies. Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce.

9. Kontakt
Kontakt w sprawie przetwarzania danych osobowych można nawiązać za pomocą adresu e-mail: katarzyna.lubecka93@gmail.com.
  `,
  meta: {
    description:
      "Witaj na mojej stronie! Tworzę nowoczesne, responsywne strony internetowe i aplikacje webowe zoptymalizowane pod kątem SEO, wydajności i doświadczenia użytkownika. Zapraszam do kontaktu!",
    ogDescription:
      "Jako front-end developer z pasją, poszukuję nowych wyzwań! Projektuję i tworzę nowoczesne, responsywne oraz przyjazne użytkownikowi aplikacje webowe. Jestem otwarta na nowe możliwości – zapraszam do kontaktu!",
  },
};

export default dataPl;
