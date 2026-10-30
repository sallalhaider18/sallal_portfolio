# Sallal Haider – Portfolio (React + Vite)

A multi-page portfolio built with **React 18, Vite 5, React Router and Framer Motion**.
Dark theme by default with a light-mode switch, page transitions, scroll animations,
an animated Dark Phoenix pipeline, count-up stats and a case-study page for every project.

## Run it on your computer

You need **Node.js 18 or newer** (download from https://nodejs.org, choose the LTS version).

```bash
cd sallal-portfolio
npm install      # first time only, downloads the libraries
npm run dev      # starts the site
```

Open the address it prints, usually **http://localhost:5173**. Edits refresh the page automatically.
Stop it with **Ctrl + C**.

To test the production build:

```bash
npm run build
npm run preview
```

## Edit the content

Almost everything lives in **`src/data/content.js`**: your profile, stats, projects,
experience and skills. Change the text there and the whole site updates.

- Pages: `src/pages/`
- Reusable pieces (pipeline animation, cards, counters): `src/components/`
- Colours, fonts and layout: `src/index.css`
- CV download: replace `public/Sallal_Haider_CV.pdf`

## Deploy on Vercel

1. Create a new GitHub repository and upload this folder (without `node_modules` and `dist`).
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project** and import the repository.
3. Vercel detects **Vite** automatically (build command `npm run build`, output `dist`). Click **Deploy**.

`vercel.json` makes direct links such as `/projects/dark-phoenix` work after deployment.
