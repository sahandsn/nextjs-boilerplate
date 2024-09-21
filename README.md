# NEXT.js Boilerplate

## Overview

This repository serves as a boilerplate for creating scalable and modern web applications using Next.js. It is designed to evolve with additional features and improvements over multiple versions, making it a powerful starting point for new projects.

---

## Versions

### main

- Create Next.js app using **pnpm**
- Enable **PWA** (Progressive Web App) support
- Integrate code quality tools (e.g., **ESLint**, **Prettier**, **commitlint** with **husky**)
- Setup **environment variables** management
- link preview
- Configure **sitemap** and **robots.txt**

---

### v1 - Localization and Internationalization

- Implement **next-intl** for translations and translated routes
- Add **translation language check** to ensure proper localization

---

### v2 - UI Enhancements and Theming

- Introduce **Shadcn** UI component library
- Merge **Tailwind CSS** classes using **tailwind-merge** and utility function `cn` (potential conflict with v4)
- Add **next-theme** for theming support (light/dark mode)
- Support **RTL (Right-to-Left)** languages and a mechanism for reversing layout for RTL languages

---

### v3 - Form Handling and Data Management

- Integrate **zod** and **react-hook-form** for robust form validation and management
- Implement server-side actions using [**next-safe-action**](https://next-safe-action.dev/)
- Add **Optimistic UI** updates for better user experience
- Set up **data fetching** using **react-query**

---

### v4 - Centralized State Management

- Manage application state centrally using **zustand**

---

### v5 - Authentication and User Management

- Set up **next-auth** for authentication and user management, including OAuth and custom credentials

---

### v6 - CI/CD and Deployment

- Create a CI/CD pipeline using **GitHub Actions**
- Support deployment to **Vercel** and **Netlify**

---

### v7 - Full-stack Application Support

- Integrate **drizzle** for database management to build full-stack applications

---

## Future Roadmap

- End-to-end type safety for separate backend (openapi-typescript)
- check env variables at build time

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/sahandsn/nextjs-boilerplate.git
   ```
