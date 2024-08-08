import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { SiAppwrite } from "react-icons/si";

import sardafarms from "./assets/sardafarms.webp";
import azafashion from "./assets/azafashion.webp";
import beelog from "./assets/beelog.webp";
import mixmaster from "./assets/mixmaster.webp";
import mystore from "./assets/mystore.webp";
import purplekaddu from "./assets/purplekaddu.webp";
import whitedwarf from "./assets/whitedwarf.webp";
import zigmapaints from "./assets/zigmapaints.webp";
import goindigo from './assets/goindigo.png';

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML5",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "CSS/SCSS",
    icon: <FaCss3Alt className="h-16 w-16 text-emerald-500" />,
    text: "text goes here",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React JS",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Redux Toolkit",
    icon: <SiRedux className="h-16 w-16 text-emerald-500" />,
    text: "text",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "text",
  },
  {
    id: nanoid(),
    title: "Daisy UI",
    icon: <SiDaisyui className="h-16 w-16 text-emerald-500" />,
    text: "text",
  },
  {
    id: nanoid(),
    title: "REST API",
    icon: <AiFillApi className="h-16 w-16 text-emerald-500" />,
    text: "text",
  },

  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
    text: "text",
  },
  {
    id: nanoid(),
    title: "Appwrite BaaS",
    icon: <SiAppwrite className="h-16 w-16 text-emerald-500" />,
    text: "text",
  },
 
];

export const projects = [
  {
    id: nanoid(),
    category: "website",
    img: sardafarms,
    url: "https://sardafarms.com/",

    title: "Sarda Farms",
    text: "I converted the PSD to HTML/CSS used jQuery plugins for animations as well animate.css",
  },
  {
    id: nanoid(),
    category: "website",
    img: azafashion,
    url: "https://www.azafashions.com/",

    title: "aza fashion",
    text: "I converted the PSD to /CSS used jQuery plugins.",
  },
  {
    id: nanoid(),
    category: "website",
    img: purplekaddu,
    url: "https://www.purplekaddu.com/",

    title: "purple kaddu",
    text: "I converted the PSD to HTML/CSS used jQuery plugins.",
  },
  {
    id: nanoid(),
    category: "website",
    img: zigmapaints,
    url: "https://www.zigmapaints.com/",
    title: "zigma paints",
    text: "I designed this website from scratch with HTML/CSS/JS/jQuery.",
  },
  {
    id: nanoid(),
    category: "website",
    img: whitedwarf,
    title: "white dwarf",
    url: "http://www.whitedwarf.in/",
    text: "I designed this website from scratch with HTML/CSS/JS/jQuery.",
  },
  {
    id: nanoid(),
    category: "react",
    img: beelog,
    title: "beelog",
    url: "https://bee-log-prod.vercel.app",
    text: "I created this personal react blog site with React js and Tailwind css, and Appwrite BaaS.",
  },
  {
    id: nanoid(),
    category: "react",
    img: mixmaster,
    title: "mix master",
    url: "https://mix-master-pi.vercel.app/",
    text: "A cocktail displayer app made with react js and Material UI, used online free cocktail api for backend.",
  },
  {
    id: nanoid(),
    category: "react",
    img: mystore,
    title: "my store",
    url: "https://mystore-alpha.vercel.app",
    text: "An e-commerce dummy app made with daisy UI and tailwind css. Used free api for backend.",
  },
  {
    id: nanoid(),
    category: "react",
    img: goindigo,
    title: "goindigo",
    url:'https://goindigo.in',
    text: 'Worked in Micro-frontend: Recommeded Seats and Login module for Adobe indigo project.'
  } 
];
