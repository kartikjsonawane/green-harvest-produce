@echo off
cd /d "%~dp0"
echo ==========================================
echo   Green Harvest Produce - Git Setup
echo ==========================================
echo.

echo [1/4] Initializing git repository...
git init
git branch -M main

echo.
echo [2/4] Staging all files...
git add .

echo.
echo [3/4] Creating initial commit...
git commit -m "Initial commit: Green Harvest Produce website

- Next.js 15 App Router with TypeScript
- Full i18n: English, Hindi (हिंदी), Marathi (मराठी)
- 8 public pages: Home, About, Products, Bulk Supply, Logistics, Gallery, Blog, Contact
- Admin dashboard (Products, Inquiries, Blog, Gallery, Chatbot)
- AI Chatbot widget (Harvy)
- Framer Motion animations + Tailwind CSS
- SEO: sitemap.ts + robots.ts
- Vercel-ready deployment config"

echo.
echo [4/4] Done! Now run these commands to push to GitHub:
echo.
echo   git remote add origin https://github.com/YOUR_USERNAME/green-harvest-produce.git
echo   git push -u origin main
echo.
echo Replace YOUR_USERNAME with your GitHub username.
echo Create the repo at: https://github.com/new
echo.
pause
