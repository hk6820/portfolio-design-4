import { useState, useEffect } from 'react';
import '../styles.css';

const Home = ({ name, subtitle, resumeLink, projects=[], filters = [],id }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const words = subtitle?.split(' ') || [];
    const staticPrefix = words.slice(0, 2).join(' ');
    const animatedPart = words.slice(2).join(' ');
    const [isDeleting, setIsDeleting] = useState(false);

    const [typedText, setTypedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const delay = isDeleting ? 50 : 120;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < animatedPart.length) {
                setTypedText(animatedPart.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else if (!isDeleting && charIndex === animatedPart.length) {
                // pause before deleting
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex > 0) {
                setTypedText(animatedPart.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false); // restart typing
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, animatedPart]);



    const filteredProjects =
        activeFilter === 'All'
            ? projects
            : projects.filter((project) => project.tags?.includes(activeFilter));

    return (
        <section className="container" id={id || 'home'}>
            {/* Hero Section */}
            <div className="hero">
                <h1>Hello, I’m {name || 'Your Name'}.</h1>
                <p className="typing-text">
                    {staticPrefix}&nbsp;{typedText}
                </p>

                {resumeLink && (
                    <a href={resumeLink} download className="download-btn">
                        Download CV
                    </a>
                )}
            </div>

            {/* Filter Buttons */}
          {projects.length > 0 && filters.length > 0 && (
  <div className="filters">
    {filters.map((filter) => (
      <button
        key={filter}
        className={filter === activeFilter ? 'active-filter' : ''}
        onClick={() => setActiveFilter(filter)}
      >
        {filter}
      </button>
    ))}
  </div>
)}

{/* Project Grid */}
{filteredProjects.length > 0 ? (
  <div
    className={`project-grid ${
      filteredProjects.length === 1 ? 'center-grid' : ''
    }`}
  >
    {filteredProjects.map((project, index) => (
      <div className="project-card" key={index}>
        {project.image && (
          <img src={project.image} alt={project.title || 'Project'} />
        )}
        <h3>{project.title || 'Untitled Project'}</h3>

        <div className="project-tags">
          {project.tags?.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>

        <div className="project-buttons">
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
) : (
Array.isArray(projects) && projects.length > 0 ? (
    <p style={{ marginTop: '2rem', textAlign: 'center' }}>
      No projects to display.
    </p>
  ) : null


)}

        </section>
    );
};

export default Home;
