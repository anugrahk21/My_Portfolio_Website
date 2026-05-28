import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { BlogPost } from "@/components/blog-card";

export const RESUME_DATA = {
  name: "Anugrah K",
  initials: "AK",
  location: "Punjab, India",
  about: "AI-Augmented Developer | Secure AI Workflows & Backend Systems",
  summary:
    "AI-augmented developer with a strong foundation in secure AI workflows, backend system design, and cybersecurity. Experienced in building full-stack and middleware applications integrating large language models, computer vision, structured APIs, and security-focused workflows.",
  avatarUrl: "/anugrah.webp",
  personalWebsiteUrl: "https://anugrahk.vercel.app",
  resumeUrl: "https://drive.google.com/file/d/1tFU-wifLQQId0RkihEEINWz6spVwfUKy/view?usp=sharing",

  aboutMeHighlights: [
    {
      title: "Security-First",
      description: "Building robust foundations in network security, threat analysis, and penetration testing.",
      icon: "ShieldAlert"
    },
    {
      title: "The AI Connection",
      description: "Exploring how AI can detect threats, analyze patterns, and predict breaches.",
      icon: "BrainCircuit"
    },
    {
      title: "Innovation Focus",
      description: "Bridging software and hardware with patents like the Smart IoT Cookware System.",
      icon: "Lightbulb"
    },
    {
      title: "Continuous Growth",
      description: "Committed to evolving with the threat landscape through ongoing industry certifications.",
      icon: "TrendingUp"
    }
  ],

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
      highlights: [
        { text: "Specialization in Cybersecurity", icon: "Shield" },
        { text: "Core CS fundamentals & practical labs", icon: "TerminalSquare" }
      ]
    },
    {
      school: "Kendriya Vidyalaya Keltron Nagar",
      degree: "Secondary (X) | Senior Secondary (XII)",
      start: "2021",
      end: "2023",
      highlights: []
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
      description: "Developed practical skills in Generative AI guardrails by mastering governance frameworks to secure model integration.",
      highlights: [
        { text: "Mastered governance frameworks for secure model integration", icon: "Building2" },
        { text: "Implemented risk strategies for global AI safety compliance", icon: "Globe" },
        { text: "Applied input filtering and sanitization for secure agents", icon: "Lock" }
      ]
    },
    {
      company: "Google Kaggle",
      link: "https://www.kaggle.com/",
      badges: ["Completed"],
      title: "AI Agents Intensive Training",
      start: "Nov 2025",
      end: "Nov 2025",
      description: "Acquired expertise in agentic architecture (RAG, orchestration, tool-use) through Google-led labs.",
      highlights: [
        { text: "Built and deployed AI agents with orchestration & memory", icon: "Cpu" },
        { text: "Mastered RAG, tool-use, and agent evaluation", icon: "Wrench" },
        { text: "Deployed functional workflow earning Kaggle achievement", icon: "Award" }
      ]
    },
    {
      company: "Google Coursera",
      link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      badges: ["In Progress"],
      title: "Google Cybersecurity Professional Certificate",
      start: "Oct 2025",
      end: "Present",
      description: "Mastering threat detection and incident response by conducting hands-on labs with Linux.",
      highlights: [
        { text: "Conducting hands-on labs with Linux environments", icon: "Terminal" },
        { text: "Analyzing patterns to identify vulnerabilities", icon: "ScanSearch" },
        { text: "Mastering threat detection and incident response", icon: "Siren" }
      ]
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

  publications: [
    {
      title: "Smart IoT Cookware System",
      description: "Architected an IoT induction system using a 10×10 electromagnet grid for pixel-level thermal control.",
      publisher: "Patent Application No. 202511048523 — Patent Pending",
      date: "Filed: May 2025",
      status: "Patent Pending",
      websiteUrl: "",
      resourceUrl: "",
      citation: "Patent Application No. 202511048523",
      tags: ["IoT", "Smart Home", "Automation", "Patent"],
      showLinks: false,
      highlights: [
        { text: "10×10 electromagnet grid for pixel-level thermal control", icon: "Grid3X3" },
        { text: "Event-driven logic processing real-time infrared data", icon: "Cpu" },
        { text: "Reduces theoretical energy waste by 40%", icon: "Leaf" },
        { text: "Hardware fail-safes trigger cutoff at 250°C", icon: "ShieldAlert" }
      ]
    },
    {
      title: "Bioreceptive Concrete Panels for Indian Climates",
      description: "Research manuscript focused on formulating concrete panels optimized for warm-humid conditions and monsoon variability in India.",
      publisher: "Target: Materials/Sustainable Built Environment",
      date: "2025",
      status: "In Progress",
      websiteUrl: "",
      resourceUrl: "",
      citation: "Manuscript in preparation - Prototyping next",
      tags: ["Sustainable Materials", "Bioreceptive Design", "Climate Adaptation", "Civil Engineering"],
      showLinks: false,
      highlights: [
        { text: "Optimized for warm-humid conditions & monsoon variability", icon: "CloudRain" },
        { text: "Validated design assumptions via literature review", icon: "BookOpenCheck" },
        { text: "Lab-scale formulation for porosity and moisture retention", icon: "Droplets" }
      ]
    }
  ],

  achievements: [
    {
      title: "NEP SAARTHI (National Education Policy Student Ambassador)",
      date: "May 2026",
      description: "Selected as an official UGC NEP SAARTHI through university-level screening, representing the institution under NEP.",
      tags: ["NEP 2020", "UGC", "Leadership", "Ambassador"],
      highlights: [
        { text: "Representing the institution under NEP 2020", icon: "Award" },
        { text: "Supporting student engagement & awareness initiatives", icon: "Users" }
      ]
    },
    {
      title: "Certified in AI Security and Governance",
      date: "January 2026",
      description: "Successfully completed securiti.ai's AI Security and Governance certification.",
      tags: ["AI", "Security", "Governance"],
      link: { label: "View Certificate", href: "https://www.kaggle.com/" },
      highlights: [
        { text: "Covered AI security fundamentals & governance frameworks", icon: "ShieldCheck" },
        { text: "Mastered responsible AI practices", icon: "Scale" }
      ]
    },
    {
      title: "Completed AI Agents Intensive Training",
      date: "November 2025",
      description: "Successfully completed Google's AI Agents Intensive Training, a rigorous 5-day program.",
      tags: ["AI", "Google", "Training", "Kaggle"],
      link: { label: "View on Kaggle", href: "https://www.kaggle.com/" },
      highlights: [
        { text: "5-day rigorous program led by ML researchers", icon: "GraduationCap" },
        { text: "Earned Kaggle badge for capstone project", icon: "Medal" }
      ]
    },
    {
      title: "Filed Patent for Smart Cooking System",
      date: "May 2025",
      description: "Filed patent application for an innovative IoT-assisted cooking workflow system.",
      tags: ["Patent", "IoT", "Innovation"],
      highlights: [
        { text: "IoT-assisted cooking workflow system", icon: "ChefHat" },
        { text: "Safety mechanisms & timing control", icon: "Timer" }
      ]
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
