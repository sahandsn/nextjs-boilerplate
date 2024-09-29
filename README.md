# NEXT.js Boilerplate

## Overview

This repository serves as a boilerplate for creating scalable and modern web applications using Next.js. It is designed to evolve with additional features and improvements over multiple versions, making it a powerful starting point for new projects.

---

## Documents

- for bidirectional support, make sure instead of left and right, start and end is used. (bidirectional support)
- for messages that have both ltr and rtl texts, right the text with prevalent one with placeholder for the other mode, and then copy paste into it. (bidirectional support)
- any route that is needed:
  - add the required file to app folder (routing)
  - add the same path to routes.ts (used for sitemap and localized path)
  - add localized path in /i18n/routing.ts (localized path)
  - use linkPreviewMetadata in /metadata.ts and add title and description separately (metadata)

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
- localized pathname

---

### v2 - UI Enhancements and Theming

- Introduce **Shadcn** UI component library
- Merge **Tailwind CSS** classes using **tailwind-merge** and utility function `cn`
- Add **next-theme** for Theming support (light/dark mode)
- Support **RTL (Right-to-Left)** languages and a mechanism for reversing layout for RTL languages
- Link preview with twitter card and open graph

---

### v3 - Form Handling and Data Management

- Integrate **zod** and **react-hook-form** for robust form validation and management
- Implement server-side actions using [**next-safe-action**](https://next-safe-action.dev/)
- Add **Optimistic UI** updates for better user experience

---

### v4 - State Management

- Manage application state centrally using **zustand**
- Set up **data fetching** using **react-query**

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
- animations
- push notification and offline mode with serwist
- https://github.com/khmyznikov/pwa-install
- Add **translation language check (cspell)** to ensure proper localization
- More security for PWA [nextjs.org](https://nextjs.org/docs/app/building-your-application/configuring/progressive-web-apps#8-securing-your-application)
- JSON-LD for better seo

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/sahandsn/nextjs-boilerplate.git
   ```
