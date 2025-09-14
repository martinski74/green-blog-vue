# Green Blog Vue

A modern blog application built with Vue.js, featuring user authentication, real-time data management with Firebase, and a JSON server for development.

## Features

- 🔐 User Authentication (Login/Register)
- 📝 Create, Read, Update, Delete blog posts
- 💬 Comments functionality
- 👍 Like/Unlike posts
- 🔥 Firebase integration
- 🚀 Fast development setup with JSON server

## Technologies Used

- Vue.js 3
- Vuex for state management
- Vue Router for navigation
- Firebase for authentication and data storage
- JSON Server for development API
- SweetAlert for notifications

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run start
```

This will start both:

- Vue.js app on http://localhost:3030
- JSON Server on http://localhost:3001

3. Build for production:

```bash
npm run build
```

## Project Structure

- `/src` - Source code
  - `/Authentication` - Login and Register components
  - `/components` - Reusable Vue components
  - `/pages` - Main application pages
  - `/store` - Vuex store modules
  - `/router` - Vue Router configuration
  - `/firebase` - Firebase configuration and services

## Available Scripts

- `npm run start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run lint` - Lints and fixes files

```

### App Demo

https://green-blog-vue.netlify.app/
```
