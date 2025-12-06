# Quick Setup Guide

## Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Copy environment file:**
   ```bash
   cp env.example .env.local
   ```

3. **Configure environment variables:**
   Edit `.env.local` and add your:
   - Database URL (if using Prisma)
   - n8n webhook base URL (optional)
   - OpenRouter API key (optional)

4. **Set up database (if using Prisma):**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Run development server:**
   ```bash
   npm run dev
   ```

## Adding Hero Background Images

1. Generate or obtain 4K hero background images:
   - `public/assets/hero-bg-4k.png` (3840×2160)
   - `public/assets/hero-bg-4k.webp` (3840×2160)

2. See `public/assets/hero-bg-placeholder.txt` for art brief details.

3. The hero section will automatically use these images if they exist.

## Logo & Favicon

1. Replace `public/assets/logo.svg` with your final logo
2. Generate favicon from logo using [favicon.io](https://favicon.io) or [RealFaviconGenerator](https://realfavicongenerator.net/)
3. Place `favicon.ico` in `public/` directory

## Testing

```bash
npm run test
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy automatically

See README.md for detailed instructions.

