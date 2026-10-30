# Sallal Haider – Portfolio

My personal portfolio website: a multi-page, animated site that presents my work as a **Software & AI Engineer**, with a detailed case study for every project.

🔗 **Live site:** _add your Vercel link here_  
📄 **CV:** available from the site’s “Download CV” button

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white) ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

---

## ✨ Features

- **Multi-page layout:** Home, Projects, a case-study page per project, Experience, Skills and Contact
- **Dark theme by default** with a light-mode switch that remembers each visitor’s choice
- **Animated Dark Phoenix pipeline:** an interactive walk-through of my AI video pipeline that shows the validation step catching bad LLM output, with a Replay button
- **Motion throughout** (Framer Motion):
  - Smooth page transitions
  - Letter-by-letter name reveal on the home page
  - Count-up statistics
  - Sections and cards that slide in on scroll
  - Cards that rearrange smoothly when you filter projects
  - An animated order-book illustration on the MarketMind AI page
  - A bar chart that grows into place on the disease prediction page
  - An experience timeline that fills as you scroll
  - A reading-progress bar at the top of the page
- **Project filters:** AI and ML, Backend and integration, Web and apps
- **Accessible and responsive:** works from phones to wide screens, has keyboard focus styles and a skip link, and respects “reduce motion” settings
- **One content file:** all text lives in `src/data/content.js`, so updating the site doesn’t mean touching components

---

## 📂 Projects featured

| Project | What it is |
|---|---|
| **Dark Phoenix** | Full-stack AI pipeline that turns YouTube videos into captioned vertical clips (Next.js 15, WhisperX, Groq Llama 3.3 70B, FFmpeg, Modal L40S GPUs, Inngest, Supabase, AWS S3) |
| **MarketMind AI** | Real-time crypto order-flow research and paper-trading platform with 130+ strategies tested honestly and 212 automated tests (Python, FastAPI, WebSockets, React) |
| **SAP to Dynamics 365 ESB** | Event-driven Enterprise Service Bus on Azure plus a full SAP data migration for Blaser Swisslube (Logic Apps, Functions, Service Bus, Power Platform) |
| **SmartFolders** | Document management system with Google-inspired search and folder- and document-level access control |
| **Disease prediction system** | Master’s project comparing 8 ML and deep learning models for diabetes, heart disease and breast cancer (best average accuracy 91.4%) |
| **Auto Reply** | AI-powered Outlook add-in that drafts context-aware replies with the ChatGPT API |
| **HR onboarding system** | Model-Driven Power App on Dataverse for new-hire, salary and interview records |
| **PetsOne.pk** | ASP.NET MVC e-commerce platform with secure payments and role-based access |

---

## 🛠️ Tech stack

- **React 18**: UI components
- **Vite 5**: development server and production build
- **React Router 6**: page routing, including a case-study page per project
- **Framer Motion 11**: animations and page transitions
- **Plain CSS** with design tokens for the dark and light themes
- **Google Fonts**: Archivo for headings, IBM Plex Sans for text
- **Vercel**: hosting

---

## 🚀 Run it locally

You need **Node.js 18 or newer** ([download the LTS version](https://nodejs.org)).

```bash
git clone https://github.com/sallalhaider18/sallal_portfolio.git
cd sallal_portfolio
npm install
npm run dev
```

Open **http://localhost:5173**. Changes reload automatically.

Build and preview the production version:

```bash
npm run build
npm run preview
```

---

## ✏️ Editing content

| What to change | Where |
|---|---|
| Name, intro, contact links, stats | `src/data/content.js` (`PROFILE`, `STATS`) |
| Projects and case-study text | `src/data/content.js` (`PROJECTS`) |
| Experience timeline | `src/data/content.js` (`EXPERIENCE`) |
| Skills | `src/data/content.js` (`SKILLS`) |
| Colours, fonts, layout | `src/index.css` |
| CV file | replace `public/Sallal_Haider_CV.pdf` |

To add a project, add a new object to the `PROJECTS` array. Its card, filter category and case-study page at `/projects/<slug>` are created automatically.

---

## 📁 Project structure

```
sallal_portfolio/
├── public/
│   ├── favicon.svg
│   └── Sallal_Haider_CV.pdf
├── src/
│   ├── components/      Header, Footer, Pipeline, OrderBook, ProjectCard, Counter, Reveal, Tags
│   ├── pages/           Home, Projects, ProjectDetail, Experience, Skills, Contact, NotFound
│   ├── data/content.js  all site content
│   ├── App.jsx          routes and page transitions
│   ├── main.jsx         app entry point
│   └── index.css        design tokens, themes and styles
├── index.html
├── vite.config.js
├── vercel.json          lets direct links like /projects/dark-phoenix work on Vercel
└── package.json
```

---

## ☁️ Deployment

The site is deployed on **Vercel**:

1. Push the repository to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import this repository.
3. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.

Every push to `main` redeploys the site automatically.

---

## 📬 Contact

**Sallal Haider**, Software & AI Engineer, Lahore, Pakistan  
📧 [sallalhaider8@gmail.com](mailto:sallalhaider8@gmail.com) · 💼 [LinkedIn](https://linkedin.com/in/sallal-haider-597386202) · 💻 [GitHub](https://github.com/sallalhaider18)

Open to Software Engineer, Backend and AI Engineer roles, remote or on-site, and to relocation to the UAE, Saudi Arabia and Qatar.
