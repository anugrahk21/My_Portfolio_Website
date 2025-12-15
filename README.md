# Personal Portfolio

A modern, responsive portfolio website built with Next.js 16, featuring dynamic GitHub integration, blog functionality, and a sleek dark mode design.

## 🚀 Features

- **Dynamic GitHub Integration** - Live repository stats fetched from GitHub API
- **Blog System** - MDX-powered blog with syntax highlighting
- **Dark Mode** - Seamless theme switching with system preference support
- **Responsive Design** - Mobile-first approach with glassmorphism UI
- **SEO Optimized** - Open Graph tags, sitemap, metadata
- **Smooth Animations** - Framer Motion for delightful interactions
- **Interactive Components** - Command palette, hover effects, scroll animations

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Framer Motion
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
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here
   ```

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
│   ├── data/            # Resume data, blog posts
│   └── lib/             # Utility functions
├── public/              # Static assets
└── package.json
```

## 🎨 Customization

1. **Personal Info** - Edit `src/data/resume-data.tsx`
2. **Blog Posts** - Add `.md` files in `src/data/Blog_Data/`
3. **Styling** - Modify Tailwind config in `tailwind.config.ts`

## 📝 License

This project is open source. Feel free to use it as inspiration, but please don't copy it directly. Give proper attribution if you reference the code.

## 🤝 Connect

- **GitHub:** [@anugrahk21](https://github.com/anugrahk21)
- **LinkedIn:** [anugrah-k](https://www.linkedin.com/in/anugrah-k)
- **Email:** anugrah.k910@gmail.com

---

Built with ❤️ by Anugrah K
