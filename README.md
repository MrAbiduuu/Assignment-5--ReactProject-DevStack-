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
* 🔷 **TypeScript** — Application logic and type safety
* 🔔 **React-Toastify** — Displaying interactive notifications
* 🎯 **React Icons** — Providing reusable icons throughout the interface
* 📄 **JSON** — Storing and managing technology data
* ⚡ **Vite** — Fast development server and build tool
* 🌐 **Netlify** — Deploying and hosting the web application


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
---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** stands for **JavaScript XML**. It is a syntax extension for **JavaScript** introduced by **React** that allows developers to write **HTML**-like markup directly inside **JavaScript** files. 

**JSX** is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand because we can describe the UI directly inside our code.

---

## 2. What is the difference between props and state?

**Props are like function arguments:** Think of a component like a standard JavaScript function. Props are the parameters you pass into that function when calling it. The function has no control over what arguments it receives.

**State is like variables declared inside a function:** State is the data initialized and updated inside the function's scope. The outside world doesn't know it exists unless the function decides to share it.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data inside a React component.

In this project, I used `useState` in the `AvailableTech` component to store:

* The technologies that have been added to the stack.
* The names of technologies that are already selected.

For example:

```tsx
const [stack, setStack] = useState<dataTypes[]>([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform an action after a component renders.

I used it to load the technology data from the JSON file when the application starts. This allows the technology data to be loaded and displayed in the application.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

**How does it work** **:**

When a component's state or props change, React needs to figure out exactly which elements in the user interface actually changed, were added, or were removed. Without unique keys, React cannot accurately track individual elements across renders.

For example:

```tsx
{Technology.map((Tech) => (
  <div key={Tech.name}>
    {Tech.name}
  </div>
))}
```

Here, `Tech.name` is used as the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** in React is **the process of displaying different UI elements or components based on specific conditions or criteria**. It works the exact same way conditions operate in standard JavaScript—using tools like `if` statements, ternary operators, or logical `&&` operators—to dynamically change what appears on the screen when state or props change.

---

```tsx
Used in my project (for example):
{stack.length === 0 ? (
  <p>Your stack is Empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

If the stack is empty, it shows **"Your stack is Empty"**. Otherwise, it shows the selected technologies.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

For example:

```tsx
<AvailableTech Technology={Technology} />
```

Here, the parent sends `Technology` to the `AvailableTech` component through props.

A child can send information back to the parent by calling a **function passed from the parent as a prop**.

Example:

```tsx
<Child onAdd={handleAdd} />
```

The child can then call:

```tsx
onAdd(data);
```

This allows the child to send data or an event back to the parent.

---

## 🎓 Final Note

These concepts helped me understand the basic structure of React applications and how components, data, state, and user interactions work together.

This project gave me practical experience with these React fundamentals while building my first React application.

