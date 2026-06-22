# 🌿 Green Harvest Produce

<div align="center">

**A production-ready corporate website for a bulk fruits & vegetables supplier**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/i18n-EN%20%7C%20हिंदी%20%7C%20मराठी-green)](https://next-intl-docs.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Live Demo](https://green-harvest-produce.vercel.app) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## ✨ Features

- **Multi-language** — Full EN / हिंदी / मराठी support across every page
- **8 public pages** — Home, About, Products, Bulk Supply, Logistics, Gallery, Blog, Contact
- **Admin dashboard** — Products, Inquiries, Blog, Gallery, Chatbot knowledge base
- **AI Chatbot (Harvy)** — Floating widget, pluggable into OpenAI API
- **Cold-chain logistics page** — Animated cold chain journey, warehouse network map
- **Gallery with lightbox** — Framer Motion animated grid + full-screen viewer
- **Fully responsive** — Mobile-first design with sticky navbar
- **SEO ready** — Sitemap, robots.txt, metadata per page
- **Vercel-ready** — Zero-config deployment

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion |
| i18n | next-intl v3 (EN, Hindi, Marathi) |
| Database | PostgreSQL via Prisma ORM *(optional)* |
| AI Chatbot | OpenAI API (pluggable) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
green-harvest-produce/
├── messages/
│   ├── en.json          # English translations
│   ├── hi.json          # Hindi translations
│   └── mr.json          # Marathi translations
├── src/
│   ├── app/
│   │   ├── [locale]/    # All public pages (i18n-aware)
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   ├── bulk-supply/
│   │   │   ├── logistics/
│   │   │   ├── gallery/
│   │   │   ├── blog/
│   │   │   └── contact/
│   │   ├── admin/       # Admin dashboard (no i18n)
│   │   ├── api/         # API routes
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, LanguageSwitcher
│   │   ├── home/        # All homepage sections
│   │   ├── chatbot/     # Harvy AI widget
│   │   └── shared/      # ScrollToTop, etc.
│   ├── i18n.ts
│   └── middleware.ts
├── prisma/
│   └── schema.prisma
└── public/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### 1. Clone & Install

```bash
git clone https://github.com/kartikjsonawane/green-harvest-produce.git
cd green-harvest-produce
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | Optional* |
| `NEXTAUTH_SECRET` | Random secret (`openssl rand -base64 32`) | Optional* |
| `OPENAI_API_KEY` | OpenAI key for live chatbot | Optional |

> *The site runs fully in **frontend-only mode** without a database. Database is only needed if you wire up the admin CRUD APIs.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🌐 Pages

| Route | Description |
|---|---|
| `/` | Home — hero, products, stats, testimonials |
| `/about` | Company story, values, team, certifications |
| `/products` | Catalog with search & filter |
| `/bulk-supply` | Solutions by business segment |
| `/logistics` | Cold chain journey & warehouse network |
| `/gallery` | Animated grid with lightbox |
| `/blog` | Article listing + individual post pages |
| `/contact` | Inquiry form + contact info |
| `/admin` | Dashboard overview |
| `/admin/products` | Product management |
| `/admin/inquiries` | Inquiry management |
| `/admin/blog` | Blog post editor |
| `/admin/gallery` | Gallery manager |
| `/admin/chatbot` | AI knowledge base editor |

Language prefixes `/hi/...` and `/mr/...` serve the Hindi and Marathi versions of every page.

---

## 🤖 AI Chatbot (Harvy)

The chatbot runs in **local mode** by default (no API key needed). To connect OpenAI:

1. Add `OPENAI_API_KEY` to `.env.local`
2. Create `src/app/api/chat/route.ts`:

```ts
import OpenAI from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are Harvy, the AI assistant for Green Harvest Produce, a bulk fruits and vegetables supplier in India.",
      },
      ...messages,
    ],
    stream: true,
  });
  return new Response(response.toReadableStream());
}
```

3. Update `ChatWidget.tsx` to call `/api/chat` instead of `getBotResponse()`.

---

## ☁️ Deployment on Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kartikjsonawane/green-harvest-produce)

### Manual deploy

```bash
npm i -g vercel
vercel --prod
```

No environment variables are required for a frontend-only deployment. The site builds and deploys with zero config.

---

## 🎨 Customisation

| What | Where |
|---|---|
| Company name / branding | Global search for "Green Harvest" |
| Brand colors | `tailwind.config.ts` → `colors.primary` |
| Products list | `src/app/[locale]/products/page.tsx` → `allProducts` array |
| Team members | `src/app/[locale]/about/page.tsx` → `team` array |
| Testimonials | `src/components/home/Testimonials.tsx` → `testimonials` array |
| Chatbot responses | `src/components/chatbot/ChatWidget.tsx` → `knowledgeBase` |
| Translations | `messages/en.json`, `messages/hi.json`, `messages/mr.json` |

---

## 📜 Scripts

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## 📄 License

MIT — free to use and modify for commercial projects.

---

## 👤 Author

**Kush** · [GitHub @kartikjsonawane](https://github.com/kartikjsonawane)

> Built with Next.js 15, next-intl, Tailwind CSS, and Framer Motion.
