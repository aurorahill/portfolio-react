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

const dataEn = {
  hireMe: "Hire Me",
  header: {
    description: `Welcome! I'm passionate about designing and coding modern, SEO-optimized websites with a mobile-first approach. Currently focused on mastering front-end development, I strive to create user-friendly and visually engaging web applications. I hope you enjoy exploring my work!`,
    fact1: "Self-learning hours",
    fact2: "Effort and engagement",
    fact3: "Full responsive project",
  },
  menu: [
    { name: "About", id: "About" },
    { name: "Services", id: "Services" },
    { name: "Skills", id: "Skills" },
    { name: "Projects", id: "Projects" },
    { name: "Courses", id: "Courses" },
    { name: "Contact", id: "Contact" },
  ],
  aboutMe: {
    title: "About Me",
    name: "I am",
    description: `With a background in Chemistry and years of hands-on lab experience, I developed strong analytical and problem-solving skills. My passion for creativity led me to a new path: designing and developing web applications. I focus on building modern, SEO-optimized websites with a mobile-first approach and continuously expand my knowledge to craft engaging, high-performance user experiences. Hard-working and organized, I thrive under pressure and embrace new challenges. I'm seeking opportunities to collaborate with backend specialists or join projects that support my growth as a front-end developer. My goal is to become a full-stack developer while contributing to impactful projects. Let's connect and create something amazing!`,
    download: "Download CV",
  },
  servicesTitle: "Services",
  services: [
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush />,
      description: `Designing intuitive user interfaces in close collaboration with design teams, using tools like Figma. I focus on ensuring usability and aesthetics, while maintaining alignment with technical requirements.`,
    },
    {
      title: "Web Development",
      icon: <FaCode />,
      color: "blueviolet",
      colorRGB: "138, 43, 226",
      description: `Creating responsive, dynamic websites using modern frontend technologies such as HTML, CSS, JavaScript, React, and Vue. I strive to optimize performance and accessibility, ensuring an excellent user experience.`,
    },
    {
      title: "Content Creation",
      icon: <FaLightbulb />,
      color: "var(--color-success)",
      colorRGB: "var(--color-success-rgb)",
      description: `Creating website content that aids in client communication and promotes services. My writing is tailored to user needs, focusing on clear messaging that engages and supports business goals.`,
    },
  ],
  projectsTitle: "My Projects",
  projects: [
    {
      title: "Family Blog",
      content:
        "This project is a fully functional blog application built with React, allowing users to create, view, and engage with blog posts through comments. It includes user authentication and secure data storage powered by Firebase.",
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
      title: "Find a Coach",
      content:
        "A Single Page Application (SPA) developed during a Vue course, utilizing Vue 3, Vuex, Vue Router, Firebase Realtime Database, Firebase Authentication, and Firebase Hosting.",
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
      title: "Music Player",
      content:
        "A visually appealing music player built with React.js and Vite, providing a seamless and dynamic experience. With a modern, responsive design, it offers intuitive controls to play, pause, and skip tracks effortlessly.",
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
        "A multipage website for a confectionery, developed using HTML, SASS, JavaScript, and Webpack, providing a delightful and engaging experience for users.",
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
        "My first personal portfolio, showcasing my work and skills, created using HTML, SASS, JavaScript, and Webpack for a responsive and modern design",
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
      title: "Gemini Clone",
      content:
        "A simplified version of the Gemini chatbot developed using the Google Chat API, with a frontend built using HTML, SASS, JavaScript, and Webpack for a streamlined user experience.",
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
        "A landing page for a carpentry company, developed using HTML, SASS, Bootstrap, JavaScript, and Webpack, designed to attract potential clients with a professional and user-friendly interface.",
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
        "A web application built using the free API of the National Bank of Poland, developed with React and Vite, offering real-time currency exchange rates and financial data.",
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
        "A classic 'To Do List' application built with React and Vite, featuring task grouping, task editing, and a search function for easy task management.",
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
        "A landing page built to practice React components and Tailwind CSS customization. This project was developed from scratch by following the JavaScript Mastery tutorial, focusing on responsive design and component-based architecture to enhance skills in React and Tailwind.",
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
        "A simple night sky design with randomly generated constellations, created using the HTML5 canvas and JavaScript. This project simulates a dynamic, starry sky where constellations appear and shift, offering a visually engaging experience.",
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
        "A Single Page Application (SPA) created using React, featuring a controlled form with built-in validation. This project was developed as part of the Meta Front-End Developer professional course to demonstrate proficiency in React and form handling.",
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
        "An interactive and visually appealing JavaScript experience where moving the mouse over a board changes its colors dynamically. This project focuses on creating a smooth and engaging user experience with real-time visual feedback.",
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

  skillsTitle: "My Skills",
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
      name: "Phone",
      icon: <FaPhoneAlt />,
      link: "tel:+48792829594",
    },
  ],

  coursesTitle: "Courses",
  coursesInstructor: "Instructor",

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
      title: "15 components for WWW!",
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
      title: "Advanced projects in CSS and JavaScript",
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
      title: "Complete JavaScript Programming Course",
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
      title: "Node.js, Express and MongoDB",
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
      title: "Frontend - intermediate",
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
      title: "Web developer from scratch",
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
      title: "Python for begginers",
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
      title: "Python for intermediate",
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
  contactTitle: "Contact",
  contactDescription1: "I'm ready to help with ",
  contactDescription2: "your project.",
  contactDescription3: "Get in touch!",
  contactBtnMsg: "Message",
  contactBtnDownload: "Download",

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
      link: "/KatarzynaLubeckaCV.pdf",
      icon: download,
      btnIcon: <FaDownload />,
      color: "var(--color-primary)",
    },
  ],
  formData: {
    namePlaceholder: "Your full name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    button: "Send now",
    buttonSending: "Sending...",
    validateTextEmpty: "This field cannot be empty",
    validateTextNumber: "Minimum number of characters: ",
    validateEmailText: "Please enter a valid email address",
  },
  meta: {
    description:
      "Welcome to my website! I create modern, responsive websites and web applications optimized for SEO, performance, and user experience. Explore my portfolio and let's connect!",
    ogDescription:
      "Passionate Frontend Developer looking for new challenges!  I design and develop modern, responsive, and user-friendly web applications. Open to new opportunities - let’s connect!",
  },
};

export default dataEn;
