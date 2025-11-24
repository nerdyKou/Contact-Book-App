# Contact Book App 📞

A modern contact management application available as a **web app**, **mobile app (PWA)**, and **desktop app (Electron)**. Manage your contacts with ease across all your devices!

## Features

- ✨ Add, view, search, and delete contacts
- 📱 Installable on mobile devices (Android/iOS)
- 💻 Installable desktop app (Windows, macOS, Linux)
- 🔌 Offline support with service worker
- 🎨 Modern, responsive design
- 💾 Local storage for data persistence

## Installation Options

### 📱 Mobile Installation (PWA)

1. **Deploy the app** to a web server or run locally
2. **Open in browser** (Chrome on Android, Safari on iOS)
3. **Install the app**:
   - **Android (Chrome)**: Tap the menu (⋮) → "Add to Home Screen" or "Install app"
   - **iOS (Safari)**: Tap Share button → "Add to Home Screen"
4. The app icon will appear on your home screen!

### 💻 Desktop Installation

#### Option 1: Download Pre-built Installer
After building the app (see below), you'll find installers in the `dist` folder:
- **Windows**: `Contact Book Setup.exe`
- **macOS**: `Contact Book.dmg`
- **Linux**: `Contact Book.AppImage` or `.deb` file

#### Option 2: Build from Source
```bash
# Install dependencies
npm install

# Build desktop app for your platform
npm run electron-build

# Or build for specific platform:
npm run electron-build-win    # Windows
npm run electron-build-mac    # macOS
npm run electron-build-linux  # Linux
```

## Development

### Web Development Mode

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Electron Development Mode

```bash
# Install dependencies
npm install

# Run in Electron development mode
npm run electron-dev
```

This starts the React dev server and opens the app in an Electron window.

## Available Scripts

### Web App Scripts

- **`npm start`** - Runs the web app in development mode
- **`npm run build`** - Builds the web app for production
- **`npm test`** - Launches the test runner

### Electron Scripts

- **`npm run electron-dev`** - Runs the app in Electron development mode
- **`npm run electron-build`** - Builds desktop app for current platform
- **`npm run electron-build-win`** - Builds for Windows (creates .exe installer)
- **`npm run electron-build-mac`** - Builds for macOS (creates .dmg)
- **`npm run electron-build-linux`** - Builds for Linux (creates AppImage and .deb)

## Project Structure

```
contact-book/
├── public/
│   ├── service-worker.js      # PWA service worker for offline support
│   ├── manifest.json          # PWA manifest for mobile installation
│   ├── index.html             # HTML template with PWA meta tags
│   └── logo512.png            # App icons
├── src/
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # CSS styles
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point with service worker registration
│   └── serviceWorkerRegistration.js  # Service worker registration logic
├── electron-main.js           # Electron main process
├── electron-preload.js        # Electron preload script
└── package.json               # Project configuration

```

## Technology Stack

- **Frontend**: React 19
- **Icons**: Lucide React
- **Mobile**: Progressive Web App (PWA) with Service Worker
- **Desktop**: Electron
- **Storage**: Local Storage
- **Build Tools**: Create React App, Electron Builder

## PWA Features

- 📴 **Offline Support**: Works without internet connection
- 🚀 **Fast Loading**: Cached resources for instant loading
- 🔄 **Auto-Updates**: Service worker updates in the background
- 📲 **Native Feel**: Runs like a native app on mobile

## Desktop App Features

- 🖥️ **Native Window**: Runs as a standalone desktop application
- ⌨️ **Keyboard Shortcuts**: Full menu bar with shortcuts
- 🎯 **Cross-Platform**: Works on Windows, macOS, and Linux
- 💪 **Standalone**: No browser required

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with PWA support

## Building for Production

### Web/PWA Build

```bash
npm run build
```

Creates optimized build in `build/` folder. Deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Desktop Build

```bash
npm run electron-build
```

Creates installers in `dist/` folder:
- Windows: `.exe` installer (NSIS)
- macOS: `.dmg` disk image
- Linux: `.AppImage` and `.deb` packages

## Learn More

- [Create React App Documentation](https://create-react-app.dev/)
- [React Documentation](https://react.dev/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Electron Documentation](https://www.electronjs.org/docs)

## License

This project is open source and available for personal and commercial use.
