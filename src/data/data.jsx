import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Work1 from "../assets/Work1.png";
import Work2 from "../assets/Work2.jpg";
import Work3 from "../assets/Work3.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First name: ",
    description: "Jay",
  },
  {
    id: 2,
    title: "Last name: ",
    description: "Peura",
  },

  {
    id: 4,
    title: "Nationality: ",
    description: "Finnish",
  },
  {
    id: 5,
    title: "Languages: ",
    description: "Finnish, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of Active Hobby Experience",
  },
  {
    id: 2,
    no: "About 1",
    title: "Year of Work Experience",
  },
  {
    id: 3,
    no: "100%",
    title: "Passion still remaining",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "78",
  },
  {
    id: 2,
    title: "CSS",
    percentage: "65",
  },
  {
    id: 3,
    title: "JavaScript",
    percentage: "70",
  },
  {
    id: 4,
    title: "Java",
    percentage: "30",
  },
  {
    id: 5,
    title: "Apache Tomcat",
    percentage: "25",
  },
  {
    id: 6,
    title: "Git",
    percentage: "68",
  },
  {
    id: 7,
    title: "React",
    percentage: "75",
  },
  {
    id: 8,
    title: "Vue",
    percentage: "85",
  },
];

export const resume = [
  {
    id: 1,
    category: "exp",
    icon: <FaBriefcase />,
    year: "01/2023 - PRESENT",
    title: "Junior Software Developer <span> Momio ApS </span>",
    desc: "Done some old syntax vanilla JavaScript, HTML + CSS and Java (+ .jsp). Familiar with Tomcat and SVN.",
  },
  {
    id: 2,
    category: "exp",
    icon: <FaBriefcase />,
    year: "04/2022 - 07/2022",
    title: "Trainee Software Developer <span> Sofia Digital </span>",
    desc: "Worked with TV streaming apps like C More or Jupiter. I did mostly HTML, CSS, Vue.js and vanilla JavaScript. I also tested with televisions.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "10/2021 - 07/2022",
    title: "Trainee Academy <span> Buutti Oy </span>",
    desc: "Studied mainly front-end coding with ReactJS and regular JavaScript.",
  },
];

export const projects = [
  {
    id: 1,
    img: Work1,
    title: "Discord Bot",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "ValerieBot V2.1",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "JavaScript, NodeJS",
      },
      {
        title: "Preview: ",
        desc: "https://github.com/JayPeura/ValerieBotV2.1",
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "Portfolio Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Website",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "ReactJS",
      },
      {
        title: "Preview: ",
        desc: "https://github.com/JayPeura/jaypeura.github.io",
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: "Social Media Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Starshifted",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "Vue, JavaScript, NodeJS, Quasar",
      },
      {
        title: "Preview: ",
        desc: "https://github.com/JayPeura/starshifted",
      },
    ],
  },
];
