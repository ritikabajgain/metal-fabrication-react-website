# Miller Metals — Metal Welding & Fabrication Website

A modern, responsive business website for a metal welding and fabrication company based in Monroe, Louisiana. Built with React, Vite, and Tailwind CSS, featuring dark mode support, smooth animations, and a fully functional contact/quote request form.

---

## Screenshot

<!-- Add a screenshot of the project below -->
![Miller Metals Website](./screenshot.png)

---

## Features

- **Dark / Light Mode** — system-aware theme toggle persisted across sessions
- **Smooth Animations** — section entrance animations powered by Framer Motion
- **Contact Form with Real Email** — quote requests sent directly via EmailJS
- **Before & After Gallery** — interactive slider showcasing project transformations
- **Portfolio & Featured Projects** — filterable project gallery with detail cards
- **Testimonials** — customer review section
- **FAQ** — accordion-style frequently asked questions
- **Fully Responsive** — mobile-first layout that works on all screen sizes

---

## Pages / Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky navigation with dark mode toggle and smooth scroll links |
| **Hero** | Full-screen landing with call-to-action buttons |
| **About** | Company background, mission, and team overview |
| **Services** | Overview of offered services (container homes, trailers, fences, etc.) |
| **Portfolio** | Filterable gallery of completed projects |
| **Featured Projects** | Highlighted showcase of standout work |
| **Before & After** | Side-by-side image slider showing transformations |
| **Testimonials** | Customer reviews and ratings |
| **FAQ** | Common questions with expandable answers |
| **Contact** | Quote request form (EmailJS) + phone, email, map, and location info |
| **Footer** | Links, social media, and copyright |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [Lucide React](https://lucide.dev) | Icon library |
| [EmailJS](https://www.emailjs.com) | Client-side email sending (no backend) |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## EmailJS Setup

To enable the contact form to send real emails:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Add a **Gmail** email service and connect your account
3. Create an **Email Template** using these variables:
   ```
   From: {{from_name}} ({{from_email}})
   Phone: {{phone}}
   Service: {{service}}
   Message: {{message}}
   ```
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Paste them into `src/components/Contact.jsx`:
   ```js
   const EMAILJS_SERVICE_ID  = 'your_service_id'
   const EMAILJS_TEMPLATE_ID = 'your_template_id'
   const EMAILJS_PUBLIC_KEY  = 'your_public_key'
   ```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── FeaturedProjects.jsx
│   ├── BeforeAfter.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## License

This project is private. All rights reserved.
