# Setup Guide - Portfolio Design 4

Complete installation and deployment guide for your dynamic React portfolio.

## 🚀 Initial Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
- **Git** (for version control)
  - Download from [git-scm.com](https://git-scm.com/)

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If using Git
   git clone <your-repository-url>
   cd portfolio-design-4
   
   # Or download ZIP and extract
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The page will automatically reload when you make changes

## ⚙️ Configuration

### Personal Information Setup

1. **Edit Portfolio Configuration**
   ```bash
   # Open the main config file
   src/config/portfolioConfig.js
   ```

2. **Update Personal Details**
   ```javascript
   personal: {
     name: "Your Full Name",
     title: "Your Portfolio Title",
     subtitle: "Your Professional Title",
     email: "your.email@example.com",
     location: "Your City, Country",
     // ... other fields
   }
   ```

3. **Add Your Projects**
   ```javascript
   projects: [
     {
       title: 'Your Project Name',
       tags: ['React', 'Node.js', 'MongoDB'],
       image: yourProjectImage,
       previewLink: 'https://your-project-demo.com',
       githubLink: 'https://github.com/yourusername/project',
     },
     // Add more projects...
   ]
   ```

### Asset Replacement

1. **Replace Images**
   ```bash
   src/assets/
   ├── Resume.pdf          # Your resume/CV
   ├── design4photo1.png   # Your profile photo
   ├── project1.png        # Project screenshots
   ├── project2.png
   └── project3.png
   ```

2. **Image Requirements**
   - **Profile Photo**: 400x400px (square, PNG/JPG)
   - **Project Images**: 800x600px (landscape, PNG/JPG)
   - **Resume**: PDF format, under 5MB

3. **Update Image Imports**
   ```javascript
   // In portfolioConfig.js, update import paths if needed
   import yourPhoto from '../assets/your-photo.png';
   import project1 from '../assets/your-project-1.png';
   ```

### Navigation Customization

Enable/disable sections by editing the navigation array:

```javascript
navigation: [
  { id: 'home', label: 'Home', enabled: true },
  { id: 'about', label: 'About', enabled: true },
  { id: 'whatido', label: 'Services', enabled: true },
  { id: 'experience', label: 'Experience', enabled: true },
  { id: 'education', label: 'Education', enabled: false }, // Disabled
  { id: 'blog', label: 'Blog', enabled: true },
  { id: 'contact', label: 'Contact', enabled: true },
]
```

## 🎨 Styling Customization

### Color Scheme

1. **Main Gradient Background**
   ```css
   /* In src/App.js or styles.css */
   background: linear-gradient(to bottom right, #4b372e, #2d211b, #1e150f);
   
   /* Customize colors */
   background: linear-gradient(to bottom right, #your-color-1, #your-color-2, #your-color-3);
   ```

2. **Component Colors**
   ```css
   /* Update in respective CSS files */
   .project-card {
     background: #2c1f1b; /* Card background */
   }
   
   .filters button {
     background: #4b3a34; /* Button background */
   }
   ```

### Typography

```css
/* In src/index.css */
body {
  font-family: 'Your Preferred Font', 'Segoe UI', sans-serif;
}
```

## 📧 Contact Form Setup (EmailJS)

### EmailJS Configuration

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://emailjs.com)
   - Sign up for a free account

2. **Create Email Service**
   - Add a service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Create a template for contact form
   - Note your Template ID

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy your Public Key

5. **Update Contact Component**
   ```javascript
   // In src/pages/Contact.js
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```

## 🚀 Production Build

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates a `build/` folder with optimized files ready for deployment.

### Build Optimization

The build process:
- Minifies JavaScript and CSS
- Optimizes images
- Generates source maps
- Creates service worker for caching

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your GitHub repository for auto-deployment

3. **Custom Domain (Optional)**
   - Add your custom domain in Netlify settings
   - Update DNS records as instructed

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Or use GitHub Integration**
   - Connect repository to Vercel
   - Auto-deploy on push

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add Deploy Script**
   ```json
   // In package.json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Hosting

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Build Folder**
   - Upload contents of `build/` folder to your web server
   - Ensure `index.html` is in the root directory

## 🔧 Environment Variables

For sensitive data (API keys, etc.), use environment variables:

1. **Create .env File**
   ```bash
   # In project root
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. **Use in Code**
   ```javascript
   const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
   ```

3. **Add to .gitignore**
   ```
   .env
   .env.local
   .env.production
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Node Version Conflicts**
   ```bash
   # Check Node version
   node --version
   
   # Use Node Version Manager if needed
   nvm use 16
   ```

2. **Dependency Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Errors**
   ```bash
   # Check for unused imports
   # Remove unused variables
   # Verify all image paths are correct
   ```

4. **Deployment Issues**
   - Ensure all environment variables are set
   - Check build folder contents
   - Verify routing configuration

### Performance Optimization

1. **Image Optimization**
   - Compress images before adding to assets
   - Use WebP format when possible
   - Implement lazy loading for large images

2. **Code Splitting**
   ```javascript
   // Use React.lazy for large components
   const LazyComponent = React.lazy(() => import('./Component'));
   ```

3. **Bundle Analysis**
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

## 📱 Mobile Optimization

### Testing Responsive Design

1. **Browser DevTools**
   - Use Chrome/Firefox DevTools
   - Test various device sizes
   - Check touch interactions

2. **Real Device Testing**
   - Test on actual mobile devices
   - Check loading performance
   - Verify touch targets are adequate

### PWA Features (Optional)

1. **Service Worker**
   - Already included with Create React App
   - Enables offline functionality

2. **App Manifest**
   - Update `public/manifest.json`
   - Add app icons and metadata

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit API keys to version control
   - Use environment variables for sensitive data

2. **Content Security Policy**
   ```html
   <!-- Add to public/index.html -->
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
   ```

3. **HTTPS**
   - Always deploy with HTTPS
   - Most hosting providers offer free SSL certificates

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Create GA Account**
   - Set up Google Analytics property

2. **Add Tracking Code**
   ```html
   <!-- In public/index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

### Performance Monitoring

1. **Web Vitals**
   ```javascript
   // Already included in src/reportWebVitals.js
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
   ```

## 🎯 SEO Optimization

1. **Meta Tags**
   ```html
   <!-- Update in public/index.html -->
   <meta name="description" content="Your portfolio description">
   <meta name="keywords" content="developer, portfolio, react">
   <meta property="og:title" content="Your Name - Portfolio">
   ```

2. **Structured Data**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Your Name",
     "jobTitle": "Web Developer"
   }
   ```

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review error messages in browser console
3. Verify all configuration files are correct
4. Check that all dependencies are installed

For additional help, refer to:
- [React Documentation](https://reactjs.org/docs)
- [Create React App Documentation](https://create-react-app.dev/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

**Your portfolio is now ready for deployment! 🚀**
