export const en = {
  // Navigation & UI
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
  language: 'Language',
  
  // Hero Section
  hero: {
    badge: 'Available for Projects',
    headline: 'I build software that makes a real impact in production — simple, useful, and people-focused.',
    subline: 'From internal tools to AI systems, I focus on delivering practical solutions that cut errors, automate tasks, and help teams work more efficiently.',
    scrollHint: 'Scroll to explore my journey',
    
    proofs: {
      martifer: {
        text: 'Built internal enterprise tools at Martifer supporting 1,500+ employees — APIs, SAP integrations, SharePoint and Power Apps automations, etc.',
        tooltip: 'Supported 1500+ employees with enterprise tools & automations'
      },
      events: {
        text: 'Designed and shipped an event management platform that benefited the entire university community with inventory, orders, approvals and reporting.',
        tooltip: '1000+ users relying on event management platforms I developed'
      },
      ai: {
        text: 'Developed a pedestrian detection project to prevent autonomous vehicles from colliding with pedestrians using YOLO and OpenCV.',
        tooltip: 'Top-graded AI project to prevent autonomous vehicles collision with pedestrians'
      },
      tiktok: {
        text: 'Built an automated content pipeline using AI that scaled a TikTok account to 10k+ followers.',
        tooltip: 'Automated content pipeline that grew TikTok account to 10k+ followers'
      }
    },
    
    cta: {
      meeting: 'Send me an email',
      resume: 'Download PDF résumé'
    }
  },
  
  // Timeline
  timeline: {
    workExperience: 'Work Experience',
    projects: 'Projects',
    education: 'Education',
    present: 'Present',
    
    // Generic terms
    technologies: 'Technologies',
    achievements: 'Key Achievements',
    features: 'Key Features',
    responsibilities: 'Responsibilities',
    duration: 'Duration',
    company: 'Company',
    position: 'Position',
    location: 'Location',
    description: 'Description',
  },
  
  // Work Experience
  work: {
    martiferCurrent: {
      title: 'Software Engineer',
      company: 'Martifer Group (via UASK)',
      period: 'Since 2024',
      description: 'Since 2024, I\'ve been working at Martifer Group through UASK, where I develop and support internal enterprise applications for a company of more than 1,500 employees. My work includes building APIs, automation tools, and reporting utilities that streamline daily operations and improve system reliability. I also integrate with SAP, SharePoint, and Power Apps to reduce manual processes and make workflows more efficient.'
    }
  },
  
  // Projects
  projects: {
    tiktokAutomation: {
      title: 'TikTok Automation - BucketPulls',
      period: 'Side Project',
      description: 'In parallel, I created a side project called BucketPulls on TikTok, which grew to over 10,000 followers using fully automated and AI-driven tools. I built a pipeline combining Whisper for audio-to-subtitles, Taknet for processing, FFmpeg for video editing, and AI to generate titles. With this system, I can create and publish new content with just two clicks — everything else is handled automatically.'
    },
    utadPlatform: {
      title: 'Event Management Platform',
      company: 'Academic Association of UTAD',
      period: '2024',
      description: 'In 2024, I collaborated with the Academic Association of UTAD to design and deliver a stock and order management platform for events. The platform replaced manual workflows with real-time tracking, approvals, role-based access, and reporting. I also integrated a Telegram bot with AI-powered queries to help staff retrieve information instantly during events, and improved the security and performance of the organization\'s website.'
    },
    pedestrianDetection: {
      title: 'AI-Powered Pedestrian Detection',
      period: 'University Project',
      description: 'As part of my degree, I developed an AI-based pedestrian detection system for the A-Mover autonomous vehicle project, aimed at preventing collisions between the vehicle and pedestrians to keep streets safe. The system was built with YOLO and OpenCV, covering dataset preparation, model training, evaluation, and basic collision prediction logic. The project achieved strong results in real-world testing and was awarded one of the top grades in the course.'
    }
  },
  
  // Education
  education: {
    utad: {
      degree: 'Computer Science Engineering',
      institution: 'UTAD',
      period: '2021–2024',
      description: 'I studied Computer Science Engineering at UTAD, where I gained a solid foundation in software engineering, databases, web development, and machine learning. During this time, I also worked on various projects:',
      projects: [
        'A 3D checkers game built with Three.js, including a real-time animated demo.',
        'Messaging protocols with RabbitMQ to better understand TCP/UDP communications.',
        'A simple social network project to apply database and authentication concepts.',
        'Multiple web applications combining backend, frontend, and database design.'
      ]
    },
    earlyProjects: {
      title: 'Early Projects',
      period: 'Before University',
      description: 'Before university, I enjoyed experimenting with code. One of my first projects was an Arduino-controlled sliding gate, which sparked my interest in combining hardware and software to solve practical problems.'
    }
  },
  
  // Common phrases
  common: {
    learnMore: 'Learn More',
    viewProject: 'View Project',
    contact: 'Contact',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    portfolio: 'Portfolio',
    home: 'Home',
  }
};

export type TranslationKeys = typeof en;
