// Import required components and configuration
import Navbar from './components/Navbar';
import About from './pages/About';
import WhatIDo from './pages/WhatIDo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';

// Import dynamic configuration
import { portfolioConfig } from './config/portfolioConfig';

// Import global animation styles
import './components/Animation.css';

function App() {
  // Extract data from configuration
  const { personal, navigation, about, services, experience, education, projects, projectFilters, blog, contact } = portfolioConfig;
  
  // Filter enabled navigation links
  const enabledNavLinks = navigation.filter(link => link.enabled);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b372e] via-[#2d211b] to-[#1e150f] text-white">

      {/* 👇 Navbar component with dynamic brand name and links */}
      <Navbar brandName={personal.name} navLinks={enabledNavLinks} />

      {/* 👇 Main page content starts here */}
      <main className="py-10">

        {/* 👇 Hero section with dynamic data */}
        {enabledNavLinks.find(link => link.id === 'home') && (
          <Home
            id="home"
            name={personal.name}
            title={personal.title}
            subtitle={personal.subtitle}
            resumeLink={personal.resumeLink}
            projects={projects}
            filters={projectFilters}
          />
        )}

        {/* 👇 About section with dynamic data */}
        {enabledNavLinks.find(link => link.id === 'about') && (
          <About
            id="about"
            title={about.title}
            description={about.description}
            subDescription={about.subDescription}
            image={about.image}
          />
        )}

        {/* 👇 Services section: What I Do */}
        {enabledNavLinks.find(link => link.id === 'whatido') && (
          <WhatIDo
            id="whatido"
            title="What I Do"
            services={services}
          />
        )}

        {/* 👇 Work experience section */}
        {enabledNavLinks.find(link => link.id === 'experience') && (
          <Experience
            id="experience"
            title="Experience"
            experiences={experience}
          />
        )}

        {/* 👇 Education history section */}
        {enabledNavLinks.find(link => link.id === 'education') && (
          <Education
            id="education"
            title="Education"
            educationList={education}
          />
        )}

        {/* 👇 Blog preview section with dynamic data */}
        {enabledNavLinks.find(link => link.id === 'blog') && (
          <Blog
            id="blog"
            name={blog.name}
            role={blog.role}
            location={blog.location}
            description={blog.description}
            image={blog.image}
            buttonText={blog.buttonText}
            buttonLink={blog.buttonLink}
          />
        )}

        {/* 👇 Contact section with dynamic data */}
        {enabledNavLinks.find(link => link.id === 'contact') && (
          <Contact
            id="contact"
            title={contact.title}
            subtitle={contact.subtitle}
            email={contact.email}
            location={contact.location}
          />
        )}
      </main>
    </div>
  );
}

export default App;
