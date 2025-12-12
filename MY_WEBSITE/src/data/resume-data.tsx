import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { BlogPost } from "@/components/blog-card";

export const RESUME_DATA = {
  name: "Anugrah K",
  initials: "AK",
  location: "Punjab, India",
  about: "Cybersecurity Student & AI Enthusiast",
  summary:
    "Cybersecurity student with a passion for AI applications in security. Focused on web app security, penetration testing, and building AI-powered tools. Currently pursuing B.Tech in Computer Science & Engineering (Cybersecurity) with hands-on experience in password security, AI agents, and research in sustainable technology.",
  // avatarUrl: "https://anugrah.com/anugrah.jpg",
  avatarUrl: "/anugrah.jpeg",
  personalWebsiteUrl: "https://github.com/anugrahk21",
  resumeUrl: "/Anugrah_K_Resume.pdf",
  extendedBio: `
  
## My Journey in Cybersecurity and AI

My interest in cybersecurity began when I realized how critical digital security is in our increasingly connected world. As I progressed through my B.Tech in Computer Science & Engineering with a specialization in Cybersecurity, I found myself naturally drawn to the intersection of security and artificial intelligence.

### Security-First Mindset

Cybersecurity isn't just about tools and techniques—it's a mindset. Through my coursework and the Google Cybersecurity Professional Certificate program, I've developed a strong foundation in network security, threat analysis, and penetration testing. Working with tools like Burp Suite, Wireshark, and Nmap has given me hands-on experience in identifying and addressing vulnerabilities.

### The AI Connection

What excites me most is how AI can revolutionize cybersecurity. My participation in Google's AI Agents Intensive Training opened my eyes to the potential of intelligent systems. I've been exploring how AI can detect threats, analyze patterns, and even predict security breaches before they happen.

### Building Practical Solutions

I believe in learning by doing. My projects reflect this philosophy:

- **Password Security Tool**: Built a Python-based system that doesn't just check password strength—it educates users about entropy, simulates breach detection, and generates cryptographically secure passwords.
- **AI Personal Life Coach**: Engineered a full-stack AI agent using Flask and Google Gemini API, implementing safety guardrails and context-aware interactions. This project taught me about responsible AI development and the importance of ethical considerations.

### Research and Innovation

Beyond security, I'm passionate about sustainable technology. My research on bioreceptive concrete panels for Indian climates combines environmental consciousness with technical innovation. I've also filed a patent for a smart cooking system, demonstrating my interest in IoT and practical automation.

## Technical Philosophy

My approach to security and development:

1. **Defense in Depth**: Multiple layers of security are always better than one
2. **Continuous Learning**: The threat landscape evolves daily—so should I
3. **Ethical Practice**: Security knowledge comes with responsibility
4. **Practical Application**: Theory is important, but real-world implementation is where learning happens

## Current Focus

I'm currently deepening my knowledge in:

- Web application security and penetration testing
- AI safety and guardrails for LLM applications
- Network security protocols and threat analysis
- Secure coding practices and vulnerability assessment

## Building for the Future

I believe technology should be secure, accessible, and beneficial to society. Whether it's developing security tools, researching sustainable solutions, or creating AI applications with built-in safety measures, my goal is to contribute positively to the digital ecosystem.

## Let's Connect

I'm interested in opportunities related to:
- Cybersecurity roles (especially in web app security and penetration testing)
- AI security and safety research
- Collaboration on security tools and frameworks
- Research in sustainable technology

Feel free to reach out if you want to discuss cybersecurity, AI applications, or innovative projects!
`,
  contact: {
    email: "anugrah.k910@gmail.com",
    tel: "+91 95396 94902",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/anugrahk21",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anugrah-k",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Lovely Professional University",
      degree: "B.Tech in Computer Science & Engineering (Cybersecurity)",
      start: "2023",
      end: "Present",
    },
    {
      school: "Kendriya Vidyalaya Keltron Nagar",
      degree: "Secondary (X) | Senior Secondary (XII)",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Google Cybersecurity Professional Certificate",
      link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      badges: ["In Progress"],
      title: "Cybersecurity Training",
      start: "2024",
      end: "Present",
      description:
        "Completing industry-recognized cybersecurity training with Google. Building practical experience in network security, threat analysis, and Linux tools through applied labs and hands-on security modules. Completed foundational topics preparing for real-world cybersecurity roles.",
    },
    {
      company: "AI Agents Intensive Training with Google",
      link: "https://www.kaggle.com/",
      badges: ["Completed"],
      title: "AI Agent Development",
      start: "November 2024",
      end: "November 2024",
      description:
        "Completed intensive 5-day online training led by Google ML researchers and engineers. Built and deployed AI agents covering models, orchestration, memory, and evaluation. Participated in live sessions, hands-on codelabs, and completed a final capstone project, earning a Kaggle badge.",
    },
  ],
  skills: [
    "Languages: Python, C/C++, Java, SQL, HTML, CSS, JavaScript",
    "Security Tools: Burp Suite, Wireshark, Nmap, Metasploitable",
    "Frameworks & Platforms: Linux, Git, VMWare/VirtualBox, VS Code, Flask, FastAPI",
    "AI & GenAI: Prompt Engineering, LLM Integration (Gemini API), AI-Assisted Development, AI Safety & Guardrails",
    "Core Areas: Web App Security, Network Security, Penetration Testing, Research & Development",
    "Soft Skills: Technical Documentation, Critical Thinking, Research & Analysis, Knowledge Sharing, Attention to Detail",
  ],
  open_source: [
    "https://github.com/anugrahk21/Project-Cerberus",
    "https://github.com/anugrahk21/Cyber-Projects",
    "https://github.com/anugrahk21/Personal_AI_Life_Coach",
  ],
  projects: [
    {
      title: "Password Security Tool",
      techStack: ["Python", "Cryptographic Libraries", "Regular Expressions", "Entropy Calculation"],
      description:
        "Developed a Python tool for advanced password strength analysis with 0-100 point scoring system. Features secure password generation, entropy calculation, and simulated breach detection.",
      link: {
        label: "github.com",
        href: "https://github.com/anugrahk21/Cyber-Projects/tree/main/P1",
      },
    },
    {
      title: "AI Personal Life Coach",
      techStack: ["Python", "Flask", "Google Gemini API", "HTML/CSS", "Session Management"],
      description:
        "Full-stack AI agent providing real-time, context-aware guidance using Gemini 2.0. Implements advanced prompt engineering, session memory, and safety guardrails for detecting self-harm triggers.",
      link: {
        label: "live demo",
        href: "https://personal-ai-ally.onrender.com/",
      },
    },
  ],
  extraCurricular: [
    {
      title: "AI Agents Intensive Training Capstone Project",
      description:
        "Completed capstone project for Google's 5-day AI Agents Intensive Training, earning a Kaggle badge. Built and deployed AI agents covering models, orchestration, memory, and evaluation.",
    },
    {
      title: "Cybersecurity Student",
      description:
        "Actively pursuing the Google Cybersecurity Professional Certificate while completing B.Tech in Computer Science & Engineering (Cybersecurity) at Lovely Professional University.",
    },
  ],
  publications: [
    {
      title: "Bioreceptive Concrete Panels for Indian Climates",
      description:
        "Research manuscript focused on formulating concrete panels optimized for warm-humid conditions and monsoon variability in India. Validated design assumptions via literature review and outlined lab-scale formulation planning for porosity, moisture retention, and surface micro-topography.",
      publisher: "Target: Materials/Sustainable Built Environment",
      date: "2025",
      status: "In Progress",
      websiteUrl: "",
      resourceUrl: "",
      citation: "Manuscript in preparation - Prototyping next",
      tags: [
        "Sustainable Materials",
        "Bioreceptive Design",
        "Climate Adaptation",
        "Civil Engineering",
      ],
      showLinks: false,
    },
    {
      title: "A Smart Cooking System",
      description:
        "Patent application for an IoT-assisted cooking workflow system. Completed system architecture and control logic with safety, timing, and alert mechanisms using event-driven design. Prepared prototyping plan for sensor integration and device orchestration.",
      publisher: "Patent Application - Patent Pending",
      date: "Filed: May 2025",
      status: "Patent Pending",
      websiteUrl: "",
      resourceUrl: "",
      citation: "Patent Application Filed",
      tags: [
        "IoT",
        "Smart Home",
        "Automation",
        "Patent",
      ],
      showLinks: false,
    },
  ],
  achievements: [
    {
      title: "Completed AI Agents Intensive Training",
      date: "November 2024",
      description:
        "Successfully completed Google's AI Agents Intensive Training, a rigorous 5-day program led by ML researchers and engineers. Earned Kaggle badge for capstone project.",
      tags: ["AI", "Google", "Training", "Kaggle"],
      link: {
        label: "View on Kaggle",
        href: "https://www.kaggle.com/",
      },
    },
    {
      title: "Filed Patent for Smart Cooking System",
      date: "May 2025",
      description:
        "Filed patent application for an innovative IoT-assisted cooking workflow system featuring safety mechanisms, timing control, and event-driven architecture.",
      tags: ["Patent", "IoT", "Innovation"],
    },
    {
      title: "Published Password Security Tool",
      date: "2025",
      description:
        "Developed and published an advanced password security analysis tool on GitHub with features including entropy calculation, breach simulation, and crypto-secure password generation.",
      tags: ["Cybersecurity", "Open Source", "Python"],
      link: {
        label: "View on GitHub",
        href: "https://github.com/anugrahk21/Cyber-Projects/tree/main/P1",
      },
    },
  ],
  blogs: [
    {
      slug: "project-cerberus-ai-iron-dome",
      title: "Project Cerberus: The AI Iron Dome",
      date: "December 3, 2024",
      excerpt: "A production-grade, multi-agent security reverse proxy that acts as an 'Iron Dome' for AI models. Built with weighted voting, canary tokens, and context-aware memory to detect and block prompt injection attacks in real-time.",
      tags: ["AI Security", "Multi-Agent Systems", "Cybersecurity", "LLM Safety", "Google AI"],
      readingTime: "8 min read",
      published: true,
    },
    {
      slug: "multi-agent-image-editing",
      title: "Cursor for Image Editing: A Multi-Agent Approach",
      date: "January 2025",
      excerpt: "Novel multi-agent system for visual content creation combining LLMs and VLMs for iterative refinement. Presented at Multi-Agent Workshops at AAAI 2025, this work redefines how we generate brand-consistent posters, banners, and flyers.",
      tags: ["Multi-Agent Systems", "Computer Vision", "AI Research", "AAAI 2025", "Image Generation"],
      readingTime: "5 min read",
      published: true,
    },
  ] as BlogPost[],
} as const;
