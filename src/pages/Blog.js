import './style/Blog.css';
import blogImage from '../assets/design4photo1.png';

const BlogIntro = ({
  name,
  role,
  location,
  description,
  image,
  buttonText,
  buttonLink,
  id
}) => {
  return (
    <section className="blog-intro-section" id = {id || 'blog'}>
      <div className="blog-intro-wrapper">
        <div className="blog-content">
          <h1>
            MY NAME IS <span className="highlight">{name || 'Your Name'}</span>
          </h1>
          <h2>
            <strong>{role || 'Web Developer'}</strong> based in <span>{location || 'India'}</span>
          </h2>
          <p>{description || 'Welcome to my blog! I share frontend tips and design experiments.'}</p>
          {buttonLink && (
            <a href={buttonLink} className="blog-btn" target="_blank" rel="noopener noreferrer">
              {buttonText || 'Read My Blog'} ↗
            </a>
          )}
        </div>

        <div className="blog-image">
          <img src={image || blogImage} alt={name || 'Blog Intro'} />
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
