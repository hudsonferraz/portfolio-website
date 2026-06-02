# Hudson Ferraz — Portfolio

Live site: [hudson-portfolio-website.vercel.app](https://hudson-portfolio-website.vercel.app/)

Personal portfolio showcasing experience in full-stack development, high-frequency trading, and market-making. Built with Next.js 14 (App Router, Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email, and Resend. Deployed on Vercel.

## Features

- English and Portuguese (language switcher with persisted preference)
- Dark / light theme
- Sections: intro, about, experience, skills, projects, contact
- Contact form with honeypot spam filter and Resend email delivery
- SEO: metadata, Open Graph image, JSON-LD, sitemap, custom 404

## Tech stack

- **Framework:** Next.js 14, React 18
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion (respects `prefers-reduced-motion`)
- **Email:** React Email, Resend
- **Images:** `next/image` with `sharp` for production optimization

## Getting started

### Install

```bash
git clone https://github.com/hudsonferraz/portfolio-website.git
cd portfolio-website
npm install
```

### Environment variables

The contact form uses [Resend](https://resend.com). Set `RESEND_API_KEY` locally and on Vercel.

**Local development** — copy the example file and add your key (use `.env.local` or `.env`, both are gitignored):

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_your_api_key_here
```

**Vercel** — add `RESEND_API_KEY` under **Project → Settings → Environment Variables** (Production and Preview if you test the form there).

The server validates `RESEND_API_KEY` at startup. If it is missing, `npm run dev` will fail with a clear error.

#### Custom sender domain (optional)

For production, verify your domain in Resend and update the `from` address in `actions/sendEmail.ts` (default is `onboarding@resend.dev` for testing).

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project structure

| Path | Purpose |
|------|---------|
| `app/` | Routes, layout, metadata, sitemap |
| `components/` | UI sections and shared components |
| `messages/` | EN / PT translation files |
| `actions/` | Server actions (contact email) |
| `lib/` | Data, hooks, site config, utilities |

## License

[MIT](LICENSE.txt)
