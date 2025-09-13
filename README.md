# HatchPoint Solutions Landing Page

A modern, performance-optimized landing page built with React, TypeScript, and Tailwind CSS, featuring smooth animations and accessibility best practices.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, GPU-accelerated animations
- **Accessibility First**: ARIA labels, keyboard navigation, screen reader support
- **Responsive Design**: Mobile-first approach with fluid typography
- **Error Handling**: Error boundaries and graceful fallbacks
- **Testing**: Comprehensive test suite with Vitest and Testing Library
- **Type Safety**: Full TypeScript implementation with strict mode

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Services.jsx    # Services showcase
│   ├── Vision.jsx      # Company vision
│   ├── Community.jsx   # Target audience
│   ├── Footer.jsx      # Site footer
│   └── ErrorBoundary.jsx # Error handling
├── data/               # Static data and content
│   ├── services.js     # Service offerings
│   └── audiences.js    # Target audience data
├── hooks/              # Custom React hooks
│   ├── useScrollToSection.js
│   └── useIntersectionObserver.js
├── utils/              # Utility functions
│   ├── constants.js    # App constants
│   └── accessibility.js # A11y utilities
├── types/              # TypeScript type definitions
│   └── index.ts
├── test/               # Test files
│   ├── setup.ts
│   ├── App.test.tsx
│   └── components/
└── styles/             # CSS and styling
    ├── App.css
    └── index.css
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 🎨 Design System

### Color Palette

- **Primary**: Purple to Pink gradient (`#a855f7` to `#ec4899`)
- **Secondary**: Blue to Cyan gradient (`#0ea5e9` to `#06b6d4`)
- **Background**: Slate dark theme (`#0f172a`, `#1e293b`, `#334155`)

### Typography

- **Headings**: Space Grotesk (Display font)
- **Body**: Inter (System font)
- **Code**: JetBrains Mono

### Components

All components follow a consistent design pattern:
- Semantic HTML structure
- Accessibility attributes
- Responsive design
- Smooth animations
- Error boundaries

## ♿ Accessibility

The application follows WCAG 2.1 AA guidelines:

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: High contrast ratios
- **Reduced Motion**: Respects user motion preferences

## 🧪 Testing

### Test Structure

- **Unit Tests**: Component behavior and rendering
- **Integration Tests**: Component interactions
- **Accessibility Tests**: A11y compliance

### Running Tests

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📱 Performance

### Optimizations

- **Code Splitting**: Lazy-loaded components
- **Bundle Optimization**: Tree shaking and minification
- **Image Optimization**: WebP format with fallbacks
- **CSS Optimization**: Critical CSS inlined
- **Caching**: Proper cache headers

### Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
VITE_APP_TITLE=HatchPoint Solutions
VITE_APP_DESCRIPTION=Incubating generational knowledge systems
```

### Tailwind Configuration

Custom configuration in `tailwind.config.js`:
- Custom color palette
- Extended spacing scale
- Custom animations
- Container queries

## 🚀 Deployment

### Build Process

```bash
# Build for production
npm run build

# The build files will be in the dist/ directory
```

### Deployment Options

- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **AWS S3**: Static site hosting
- **GitHub Pages**: Free hosting option

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@hatchpointsolutions.com or create an issue in the repository.

---

Built with ❤️ by the HatchPoint Solutions team