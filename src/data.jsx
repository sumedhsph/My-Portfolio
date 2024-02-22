import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaCss3Alt , FaBootstrap , FaGithub ,  } from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { SiAppwrite } from "react-icons/si";

export const links = [
    { id: nanoid(), href: "#home", text: "home" },
    { id: nanoid(), href: "#about", text: "about" },
    { id: nanoid(), href: "#skills", text: "skills" },
    { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML5',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id:nanoid(),
    title:'CSS/SCSS',
    icon:<FaCss3Alt className='h-16 w-16 text-emerald-500'/>,
    text:"text goes here"
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React JS',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id:nanoid(),
    title:'Redux Toolkit',
    icon:<SiRedux  className='h-16 w-16 text-emerald-500'/>,
    text:"text"
  },
  {
    id:nanoid(),
    title:'Tailwind CSS',
    icon:<SiTailwindcss  className='h-16 w-16 text-emerald-500'/>,
    text:'text'
  },
  {
    id:nanoid(),
    title:'Daisy UI',
    icon:<SiDaisyui  className='h-16 w-16 text-emerald-500'/>,
    text:'text'
  },
  {
    id:nanoid(),
    title:'REST API',
    icon:<AiFillApi   className='h-16 w-16 text-emerald-500'/>,
    text:'text'
  },

  {
    id:nanoid(),
    title:'Bootstrap',
    icon:<FaBootstrap  className='h-16 w-16 text-emerald-500'/>,
    text:'text'
  },
  {
    id:nanoid(),
    title:'Appwrite BaaS',
    icon:<SiAppwrite className='h-16 w-16 text-emerald-500'/>,
    text:'text'
  }
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];