import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { BlogPost } from "@/components/blog-card";

export const RESUME_DATA = {
  name: "Anugrah K",
  initials: "AK",
  location: "Punjab, India",
  about: "Cybersecurity Student & AI Enthusiast",
  summary:
    "Cybersecurity student with a passion for AI applications in security. Focused on web app security, penetration testing, and building AI-powered tools. Currently pursuing B.Tech in Computer Science & Engineering (Cybersecurity). Patent holder (Pending) in IoT automation with deep expertise in building secure AI agents, RAG systems, and exploring the intersection of Generative AI and digital security, AI agents, and research in sustainable technology.",
  // avatarUrl: "https://anugrah.com/anugrah.jpg",
  avatarUrl: "/anugrah.webp",
  personalWebsiteUrl: "https://anugrahk.vercel.app",
  resumeUrl: "/Anugrah_Main_CV.pdf",
  extendedBio: `
  
## My Journey in Cybersecurity and AI

My interest in cybersecurity began when I realized how critical digital security is in our increasingly connected world. As I progressed through my B.Tech in Computer Science & Engineering with a specialization in Cybersecurity, I found myself naturally drawn to the intersection of security and artificial intelligence.

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
        "Formalized expertise in Generative AI guardrails by mastering governance frameworks to secure model integration. Implemented risk strategies ensuring compliance with global AI safety laws. Applied safety measures (input filtering, sanitization) for secure agents.",
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
    "Languages: Python, C/C++, Java, SQL, HTML, CSS, JavaScript",
    "Security Tools: Burp Suite, Wireshark, Nmap, Metasploitable",
    "Frameworks & Platforms: Linux, Git, VMWare/VirtualBox, VS Code, Flask, FastAPI",
    "AI & GenAI: Prompt Engineering, LLM Integration (Gemini API), AI-Assisted Development, AI Safety & Guardrails",
    "Core Areas: Web App Security, Network Security, Penetration Testing, Research & Development",
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
      name: "Kortex-CLI",
      html_url: "https://github.com/anugrahk21/Kortex-CLI",
      description: "AI-powered CLI tool that translates natural language into Linux shell commands using Google Gemini.",
      topics: ["ai-cli", "python", "gemini-api", "shell-commands"],
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      name: "Cyber-Projects",
      html_url: "https://github.com/anugrahk21/Cyber-Projects",
      description: "Python tool for advanced password strength analysis with 0-100 point scoring system. Features secure password generation, entropy calculation, and simulated breach detection.",
      topics: ["cybersecurity", "python", "password-security", "cryptography"],
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
