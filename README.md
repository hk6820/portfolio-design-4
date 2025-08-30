## Portfolio Design 4 - Dynamic React Portfolio

A modern, responsive portfolio website built with React, featuring smooth scrolling navigation, dynamic content management, and beautiful animations. Perfect for developers, designers, and creative professionals.

## ✨ Features

- **Fully Dynamic Content** - All data configurable through a single config file
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling Navigation** - Seamless navigation between sections
- **Modern UI/UX** - Beautiful gradient backgrounds and animations
- **Project Portfolio** - Showcase your work with filtering capabilities
- **Contact Form** - Built-in contact section for client inquiries
- **Easy Customization** - Change colors, content, and layout easily

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-design-4
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your portfolio**
   - Edit `src/config/portfolioConfig.js` with your personal information
   - Replace images in `src/assets/` with your own
   - Update your resume PDF in `src/assets/Resume.pdf`

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📝 Customization Guide

### Personal Information
Edit `src/config/portfolioConfig.js` to update:
- Personal details (name, email, location)
- About section content
- Work experience and education
- Projects and skills
- Social media links

### Navigation
Control which sections appear by setting `enabled: true/false` in the navigation array:
```javascript
navigation: [
  { id: 'home', label: 'Home', enabled: true },
  { id: 'about', label: 'About', enabled: true },
  // ... more sections
]
```

### Adding Projects
Add new projects to the `projects` array:
```javascript
{
  title: 'Your Project Name',
  tags: ['React', 'Node.js'],
  image: yourProjectImage,
  previewLink: 'https://your-project.com',
  githubLink: 'https://github.com/your/project',
}
```

### Styling
- Main styles: `src/styles.css`
- Component styles: `src/pages/style/` and `src/components/`
- Colors and gradients can be customized in the CSS files

## 📁 Project Structure

```
portfolio-design-4/
├── public/
├── src/
│   ├── assets/          # Images, resume, and media files
│   ├── components/      # Reusable components (Navbar, etc.)
│   ├── config/          # Portfolio configuration
│   ├── pages/           # Page components and styles
│   ├── routes/          # Routing configuration
│   └── App.js           # Main application component
├── package.json
└── README.md
```

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Deploy with buildpack

See `setupguide.md` for detailed deployment instructions.

## 📚 Documentation

- [File Structure](filestructure.md) - Detailed project structure
- [Setup Guide](setupguide.md) - Installation and deployment
- [Portfolio Structure](portfoliostructure.md) - Component architecture

## 🎨 Design Features

- **Modern Gradient Backgrounds** - Beautiful brown/orange gradient theme
- **Smooth Animations** - CSS animations and transitions
- **Typography** - Clean, readable fonts
- **Responsive Grid** - Flexible layouts for all devices
- **Interactive Elements** - Hover effects and smooth scrolling

## 🔧 Technologies Used

- React 18
- React Router DOM
- React Icons
- Framer Motion (animations)
- EmailJS (contact form)
- Tailwind CSS (utility classes)
- CSS3 (custom styling)

## 📞 Support

If you need help customizing your portfolio:
1. Check the documentation files
2. Review the configuration examples
3. Open an issue on GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for developers and creatives**

## 📬 Enable Contact Form (EmailJS)

To receive form submissions in your email:

1. Go to [https://emailjs.com](https://emailjs.com) and create a free account.
2. Create a service (e.g., Gmail or Outlook)
3. Create an email template
4. Get your:
   - Service ID
   - Template ID
   - Public Key

5. Replace the placeholders in `src/utils/emailConfig.js`:

```js
export const EMAIL_SERVICE_ID = 'your_service_id';
export const EMAIL_TEMPLATE_ID = 'your_template_id';
export const EMAIL_PUBLIC_KEY = 'your_public_key';
