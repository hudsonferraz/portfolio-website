## You can see this project running live [here](https://hudson-portfolio-website.vercel.app/).

Personal portfolio built with Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, deployed on Vercel. Supports English and Portuguese.

## Installing

Clone the repository and install dependencies:

```bash
git clone https://github.com/hudsonferraz/portfolio-website.git
cd portfolio-website
npm install
```

## Environment variables

The contact form sends email through [Resend](https://resend.com). You need an API key:

1. Create a [Resend](https://resend.com) account and generate an API key.
2. Copy `.env.example` to `.env.local` and set your key:

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_your_api_key_here
```

3. On Vercel, add `RESEND_API_KEY` under **Project → Settings → Environment Variables** for Production (and Preview if you test the form there).

The app validates `RESEND_API_KEY` when the Node.js server starts. If it is missing, the dev server will fail with a clear error.

### Sending from your own domain (production)

By default, emails use Resend’s `onboarding@resend.dev` sender (fine for testing). For production:

1. Add and verify your domain in the Resend dashboard.
2. Update the `from` address in `actions/sendEmail.ts` to an address on that domain (for example `Contact Form <contact@yourdomain.com>`).

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

[MIT](https://choosealicense.com/licenses/mit/)
