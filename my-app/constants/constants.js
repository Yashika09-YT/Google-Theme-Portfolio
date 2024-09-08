import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { calculateExperience } from "../helpers/getExperience";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const accountDetails = {
  account: "Google Account",
  name: "Yashika Tanwar",
  gmail: "tanwaryashika5@gmail.com",
};

export const navBar = [
  {
    name: "About",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const info = {
  heading: "Yashika Tanwar: Software Engineer",
  mobileHeading: "Yashika Tanwar",
  description:
    "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  workExperience: "Experience",
  companies: [
    {
      designation: "Intern",
      name: "CodeTech IT Solutions",
      timePeriod: "07/2024 - 08/2024",
      workProjects: [
        {
          title: "Mix Dialog :",
          description:
            "Developing conversational Web tools as a <b>Frontend/UI Developer</b>. Technologies used : <b>React Js</b>, <b>Tailwind CSS</b>, <b>Axios</b>, <b>React-hook-form</b> and <b>Yup</b>."
        },
      ],
    },
    {
      designation: "Internship Level-1",
      name: "LNTEKS SKILLBRIDGE",
      timePeriod: "08/2023 - 09/2023",
      workProjects: [
        {
          title: "Web Development",
          description:
            "Developed a web application for Ecommerce from scratch as a frontend developer, Technologies used : <b>HTML</b>, <b>CSS</b>, <b>Js</b>, <b>json</b>, <b>database</b>",
        },
        {
          title: "Industrial Training:",
          description:
            "Open Source Code Languages, Technologies used : <b>HTML</b>, <b>CSS</b>, <b>Node Js</b>, <b>MYSQL</b>",
        },
      ],
    },
  ],
};

export const sideBarInfo = {
  about:
    "A detail-oriented and committed engineer pursuing a Bachelor of Technology in Computer Science, with strong expertise in ReactJS, HTML, CSS, SQL, Tailwind CSS, and JavaScript. Experienced in writing clean, efficient code to develop reliable and user-friendly web applications, with a focus on delivering innovative solutions through both front-end and back-end development.",

  contactDetails: [
    {
      title: "tanwaryashika5@gmail.com",
      href: "tanwaryashika5@gmail.com",
      icon: GrMail,
    },
    {
      title: "7354289459",
      href: "",
      icon: BsFillPhoneFill,
    },
    {
      title: "Linkedin Profile",
      href: "https://www.linkedin.com/in/yashika-tanwar-b1636228b/",
      icon: FaLinkedin,
    },
    {
      title: "Github Profile",
      href: "https://github.com/yashika09-yt",
      icon: AiFillGithub,
    },
    {
      title: "Portfolio link",
      href: "https://yashika09-yt.github.io/Portfolio/",
      icon: BiLinkAlt,
    }
  ],
};

export const accordionData = [
  {
    question: "What skills does Yashika have?",
    answer: `Yashika is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind, Next Js, Node Js, Express Js, MongoDb.`,
  },
  {
    question: "What services does Yashika provide?",
    answer: `Yashika provides fully responsive frontend applications with React Js, Full-stack aplications with MERN and Backend services with Node Js.`,
  },
  {
    question: "Is Yashika frontend or backend developer?",
    answer: `Yashika Tanwar is primarily a frontend developer, with expertise in ReactJS, HTML, CSS, Tailwind CSS, and JavaScript. However, she also has some exposure to backend development through her knowledge of SQL and her experience in full-stack development during an internship.`,
  },
  {
    question: "How much experience does Yashika have?",
    answer: `Yashika has hands-on experience from a 1-month full-stack development internship at CodeTech IT Solutions, where she worked on building responsive web applications. Additionally, she led an IoT project titled "Smart Agriculture" where she applied her technical skills to create innovative solutions for the agricultural sector. This blend of frontend development and IoT project leadership showcases her ability to work across different domains. she has gained knowledge and skills in frontend development and web technologies during her ongoing B.Tech studies at IET DAVV, Indore (2023-2026).`,
  },
];

export const projectVideos = [
  {
    heading: "My Portfolio",
    platform: `Linkedin.`,
    author: `Yashika Tanwar`,
    image: `/assets/portfoliodesign.jpg`,
    date: `1-Mar-2022`,
    link: `https://www.linkedin.com/posts/yashika-tanwar-b1636228b_new-portfolio-alert-im-thrilled-to-activity-7238443301605912576-VAA_?utm_source=share&utm_medium=member_android`,
  }
];

export const relatedsearch = [
  {
    text: "Yashika's Skills",
    href: "/skills",
  },
  {
    text: "Yashika's Projects",
    href: "/projects",
  },
  {
    text: "Contact Yashika",
    href: "/contact",
  },
  // {
  //   text: "Jayesh's Location",
  //   href: "/map",
  // },
];

export const footerData = {
  name: "Yashika Tanwar",
  year: new Date().getFullYear(),
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/yashika-tanwar-b1636228b/",
      icon: FaLinkedin,
    },
    {
      href: "https://yashika09-yt.github.io/Portfolio/",
      icon: BiLinkAlt,
    },
    {
      href: "https://github.com/yashika09-yt",
      icon: FaGithub,
    },
   
  ],
};

export const skillsData = {
  info: "Yashika loves to develop innovative web apps using new technologies, she is keen to gain experience, enhance and upgrade his skills, she enjoys building everything from small sites and landing pages to rich interactive web apps. she loves creating visually stunning, unique and responsive web apps.",
  skills: [
    {
      title: "Frontend Skills",
      description:
        "JavaScript, React Js, Redux, React Native, Next Js, Html5, CSS3,Tailwind Css, Material Ui, Bootstrap5, Sass and Styled Component.",
    },
    {
      title: "Backend Skills",
      description:
        "Node Js, Express Js, Mongo Db, Next Js, Postman and Jwt-Authorization.",
    },
  ],

  skillsIcons: [
    {
      title: "React Js",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "Redux",
      href: "https://redux.js.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      shadowColor: "#9B59B6",
    },
    {
      title: "Css 3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
    },
    {
      title: "Next Js",
      href: "https://nextjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "React Native",
      href: "https://reactnative.dev/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Html 5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    {
      title: "Tailwind Css",
      href: "https://tailwindcss.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      shadowColor: "#38bdf8",
    },
    {
      title: "Material Ui",
      href: "https://mui.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      shadowColor: "#1C7FB6",
    },
    {
      title: "Bootstrap 5",
      href: "https://getbootstrap.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      shadowColor: "#7C12F8",
    },
    {
      title: "Node Js",
      href: "https://nodejs.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      shadowColor: "#83CD29",
    },
    {
      title: "Express Js",
      href: "https://expressjs.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "Mongo Db",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      shadowColor: "#007ACC",
    },
    {
      title: "Styled Components",
      href: "https://styled-components.com/",
      src: "/assets/styledComponents.png",
      shadowColor: "#CB6699",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/postman.png",
      shadowColor: "#f97316",
    },
  ],
};

export const projectsData = [
  {
    title: "Portfolio",
    image: "/assets/portfoliodesign.jpg",
    description: [
      "Designed and developed a personal website link using <b>HTML</b> and <b> CSS</b> <b>JS</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/posts/yashika-tanwar-b1636228b_new-portfolio-alert-im-thrilled-to-activity-7238443301605912576-VAA_?utm_source=share&utm_medium=member_android",
    liveDemo: "https://yashika09-yt.github.io/Portfolio/",
    sourceCode: "https://github.com/Yashika09-YT/Portfolio",
  },
  

];

export const contactDetails = [
  {
    icon: MdCall,
    type: "Mobile",
    value: "7354289459",
    href: "",
  },
  {
    icon: GrMail,
    type: "Email",
    value: "tanwaryashika5@gmail.com",
    href: "tanwaryashika5@gmail.com",
  },
  {
    icon: MdLocationOn,
    type: "Address",
    value: "Indore, Madhya Pradesh",
    href: "",
  },
  {
    icon: FaLinkedin,
    type: "Linkedin",
    value: "Contact through Linkedin",
    href: "https://www.linkedin.com/in/yashika-tanwar-b1636228b/",
  },
];

export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent, Kindly contact directly over Email or Phone!",
  successMessage:
    "Your message has been sent successfully, I will contact you soon!",
};
