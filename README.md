# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 📝 PasteApp

PasteApp is a minimal, modern React web app that lets you create, update, and view plain text pastes. Built with Vite, Redux Toolkit, Tailwind CSS, and toast notifications for smooth UX.

## 🚀 Features

- ✅ Create and update text pastes with title and content  
- ✅ View individual pastes in a read-only mode  
- ✅ Responsive UI with dark theme styling  
- ✅ Instant feedback using toast notifications (`react-toastify`)  
- ✅ State management using Redux Toolkit  
- ✅ Routing with `react-router-dom`  
- ✅ Built with Vite for fast development


## 🧱 Tech Stack

- React 19  
- Redux Toolkit  
- Tailwind CSS  
- Vite  
- React Router DOM  
- React Toastify  
- React Icons  
- ESLint + Plugins

## 🔧 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/praneethankam/PasteApp.git
cd pasteapp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit: http://localhost:5173

## 📁 Folder Structure

```
/src
  ├── components     # Reusable UI components
  ├── redux          # PasteSlice
  ├── store          # Redux Toolkit slices & store setup
  ├── App.jsx        # App routing setup
  └── main.jsx       # ReactDOM render
```

## 📦 Build for Production

```bash
npm run build
```

Then preview it locally:

```bash
npm run preview
```

## 🧪 Linting

```bash
npm run lint
```

## 🙌 Acknowledgments

Thanks to the maintainers of:

- Vite  
- React  
- Redux Toolkit  
- Tailwind CSS  
- React Toastify


