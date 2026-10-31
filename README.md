# Neelakanta A — Portfolio

Personal portfolio built with **React 18** and **Vite**, in plain JavaScript.

The centrepiece is a live **schema playground**: edit a JSON card schema and a generic React host renders it as a form, while each field's `map` path builds the API request payload. It's a small version of the schema-driven journey card library I built at Tecnotree.

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/   Nav, Hero, Playground, SchemaForm, Work, Projects, Skills, Contact, Footer
  data/         profile.js (all page content), presets.js (playground schemas)
  hooks/        useTheme.js (light/dark toggle)
  utils/        schema.js (parse, validate, payload mapping, JSON highlighting)
```

To update content, edit `src/data/profile.js`; no component changes needed.

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.
In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** once.
