// Import required components and assets
import Navbar from './components/Navbar';
import About from './pages/About';
import WhatIDo from './pages/WhatIDo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';

import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import authorImg from './assets/design4photo1.png';
import profileImg from './assets/project2.png';
import resume from './assets/Resume.pdf';

// Import icons for "What I Do" section
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';

// Import global animation styles
import './components/Animation.css';

function App() {

  // 👇 Services offered - shown in "What I Do" section
  const services = [
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
  ];

  // 👇 Navigation links - used in Navbar
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'whatido', label: 'What I Do' },
    { id: 'blog', label: 'Blog' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  // 👇 Work experience data - shown in Experience section
  const experienceData = [
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
  ];

  // 👇 Education history - shown in Education section
  const educationList = [
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
  ];

  // 👇 Project portfolio items - shown in Home section
  const projectList = [
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
    }
  ];

  // 👇 Filter options for projects (used in Home section)
  const filters = ['All', 'React', 'UI', 'Fullstack'];

  return (
    // 👇 Background color and layout styling
    <div className="min-h-screen bg-gradient-to-br from-[#4b372e] via-[#2d211b] to-[#1e150f] text-white">

      {/* 👇 Navbar component with site title and links */}
      <Navbar brandName="John Doe" navLinks={navLinks} />

      {/* 👇 Main page content starts here */}
      <main className="py-10">

        {/* 👇 Hero section with animated subtitle and project filtering */}
        <Home
          id="home"
          name="John Doe"
          title="Portfolio"
          subtitle="I am a web developer"
          resumeLink={resume}
          projects={projectList}
          filters={filters}
        />

        {/* 👇 About section with profile image and description */}
        <About
          id="about"
          title="About Me"
          description="Hello! I'm John Doe, a frontend developer with a passion for beautiful UIs and clean code."
          subDescription="I love turning complex problems into simple, elegant solutions. Currently diving deeper into React and design systems."
          image={profileImg}
        />

        {/* 👇 Services section: What I Do */}
        <WhatIDo
          id="whatido"
          title="What I Do"
          services={services}
        />

        {/* 👇 Work experience section */}
        <Experience
          id="experience"
          title="Experience"
          experiences={experienceData}
        />

        {/* 👇 Blog preview section with author info */}
        <Blog
          id="blog"
          name="Lilon Macwan"
          role="Web Designer"
          location="USA"
          description="I write about design, UX, frontend tools, and creative projects I work on."
          image={authorImg}
          buttonText="Explore My Blog"
          buttonLink="/blog"
        />

        {/* 👇 Education history section */}
        <Education
          id="education"
          title="Education"
          educationList={educationList}
        />

        {/* 👇 Contact section with form and contact details */}
        <Contact
          id="contact"
          title="Contact Me"
          subtitle="I'm open to freelance work, collaborations, and new opportunities."
          email="youremail@example.com"
          location="New Delhi, India"
        />
      </main>
    </div>
  );
}

export default App;
