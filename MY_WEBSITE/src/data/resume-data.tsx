import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { BlogPost } from "@/components/blog-card";

export const RESUME_DATA = {
  name: "Anugrah K",
  initials: "AK",
  location: "Punjab, India",
  about: "AI-Augmented Developer | Secure AI Workflows & Backend Systems",
  summary:
    "AI-augmented developer with a strong foundation in secure AI workflows, backend system design, and cybersecurity. Experienced in building full-stack and middleware applications integrating large language models, computer vision, structured APIs, and security-focused workflows, with demonstrated innovation through production-style projects and a filed patent.",
  avatarUrl: "/anugrah.webp",
  personalWebsiteUrl: "https://anugrahk.vercel.app",
  resumeUrl: "/Anugrah_Main_CV.pdf",
  extendedBio: `
  
## My Journey in AI and Cyber Security



My interest in ai and cyber security began when I realized how critical digital security is in our increasingly connected world. As I progressed through my B.Tech in Computer Science & Engineering with a specialization in Cybersecurity, I found myself naturally drawn to the intersection of security and artificial intelligence.

### Security-First Mindset

Cybersecurity isn't just about tools and techniques—it's a mindset. Through my coursework and the Google Cybersecurity Professional Certificate program, I've developed a strong foundation in network security, threat analysis, and penetration testing. Working with tools like Burp Suite, Wireshark, and Nmap has given me hands-on experience in identifying and addressing vulnerabilities.

### The AI Connection

What excites me most is how AI can revolutionize cybersecurity. My participation in Google's AI Agents Intensive Training opened my eyes to the potential of intelligent systems. I've been exploring how AI can detect threats, analyze patterns, and even predict security breaches before they happen.

### Building Practical Solutions

I believe in learning by doing. My projects reflect this philosophy.

### Research and Innovation

Beyond security, I'm passionate about innovation and technology. My research on bioreceptive concrete panels for Indian climates combines environmental consciousness with technical innovation. I've also filed a patent for a smart cooking system, demonstrating my interest in IoT and practical automation.

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
      company: "Securiti Education",
      link: "https://securiti.ai/",
      badges: ["Certification"],
      title: "AI Security & Governance Certification",
      start: "Jan 2026",
      end: "Jan 2026",
      description:
        "Developed practical skills in Generative AI guardrails by mastering governance frameworks to secure model integration. Implemented risk strategies ensuring compliance with global AI safety laws. Applied safety measures (input filtering, sanitization) for secure agents.",
    },
    {
      company: "Google Kaggle",
      link: "https://www.kaggle.com/",
      badges: ["Completed"],
      title: "AI Agents Intensive Training",
      start: "Nov 2025",
      end: "Nov 2025",
      description:
        "Acquired expertise in agentic architecture (RAG, orchestration, tool-use) through Google-led labs. Built and deployed AI agents covering models, orchestration, memory, and evaluation. Deployed a functional agentic workflow for the final capstone project, earning a verified Kaggle achievement badge.",
    },
    {
      company: "Google Coursera",
      link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      badges: ["In Progress"],
      title: "Google Cybersecurity Professional Certificate",
      start: "Oct 2025",
      end: "Present",
      description:
        "Mastering threat detection and incident response by conducting hands-on labs with Linux. Analyzing patterns to identify vulnerabilities using industry-standard tools. Building practical experience for industry-recognized cybersecurity skills.",
    },
  ],
  skills: [
    "Languages & Databases: Python, C/C++, Java, SQL",
    "Security Tools: Burp Suite, Wireshark, Nmap, Metasploitable",
    "Frameworks & Platforms: Linux, Git, VMWare/VirtualBox, VS Code, FastAPI",
    "AI & GenAI: Prompt Engineering, LLM Integration (Gemini API), AI-Assisted Development, AI Safety & Guardrails",
    "Core Areas: Generative AI, AI Security, Backend Development, Web App Security, Research & Development",
    "Soft Skills: Technical Documentation, Critical Thinking, Research & Analysis, Knowledge Sharing, Attention to Detail",
  ],
  open_source: [
    {
      name: "Project-Cerberus",
      html_url: "https://github.com/anugrahk21/Project-Cerberus",
      description: "A production-grade, multi-agent security reverse proxy that acts as an 'Iron Dome' for AI models. Built with weighted voting, canary tokens, and context-aware memory to detect and block prompt injection attacks in real-time.",
      topics: ["ai-security", "multi-agent", "cybersecurity", "llm-safety"],
      highlight: true,
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "VaultGuard",
      html_url: "https://github.com/anugrahk21/Cyber-Projects",
      description: "Python tool for advanced password strength analysis with 0-100 point scoring system. Features secure password generation, entropy calculation, and breach detection using HaveIBeenPwned API.",
      topics: ["python", "password-security", "API integration"],
      highlight: true,
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "Kortex-CLI",
      html_url: "https://github.com/anugrahk21/Kortex-CLI",
      description: "AI-powered CLI tool that translates natural language into Linux shell commands using Google Gemini.",
      topics: ["ai-cli", "python", "gemini-api", "shell-commands"],
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "Attend-AI",
      html_url: "https://github.com/anugrahk21/Smart-Attendance-System",
      description: "Full-stack attendance system integrating browser-based face recognition with a Django REST backend. Features RESTful APIs, timetable-based workflows, and AI-assisted development.",
      topics: ["react", "django", "mysql", "face-recognition", "full-stack"],
      stargazers_count: 0,
      forks_count: 0,
    },

    {
      name: "Personal_AI_Life_Coach",
      html_url: "https://github.com/anugrahk21/Personal_AI_Life_Coach",
      description: "Full-stack AI agent providing real-time, context-aware guidance using Gemini 2.0. Implements advanced prompt engineering, session memory, and safety guardrails.",
      topics: ["ai-agent", "flask", "gemini-api", "mental-health"],
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "Retrieval-Augmented-Generation-RAG",
      html_url: "https://github.com/anugrahk21/Retrieval-Augmented-Generation-RAG",
      description: "A powerful Streamlit application that demonstrates Retrieval-Augmented Generation (RAG) using Google's Gemini AI. Upload your documents and ask questions - the AI will answer based solely on the document content!",
      topics: ["python", "streamlit", "gemini-api", "rag"],
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "AI Agent with Tool Selection",
      html_url: "https://github.com/anugrahk21/AI_Agents-IBM",
      description: "A simple AI agent powered by Google's FLAN-T5 that intelligently routes user queries to specialized tools: calculator, date/time, and conversational chat.",
      topics: ["python", "nlp", "chatbot", "transformers", "huggingface", "ai-agent", "llm", "flan-t5"],
      stargazers_count: 0,
      forks_count: 0,
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
      title: "Smart IoT Cookware System",
      description:
        "Architected an IoT induction system using a 10×10 electromagnet grid for pixel-level thermal control. Designed event-driven logic processing real-time infrared data, reducing theoretical energy waste by 40%. Specified hardware fail-safes and logic gates for immediate cutoff when temperatures exceed 250°C.",
      publisher: "Patent Application No. 202511048523 — Patent Pending",
      date: "Filed: May 2025",
      status: "Patent Pending",
      websiteUrl: "",
      resourceUrl: "",
      citation: "Patent Application No. 202511048523",
      tags: [
        "IoT",
        "Smart Home",
        "Automation",
        "Patent",
      ],
      showLinks: false,
    },
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
    }
  ],
  achievements: [
    {
      title: "Certified in AI Security and Governance",
      date: "January 2026",
      description: "Successfully completed securiti.ai's AI Security and Governance certification, covering AI security fundamentals, governance frameworks, and responsible AI practices.",
      tags: ["AI", "Security", "Governance"],
      link: {
        label: "View Certificate",
        href: "https://www.kaggle.com/",
      },
    },
    {
      title: "Completed AI Agents Intensive Training",
      date: "November 2025",
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
  ],
  blogs: [
    {
      slug: "from-idea-to-patent-smart-cooking-system",
      title: "From Idea to Patent: Designing a Smart Cooking System",
      date: "February 2026",
      excerpt: "How I designed a patent-pending smart cooking system using ferrofluids and electromagnetic grids to enable precise, multi-zone heating on a single surface.",
      tags: ["IoT", "Patent", "Smart Home", "Innovation", "System Design"],
      readingTime: "6 min read",
      published: true,
    },
    {
      slug: "ai-security-the-ignored-threat",
      title: "The Silent Threat in the AI Gold Rush",
      date: "February 2026",
      excerpt: "As companies rush to integrate AI, they're leaving the back door open. From prompt injection to data leakage, I explore the critical overlooked risks in the current AI landscape and how frameworks like OWASP Top 10 for LLMs are trying to fix it.",
      tags: ["AI Security", "OWASP", "LLM Safety", "Cybersecurity", "Prompt Injection"],
      readingTime: "5 min read",
      published: true,
    },
    {
      slug: "project-cerberus-ai-iron-dome",
      title: "Project Cerberus: The AI Iron Dome",
      date: "December 2025",
      excerpt: "A production-grade, multi-agent security reverse proxy that acts as an 'Iron Dome' for AI models. Built with weighted voting, canary tokens, and context-aware memory to detect and block prompt injection attacks in real-time.",
      tags: ["AI Security", "Multi-Agent Systems", "Cybersecurity", "LLM Safety", "Google AI"],
      readingTime: "8 min read",
      published: true,
    },
    {
      slug: "retrieval-augmented-generation-rag",
      title: "Retrieval-Augmented Generation (RAG)",
      date: "December 2025",
      excerpt: "A powerful Streamlit application that demonstrates Retrieval-Augmented Generation (RAG) using Google's Gemini AI. Upload your documents and ask questions - the AI will answer based solely on the document content!",
      tags: ["Python", "Streamlit", "Google Gemini API", "RAG", "Document Processing"],
      readingTime: "5 min read",
      published: true,
    },
  ] as BlogPost[],
} as const;
