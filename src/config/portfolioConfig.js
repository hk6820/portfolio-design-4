// Portfolio Configuration File
// Update this file with your personal information

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import authorImg from '../assets/design4photo1.png';
import profileImg from '../assets/project2.png';
import resume from '../assets/Resume.pdf';

// Import icons for services
import { FaCode, FaPaintBrush, FaRocket, FaMobile, FaDatabase, FaCloud } from 'react-icons/fa';

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "John Doe",
    title: "Portfolio",
    subtitle: "I am a web developer",
    email: "youremail@example.com",
    location: "New Delhi, India",
    resumeLink: resume,
    profileImage: profileImg,
  },

  // Navigation Links (automatically generates navbar)
  navigation: [
    { id: 'home', label: 'Home', enabled: true },
    { id: 'about', label: 'About', enabled: true },
    { id: 'whatido', label: 'What I Do', enabled: true },
    { id: 'experience', label: 'Experience', enabled: true },
    { id: 'education', label: 'Education', enabled: true },
    { id: 'blog', label: 'Blog', enabled: true },
    { id: 'contact', label: 'Contact', enabled: true },
  ],

  // About Section
  about: {
    title: "About Me",
    description: "Hello! I'm John Doe, a frontend developer with a passion for beautiful UIs and clean code.",
    subDescription: "I love turning complex problems into simple, elegant solutions. Currently diving deeper into React and design systems.",
    image: profileImg,
  },

  // Services/Skills Section
  services: [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and accessible web interfaces using React, HTML, and CSS.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces that are both intuitive and aesthetically pleasing.',
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: 'Improving load times and performance for a smooth user experience.',
    },
    // Add more services as needed
    // {
    //   icon: <FaMobile />,
    //   title: 'Mobile Development',
    //   description: 'Creating mobile-first responsive applications.',
    // },
  ],

  // Work Experience
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2022 – Present',
      description: 'Worked on React components and improved UX through collaboration with design teams.',
    },
    {
      role: 'Web Developer Intern',
      company: 'Creative Web Studio',
      duration: 'Jun 2021 – Dec 2021',
      description: 'Created landing pages and learned core development practices.',
    },
    // Add more experiences as needed
  ],

  // Education
  education: [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'ABC University',
      duration: '2018 – 2021',
      description: 'Studied web dev, software engineering, and data structures.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'XYZ Higher Secondary School',
      duration: '2016 – 2018',
      description: 'Science stream focused on Math and Computer Science.',
    },
    // Add more education as needed
  ],

  // Projects Portfolio
  projects: [
    {
      title: 'E-commerce Website',
      tags: ['React', 'TypeScript'],
      image: project1,
      previewLink: 'https://example.com/ecommerce',
      githubLink: 'https://github.com/your/ecommerce',
    },
    {
      title: 'Chat Application',
      tags: ['React', 'Firebase'],
      image: project2,
      previewLink: 'https://example.com/chat',
      githubLink: 'https://github.com/your/chat',
    },
    {
      title: 'Task Management App',
      tags: ['UI', 'Next.js'],
      image: project3,
      previewLink: 'https://example.com/task',
      githubLink: 'https://github.com/your/task',
    },
    // Add more projects as needed
  ],

  // Project Filter Options
  projectFilters: ['All', 'React', 'UI', 'Fullstack', 'TypeScript', 'Firebase', 'Next.js'],

  // Blog Section
  blog: {
    name: "Lilon Macwan",
    role: "Web Designer",
    location: "USA",
    description: "I write about design, UX, frontend tools, and creative projects I work on.",
    image: authorImg,
    buttonText: "Explore My Blog",
    buttonLink: "/blog",
  },

  // Contact Section
  contact: {
    title: "Contact Me",
    subtitle: "I'm open to freelance work, collaborations, and new opportunities.",
    email: "youremail@example.com",
    location: "New Delhi, India",
  },

  // Social Media Links (optional)
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    // Add more social links as needed
  },
};

export default portfolioConfig;
