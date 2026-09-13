# 🚀 Assignment-5 — React Project (DevStack)

## 📌 Project Description

**DevStack** is my first React project, created as part of **Assignment-5**. The project allows users to explore different development technologies and build their own ideal technology stack.

This project is designed to give a simple and interactive experience while demonstrating the core concepts I learned in React, TypeScript, Tailwind CSS, and modern frontend development.

As my **first React project**, DevStack is also a small reflection of my learning journey and my own approach to creating a clean, responsive, and user-friendly web interface.

---

## 🛠️ Technologies Used

* ⚛️ **React.js** — Building the user interface and components
* 🎨 **Tailwind CSS** — Styling and responsive design
* 🌼 **DaisyUI** — UI components and design utilities
* 🔷 **TypeScript / JavaScript (ES6+)** — Application logic and type safety
* 🔔 **React-Toastify** — Displaying interactive notifications
* 📄 **JSON** — Storing and managing technology data
* ⚡ **Vite** — Fast development server and build tool

---

## ✨ Features

### 1. 🧩 Build Your Own Technology Stack

Users can explore available technologies and add their preferred technologies to **Your Stack** section to create their own development stack.

### 2. 🗑️ Manage Your Stack

Technologies can be removed individually or all technologies can be removed at once using the **Remove All** option. The selected technology count is also displayed dynamically.

### 3. 📱 Responsive & Interactive Design

The website is designed to work smoothly across different screen sizes, including mobile, tablet, and desktop. Interactive buttons and toast notifications provide feedback whenever technologies are added or removed.

---

## 🎯 Project Goal

The main goal of this project is to practice and demonstrate the fundamentals of **React development**, including components, state management, TypeScript, responsive layouts, reusable UI elements, and user interactions.

> 💡 **DevStack is my first React project and represents my first impression of building a complete interactive frontend application with React.**

---

## 📂 Project Name

```text
Assignment-5-(ReactProject-DevStack)
```

---

## ⚡ Getting Started

Clone the repository and install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite in your browser.

---

## 👨‍💻 Author

**Dewan Abid Hasan**

> Built with ❤️ as my first React project.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
