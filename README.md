# Personal Portfolio

A modern, responsive portfolio website built with Next.js 16, featuring dynamic GitHub integration, blog functionality, and a sleek dark mode design.

<p align="center">
  <a href="https://anugrahk.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀_View_Live_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="View Live Portfolio" />
  </a>
</p>

---

## ✨ Live Demo

**📌 [anugrahk.vercel.app](https://anugrahk.vercel.app)**

See the portfolio in action! Features include:
- Interactive command palette (press `Ctrl+J`)
- Smooth scroll animations
- Dynamic GitHub repository stats
- Full blog with syntax highlighting

---

## 🚀 Features

- **Dynamic GitHub Integration** - Live repository stats fetched server-side from GitHub API
- **Blog System** - Markdown-powered blog with syntax highlighting
- **Dark Mode** - Seamless theme switching with system preference support
- **Responsive Design** - Mobile-first approach with glassmorphism UI
- **SEO Optimized** - Open Graph tags, sitemap, metadata
- **Smooth Animations** - Motion (formerly Framer Motion) for delightful interactions
- **Interactive Components** - Command palette, hover effects, scroll animations

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/anugrahk21/My_Portfolio_Website.git
   cd MY_WEBSITE
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   GITHUB_TOKEN=your_github_personal_access_token
   ```
   
   > **Note:** The token is used server-side only for fetching GitHub repository stats securely.

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📁 Project Structure

```
MY_WEBSITE/
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   ├── data/             # Resume data, blog posts
│   └── lib/              # Utility functions (incl. server-side GitHub fetch)
├── public/               # Static assets
└── package.json
```

## 🎨 Customization

1. **Personal Info** - Edit `src/data/resume-data.tsx`
2. **Blog Posts** - Add `.md` files in `src/data/Blog_Data/`
3. **Styling** - Modify Tailwind config in `tailwind.config.js`

## 📝 License

This project is open source. Feel free to use it as inspiration, but please don't copy it directly. Give proper attribution if you reference the code.

## 🤝 Connect

- **Portfolio:** [anugrahk.vercel.app](https://anugrahk.vercel.app)
- **GitHub:** [@anugrahk21](https://github.com/anugrahk21)
- **LinkedIn:** [anugrah-k](https://www.linkedin.com/in/anugrah-k)
- **Email:** anugrah.k910@gmail.com

---

<p align="center">
  Built with ❤️ by <a href="https://anugrahk.vercel.app">Anugrah K</a>
</p>
