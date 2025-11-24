# Contact Book App 📞

A modern contact management application available as a **web app**, **mobile app (PWA)**, and **desktop app (Electron)**. Manage your contacts with ease across all your devices!

## 🚀 Features

- ✨ Add, view, search, and delete contacts
- 📱 **Installable on mobile devices (Android/iOS)** - Works like a native app!
- 💻 **Installable desktop app (Windows, macOS, Linux)**
- 🔌 **Offline support** with service worker
- 🎨 Modern, responsive design
- 💾 Local storage for data persistence
- 🔍 Real-time search/filter by contact name
- 📥 Form validation and reset capability

---

## 📱 How to Install on Your Phone

### Step 1: Visit the App
Open your phone's browser and go to: **https://contact-book-app-inky.vercel.app/**

### Step 2: Install the App

#### **Android (Chrome/Edge)**
1. Tap the menu (⋮) in the top right
2. Select **"Install app"** or **"Add to Home Screen"**
3. Confirm installation
4. The app icon will appear on your home screen! 🎉

#### **iOS (Safari)**
1. Tap the **Share button** (square with arrow)
2. Scroll and tap **"Add to Home Screen"**
3. Tap **"Add"**
4. The app icon will appear on your home screen! 🎉

### Step 3: Use Like a Native App
- Tap the icon to open the app in full-screen mode
- Works offline after first load
- All contacts saved locally on your device

---

## 💻 Desktop Installation

### Option 1: Build Desktop App
```bash
# Install dependencies
npm install

# Build desktop app for your platform
npm run electron-build
```

Find installers in the `dist/` folder:
- **Windows**: `Contact Book Setup.exe`
- **macOS**: `Contact Book.dmg`
- **Linux**: `Contact Book.AppImage` or `.deb` file

### Option 2: Run in Development Mode
```bash
npm run electron-dev
```

---

## 🛠️ Development

### Web Development Mode

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
contact-book/
├── public/
│   ├── service-worker.js      # PWA service worker for offline support
│   ├── manifest.json          # PWA manifest for mobile installation
│   ├── index.html             # HTML template with PWA meta tags
│   └── logo512.png            # App icons
├── src/
│   ├── components/            # React components
│   ├── hooks/                 # Custom hooks (useContacts)
│   ├── styles/                # CSS styles
│   ├── utils/                 # Utility functions
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point with service worker registration
│   └── serviceWorkerRegistration.js  # Service worker registration logic
├── electron-main.js           # Electron main process
├── electron-preload.js        # Electron preload script
└── package.json               # Project configuration
```

---

## 🎯 Tech Stack

- **Frontend**: React 19 (Functional Components + Hooks)
- **Icons**: Lucide React
- **Mobile**: Progressive Web App (PWA) with Service Worker
- **Desktop**: Electron
- **Storage**: Local Storage
- **Build Tools**: Create React App, Electron Builder
- **Styling**: CSS (Flexbox/Grid, Responsive Design)

---

## ✨ PWA Features

- 📴 **Offline Support**: Works without internet connection
- 🚀 **Fast Loading**: Cached resources for instant loading
- 🔄 **Auto-Updates**: Service worker updates in the background
- 📲 **Native Feel**: Runs like a native app on mobile
- 🏠 **Home Screen Install**: Add to home screen on mobile devices

---

## 💪 Desktop App Features

- 🖥️ **Native Window**: Runs as a standalone desktop application
- ⌨️ **Keyboard Shortcuts**: Full menu bar with shortcuts
- 🎯 **Cross-Platform**: Works on Windows, macOS, and Linux
- 💻 **Standalone**: No browser required

---

## 📜 Available Scripts

### Web App Scripts
- `npm start` - Runs the web app in development mode
- `npm run build` - Builds the web app for production
- `npm test` - Launches the test runner

### Electron Scripts
- `npm run electron-dev` - Runs in Electron development mode
- `npm run electron-build` - Builds desktop app for current platform
- `npm run electron-build-win` - Builds for Windows (.exe installer)
- `npm run electron-build-mac` - Builds for macOS (.dmg)
- `npm run electron-build-linux` - Builds for Linux (AppImage and .deb)

---

## 🚀 Building for Production

### Web/PWA Build
```bash
npm run build
```
Creates optimized build in `build/` folder. Deploy to Vercel, Netlify, GitHub Pages, etc.

### Desktop Build
```bash
npm run electron-build
```
Creates installers in `dist/` folder for your platform.

---

## 📸 Screenshots

![Screenshot 1](https://github.com/nerdyKou/Contact-Book-App/blob/f3bde08280443da7bb4fdd9e4da28ea01b9f10d5/Screenshot%20(920).png)
![Screenshot 2](https://github.com/nerdyKou/Contact-Book-App/blob/f3bde08280443da7bb4fdd9e4da28ea01b9f10d5/Screenshot%20(921).png)
![Screenshot 3](https://github.com/nerdyKou/Contact-Book-App/blob/f3bde08280443da7bb4fdd9e4da28ea01b9f10d5/Screenshot%20(922).png)
![Screenshot 4](https://github.com/nerdyKou/Contact-Book-App/blob/f3bde08280443da7bb4fdd9e4da28ea01b9f10d5/Screenshot%20(923).png)

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with PWA support

---

## 📚 Learn More

- [Create React App Documentation](https://create-react-app.dev/)
- [React Documentation](https://react.dev/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Electron Documentation](https://www.electronjs.org/docs)

---

## 📞 Contact

Developed by **Koustabh Dawn**

---

## 📄 License

This project is open source and available for personal and commercial use.
