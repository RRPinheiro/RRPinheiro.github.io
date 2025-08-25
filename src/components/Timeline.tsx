import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { availableLanguages, languageNames, type Language } from '../translations';

// We'll load anime.js dynamically to avoid import issues
declare const anime: any;

// Hero Section Component
const HeroSection = ({ t, isDarkMode }: { t: (key: string) => any; isDarkMode: boolean }) => {
  useEffect(() => {
    // Add periodic jump hint animation with random intervals (2s - 6s)
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const animationDuration = 1000;
    const minDelay = 2000; // 2s
    const maxDelay = 20000; // 20s
    let animationRuns = 0;

    const isMostlyVisible = (threshold = 0.8) => {
      const rect = heroSection.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, vh);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      if (rect.height <= 0) return false;
      return (visibleHeight / rect.height) >= threshold;
    };

    const scheduleJump = () => {
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      setTimeout(() => {
        if (isMostlyVisible(0.8) && animationRuns < 3) { // Limit to 3 animations per page load
          heroSection.classList.add('jump-hint');
          setTimeout(() => {
            heroSection.classList.remove('jump-hint');
            animationRuns++;
            scheduleJump();
          }, animationDuration);
        } else {
          scheduleJump();
        }
      }, delay);
    };

    scheduleJump();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            {t('hero.headline') || 'I build practical software that scales — from enterprise APIs to AI projects in production.'}
          </h1>
          
          <p className="hero-subline">
            {t('hero.subline') || 'From enterprise apps to AI-powered bots, I deliver tools that reduce downtime, automate workflows, and improve decision-making.'}
          </p>

          <div className="proof-stats">
            <div className="proof-item" title={t('hero.proofs.martifer.tooltip') || 'Supported 1500+ employees with enterprise tools & automations'}>
              <span className="proof-icon">🏢</span>
              <span className="proof-text">{t('hero.proofs.martifer.text') || 'Martifer Enterprise Solutions'}</span>
              <span className="proof-number">1500+</span>
            </div>
            
            <div className="proof-item" title={t('hero.proofs.events.tooltip') || '1000+ users relying on event management platforms I developed'}>
              <span className="proof-icon">⚡</span>
              <span className="proof-text">{t('hero.proofs.events.text') || 'Event Platform Users'}</span>
              <span className="proof-number">1000+</span>
            </div>
            
            <div className="proof-item" title={t('hero.proofs.ai.tooltip') || 'Top-graded AI project to prevent autonomous vehicles collision with pedestrians'}>
              <span className="proof-icon">🧠</span>
              <span className="proof-text">{t('hero.proofs.ai.text') || 'AI Safety Project (YOLO, OpenCV)'}</span>
              <span className="proof-badge">Top Grade</span>
            </div>
            
            <div className="proof-item" title={t('hero.proofs.tiktok.tooltip') || 'Automated content pipeline that grew TikTok account to 10k+ followers'}>
              <span className="proof-icon">🔄</span>
              <span className="proof-text">{t('hero.proofs.tiktok.text') || 'AI Content Automation'}</span>
              <span className="proof-number">10k+</span>
            </div>
          </div>

          <div className="hero-cta">
            <a
              className="cta-primary"
              href="mailto:ricardopinheiro954@gmail.com?subject=Portfolio%20Contact&body=Hi%20Ricardo,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss..."
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span className="cta-icon">📧</span>
              {t('hero.cta.meeting') || 'Send me an email'}
            </a>
            
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-avatar">
            <div className="avatar-ring"></div>
            <div className="avatar-content">
              <img src="/a.jpg" alt="Ricardo" className="avatar-image" />
            </div>
          </div>
          
          <div className="floating-tech-icons">
            <div className="tech-icon" style={{ top: '10%', left: '70%' }}>⚛️</div>
            <div className="tech-icon" style={{ top: '30%', left: '85%' }}>🐍</div>
            <div className="tech-icon" style={{ top: '70%', left: '80%' }}>🤖</div>
            <div className="tech-icon" style={{ top: '60%', left: '15%' }}>⚡</div>
            <div className="tech-icon" style={{ top: '20%', left: '10%' }}>🚀</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>{t('hero.scrollHint') || 'Scroll to explore my journey'}</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

// Current Work at Martifer Component
const MartiferWorkCard = ({ t }: { t: (key: string) => any }) => (
  <div className="timeline-card">
    <h3>{t('work.martiferCurrent.period')} · {t('work.martiferCurrent.title')}</h3>
    <h4>{t('work.martiferCurrent.company')}</h4>
    <p>{t('work.martiferCurrent.description')}</p>
    <div className="tech-stack">
      <span className="tech-tag">APIs</span>
      <span className="tech-tag">SAP Integration</span>
      <span className="tech-tag">SharePoint</span>
      <span className="tech-tag">Power Apps</span>
      <span className="tech-tag">Automation</span>
    </div>
  </div>
);

// TikTok Automation Project Component
const TikTokProjectCard = ({ t }: { t: (key: string) => any }) => (
  <div className="timeline-card">
    <h3>{t('projects.tiktokAutomation.period')} · {t('projects.tiktokAutomation.title')}</h3>
    <h4>10,000+ Followers</h4>
    <p>{t('projects.tiktokAutomation.description')}</p>
    <div className="tech-stack">
      <span className="tech-tag">Whisper AI</span>
      <span className="tech-tag">Taknet</span>
      <span className="tech-tag">FFmpeg</span>
      <span className="tech-tag">AI Content Generation</span>
      <span className="tech-tag">Automation</span>
    </div>
    <div className="project-actions">
      <a
        href="https://www.tiktok.com/@bucketpulls"
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        <span className="button-icon">🎵</span>
        Visit TikTok Account
      </a>
    </div>
  </div>
);

// UTAD Platform Component
const UTADPlatformCard = ({ t }: { t: (key: string) => any }) => (
  <div className="timeline-card">
    <h3>{t('projects.utadPlatform.period')} · {t('projects.utadPlatform.title')}</h3>
    <h4>{t('projects.utadPlatform.company')}</h4>
    <p>{t('projects.utadPlatform.description')}</p>
    <div className="tech-stack">
      <span className="tech-tag">Real-time Tracking</span>
      <span className="tech-tag">Telegram Bot</span>
      <span className="tech-tag">AI Queries</span>
      <span className="tech-tag">Role-based Access</span>
      <span className="tech-tag">Reporting</span>
    </div>
    <div className="project-actions">
      <a
        href="https://www.aautad.pt"
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        <span className="button-icon">🎓</span>
        Visit AAUTAD Website
      </a>
    </div>
  </div>
);

// Pedestrian Detection Component
const PedestrianDetectionCard = ({ t }: { t: (key: string) => any }) => (
  <div className="timeline-card">
    <h3>{t('projects.pedestrianDetection.period')} · {t('projects.pedestrianDetection.title')}</h3>
    <h4>Top Grade Achievement</h4>
    <p>{t('projects.pedestrianDetection.description')}</p>
    <div className="tech-stack">
      <span className="tech-tag">YOLO</span>
      <span className="tech-tag">OpenCV</span>
      <span className="tech-tag">AI/ML</span>
      <span className="tech-tag">Computer Vision</span>
    </div>
    <div className="project-actions">
      <a
        href="https://github.com/RRPinheiro/PedestrianAccidentPrevention"
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        <span className="button-icon">🔗</span>
        View on GitHub
      </a>
    </div>
  </div>
);

// University Education Component
const UniversityEducationCard = ({ t }: { t: (key: string) => any }) => (
  <div className="timeline-card">
    <h3>{t('education.utad.period')} · {t('education.utad.degree')}</h3>
    <h4>{t('education.utad.institution')}</h4>
    <p>{t('education.utad.description')}</p>
    <div className="project-features">
      <ul>
        {t('education.utad.projects').map((project: string, index: number) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
    <div className="tech-stack">
      <span className="tech-tag">Three.js</span>
      <span className="tech-tag">RabbitMQ</span>
      <span className="tech-tag">Database Design</span>
      <span className="tech-tag">Web Development</span>
      <span className="tech-tag">Machine Learning</span>
    </div>
  </div>
);

// Early Projects Component
const EarlyProjectsCard = ({ t }: { t: (key: string) => any }) => (
  <div className="timeline-card">
    <h3>{t('education.earlyProjects.period')} · {t('education.earlyProjects.title')}</h3>
    <h4>Hardware + Software</h4>
    <p>{t('education.earlyProjects.description')}</p>
    <div className="tech-stack">
      <span className="tech-tag">Arduino</span>
      <span className="tech-tag">Hardware Control</span>
      <span className="tech-tag">Automation</span>
      <span className="tech-tag">Problem Solving</span>
    </div>
  </div>
);

const Timeline = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const timelineRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = React.useState(true); // Default to dark mode
  
  // Current section state for navigation dots
  const [currentSection, setCurrentSection] = React.useState(-1); // -1 for hero, 0+ for timeline items

  // Timeline configuration with components and high-signal UI
  const timelineConfig: any[] = [
    {
      id: 0,
      side: 'right', // Content on right, icons on left
      component: () => <MartiferWorkCard t={t} />,
      backgroundImage: '/MartiferUask.png',
      icons: [],
      achievements: [
],
      endorsements: [
      ],
      techInsights: [
      ]
    },
    {
      id: 1,
      side: 'left', // Content on left, icons on right
      component: () => <TikTokProjectCard t={t} />,
      backgroundImage: '/tiktok.png',
      icons: [
       
      ],
      achievements: [
        ],
      endorsements: [],
      techInsights: [
      ]
    },
    {
      id: 2,
      side: 'right',
      component: () => <UTADPlatformCard t={t} />,
      backgroundImage: '/aautad.png',
      icons: [
],
      achievements: [
      ],
      endorsements: [

      ],
      techInsights: [
      ]
    },
    {
      id: 3,
      side: 'left',
      component: () => <PedestrianDetectionCard t={t} />,
      backgroundImage: '/amover.png',
      icons: [
       ],
      achievements: [
       ],
      endorsements: [],
      techInsights: [
       
      ]
    },
    {
      id: 4,
      side: 'right',
      component: () => <UniversityEducationCard t={t} />,
      icons: [
        { name: 'Enterprise', image: '/icons/output.webp', color: '#60a5fa', width: 400, height: 200, randomPositioning: false, position: { top: 35, left: -40 }, shape: 'square', padding: 0 },
        ],
      achievements: [
      ],
      endorsements: [],
      techInsights: [

      ]
    },
    {
      id: 5,
      side: 'left',
      component: () => <EarlyProjectsCard t={t} />,
      icons: [
       ],
      achievements: [
      ],
      endorsements: [],
      techInsights: [
        
      ]
    }
  ];

  // Background images for each timeline item
  const backgrounds = timelineConfig.map(item => item.backgroundImage);

  // Pre-generate icon positions to avoid hydration mismatch
  const iconPositions = useRef<{ top: number; left: number }[][]>([]);
  const [iconsGenerated, setIconsGenerated] = React.useState(false);
  const animatedItems = useRef<Set<number>>(new Set());
  
  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document and save preference
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  useEffect(() => {
    // Generate positions only on client side after mount
    if (iconPositions.current.length === 0) {
      iconPositions.current = timelineConfig.map((config: any, configIndex: number) => 
        config.icons.map((icon: any, iconIndex: number) => {
          // If icon has randomPositioning false and position is provided, use it
          if (!icon.randomPositioning && 'position' in icon && icon.position) {
            return icon.position;
          }
          
          // Otherwise generate random positions with overlap prevention
          let position;
          let attempts = 0;
          const maxAttempts = 50;
          
          do {
            position = {
              top: Math.random() * 60 + 10, // 10% to 70% from top
              left: Math.random() * 60 + 10, // 10% to 70% from left
            };
            attempts++;
          } while (attempts < maxAttempts && hasOverlap(position, iconPositions.current[configIndex], icon.width || 40, icon.height || 40));
          
          return position;
        })
      );
      setIconsGenerated(true);
    }
  }, []);

  // Function to check if a position overlaps with existing positions
  const hasOverlap = (newPos: {top: number, left: number}, existingPositions: {top: number, left: number}[], width: number, height: number) => {
    if (!existingPositions) return false;
    
    const buffer = 15; // Minimum distance between icons
    
    return existingPositions.some(pos => {
      if (!pos) return false;
      
      const distanceX = Math.abs(newPos.left - pos.left);
      const distanceY = Math.abs(newPos.top - pos.top);
      const minDistance = Math.max(width, height) / 2 + buffer;
      
      return distanceX < minDistance && distanceY < minDistance;
    });
  };

  useEffect(() => {
    // Set gradient background based on theme using monochrome harmony palette
    const lightGradient = 'linear-gradient(135deg, #E8EDDF, #CFDBD5)';
    const darkGradient = 'linear-gradient(135deg, #242423, #333533)';
    
    document.body.style.background = isDarkMode ? darkGradient : lightGradient;
    document.body.style.backgroundAttachment = 'fixed';
    
    // Load anime.js if not already loaded
    if (typeof anime === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.onload = () => {
        initializeAnimations();
      };
      document.head.appendChild(script);
    } else {
      initializeAnimations();
    }

    // Smooth wheel-based navigation
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) { // Scrolling down
        const currentIndex = getCurrentItemIndex();
        const nextIndex = currentIndex + 1;
        
        if (nextIndex < itemsRef.current.length) {
          e.preventDefault();
          itemsRef.current[nextIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      } else if (e.deltaY < 0) { // Scrolling up
        const currentIndex = getCurrentItemIndex();
        const prevIndex = currentIndex - 1;
        
        if (prevIndex >= 0) {
          e.preventDefault();
          itemsRef.current[prevIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        } else if (currentIndex === 0) {
          // At first timeline item, scroll to hero section
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    };

    // Update background based on current timeline item
    const updateBackground = () => {
      const currentIndex = getCurrentItemIndex();
      
      if (backgroundRef.current) {
        if (currentIndex >= 0 && currentIndex < backgrounds.length) {
          // Show background image for current timeline item
          backgroundRef.current.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
          backgroundRef.current.style.opacity = '1';
        } else {
          // Hide background when not in timeline (e.g., hero section)
          backgroundRef.current.style.opacity = '0';
        }
      }
    };

    // Check background on scroll and update current section
    const handleScroll = () => {
      updateBackground();
      
      // Update current section for navigation dots
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        
        // Check if hero is in view
        if (heroRect.top <= viewportCenter && heroRect.bottom >= viewportCenter) {
          setCurrentSection(-1);
        } else {
          // Check timeline items
          const currentIndex = getCurrentItemIndex();
          if (currentIndex !== -1) {
            setCurrentSection(currentIndex);
          }
        }
      }
    };

    // Get currently visible timeline item. Returns -1 if none are close enough
    const getCurrentItemIndex = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDistance = Infinity;

      itemsRef.current.forEach((item, index) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      // If the closest item is still far from the viewport center, treat it as not visible
      const visibilityThreshold = window.innerHeight * 0.4; // 40% of viewport
      if (closestDistance === Infinity || closestDistance > visibilityThreshold) return -1;

      return closestIndex;
    };

    // Add event listeners for smooth navigation
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });

    function initializeAnimations() {
      // Function to animate timeline item content and icons (one time only)
      const animateTimelineItem = (itemIndex: number) => {
        if (animatedItems.current.has(itemIndex)) return; // Already animated
        
        animatedItems.current.add(itemIndex);
        const content = contentsRef.current[itemIndex];
        const item = itemsRef.current[itemIndex];
        
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Animate main content with subtle entrance
        if (content) {
          if (prefersReducedMotion) {
            // Just fade in for reduced motion
            anime({
              targets: content,
              opacity: [0, 1],
              duration: 300,
              easing: 'linear'
            });
          } else {
            // Subtle slide and fade
            anime({
              targets: content,
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 600,
              easing: 'easeOutCubic'
            });
          }
        }

        // Animate floating icons and high-signal UI elements
        if (item) {
          setTimeout(() => {
            const icons = item.querySelectorAll('.floating-icon');
            const achievements = item.querySelectorAll('.floating-achievement');
            const endorsements = item.querySelectorAll('.floating-endorsement');
            const techChips = item.querySelectorAll('.floating-tech-chip');
            
            // Animate icons
            if (icons.length > 0) {
              // Set initial state
              anime.set(icons, {
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.8
              });

              // Animate entrance
              anime({
                targets: icons,
                scale: prefersReducedMotion ? [1, 1] : [0.8, 1],
                opacity: [0, 1],
                duration: prefersReducedMotion ? 200 : 400,
                delay: prefersReducedMotion ? 0 : anime.stagger(100, { start: 200 }),
                easing: prefersReducedMotion ? 'linear' : 'easeOutCubic',
                complete: () => {
                  // Only add floating animation if motion is not reduced
                  if (!prefersReducedMotion) {
                    anime({
                      targets: icons,
                      translateY: [-2, 2],
                      duration: 3000,
                      delay: anime.stagger(200),
                      direction: 'alternate',
                      loop: false,
                      easing: 'easeInOutSine'
                    });
                  }
                }
              });
            }

            // Animate achievement badges
            if (achievements.length > 0) {
              anime.set(achievements, {
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.8
              });

              anime({
                targets: achievements,
                scale: [prefersReducedMotion ? 1 : 0.8, 1],
                opacity: [0, 1],
                duration: prefersReducedMotion ? 200 : 500,
                delay: prefersReducedMotion ? 0 : anime.stagger(150, { start: 400 }),
                easing: prefersReducedMotion ? 'linear' : 'easeOutBack'
              });
            }

            // Animate endorsements
            if (endorsements.length > 0) {
              anime.set(endorsements, {
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.8
              });

              anime({
                targets: endorsements,
                scale: [prefersReducedMotion ? 1 : 0.8, 1],
                opacity: [0, 1],
                duration: prefersReducedMotion ? 200 : 600,
                delay: prefersReducedMotion ? 0 : anime.stagger(200, { start: 600 }),
                easing: prefersReducedMotion ? 'linear' : 'easeOutExpo'
              });
            }

            // Animate tech chips
            if (techChips.length > 0) {
              anime.set(techChips, {
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.8
              });

              anime({
                targets: techChips,
                scale: [prefersReducedMotion ? 1 : 0.8, 1],
                opacity: [0, 1],
                duration: prefersReducedMotion ? 200 : 450,
                delay: prefersReducedMotion ? 0 : anime.stagger(120, { start: 300 }),
                easing: prefersReducedMotion ? 'linear' : 'easeOutCubic'
              });
            }
          }, prefersReducedMotion ? 100 : 300);
        }
      };

      // Intersection observer only for background updates and one-time animation triggers
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const item = entry.target as HTMLElement;
              const itemIndex = itemsRef.current.indexOf(item as HTMLDivElement);
              
              if (itemIndex !== -1) {
                // Update background when item becomes visible
                updateBackground();
                
                // Trigger one-time animation if not already animated
                animateTimelineItem(itemIndex);
                
                // Add active class for styling
                item.classList.add('active');
              }
            } else {
              // Remove active class when not intersecting
              const item = entry.target as HTMLElement;
              item.classList.remove('active');
            }
          });
        },
        { threshold: 0.3 }
      );

      // Observe all timeline items
      itemsRef.current.forEach((item) => {
        if (item) observer.observe(item);
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDarkMode, currentLanguage]);

  // Generate random position for floating icons
  const getIconPosition = (configIndex: number, iconIndex: number) => {
    if (iconPositions.current[configIndex] && iconPositions.current[configIndex][iconIndex]) {
      const pos = iconPositions.current[configIndex][iconIndex];
      console.log(`Icon position for ${configIndex}-${iconIndex}:`, pos);
      return pos;
    }
    console.log(`Using fallback position for ${configIndex}-${iconIndex}`);
    return { top: 50, left: 50 }; // fallback position
  };

  const addToItemRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const addToContentRefs = (el: HTMLDivElement | null) => {
    if (el && !contentsRef.current.includes(el)) {
      contentsRef.current.push(el);
    }
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionIndex: number) => {
    if (sectionIndex === -1) {
      // Scroll to hero section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (sectionIndex >= 0 && sectionIndex < itemsRef.current.length) {
      // Scroll to timeline item
      itemsRef.current[sectionIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection t={t} isDarkMode={isDarkMode} />

      {/* Language Selector */}
      <div className="language-selector">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`language-button ${currentLanguage === lang ? 'active' : ''}`}
            aria-label={`Switch to ${languageNames[lang]}`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="dark-mode-toggle"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Section Dots Navigation */}
      <div className="section-dots-nav">
        <button
          onClick={() => scrollToSection(-1)}
          className={`section-dot ${currentSection === -1 ? 'active' : ''}`}
          aria-label="Go to hero section"
          title="Hero"
        />
        {timelineConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`section-dot ${currentSection === index ? 'active' : ''}`}
            aria-label={`Go to section ${index + 1}`}
            title={`Section ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated background overlay */}
      <div 
        ref={backgroundRef}
        className="timeline-background"
      ></div>
      
      <div className="timeline-container">
        <section className="timeline" ref={timelineRef}>
          {/* Central vertical line */}
          <div className="timeline-line"></div>
          
          {timelineConfig.map((item, index) => (
            <div
              key={item.id}
              ref={addToItemRefs}
              className={`timeline-item ${item.side}`}
              data-color={index === 0 ? "#60a5fa" : "#34d399"}
            >
              {/* Timeline dot */}
              <div className="timeline-dot"></div>
              
              {/* Content container */}
              <div className="timeline-content">
                <div className="content" ref={addToContentRefs}>
                  <item.component />
                </div>
              </div>

              {/* Floating Icons Area - Enhanced with High-Signal UI */}
              <div className="floating-icons-area">
                {/* Original Icons */}
                {iconsGenerated && item.icons.map((icon: any, iconIndex: number) => {
                  const position = getIconPosition(index, iconIndex as number);
                  const iconWidth = icon.width || 40;
                  const iconHeight = icon.height || 40;
                  const isSquare = icon.shape === 'square';
                  const iconPadding = icon.padding || 8; // Default padding of 8px
                  const src = String(icon.image || '').toLowerCase();
                  // Detect .mp4 and .webm (handle optional query strings). Also allow explicit type flag.
                  const isVideo = /\.(mp4|webm)(\?.*)?$/i.test(src) || ('type' in icon && (icon as any).type === 'video');

                  return (
                    <div
                      key={`icon-${iconIndex}`}
                      className={`floating-icon ${isSquare ? 'square' : 'round'}`}
                      style={{
                        top: `${position.top}%`,
                        left: `${position.left}%`,
                        width: `${iconWidth}px`,
                        height: `${iconHeight}px`,
                        borderColor: icon.color,
                        padding: `${iconPadding}px`
                      }}
                    >
                      {isVideo ? (
                        <video
                          src={icon.image}
                          autoPlay
                          muted
                          loop={true}
                          playsInline
                          aria-label={icon.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            objectFit: isSquare ? 'cover' : 'contain'
                          }}
                          onError={() => console.error(`Video failed to load: ${icon.image}`)}
                        />
                      ) : (
                        <img
                          src={icon.image}
                          alt={icon.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                          onLoad={() => console.log(`Icon loaded: ${icon.name}`)}
                          onError={() => console.error(`Icon failed to load: ${icon.image}`)}
                        />
                      )}
                    </div>
                  );
                })}

                {/* Achievement Badges */}
                {item.achievements?.map((achievement: any, achIndex: number) => (
                  <div
                    key={`achievement-${achIndex}`}
                    className="floating-achievement"
                    style={{
                      top: `${achievement.position.top}%`,
                      left: `${achievement.position.left}%`,
                      backgroundColor: achievement.color
                    }}
                  >
                    <div className="achievement-content">
                      <div className="achievement-icon">🏆</div>
                      <div className="achievement-text">{achievement.text}</div>
                    </div>
                  </div>
                ))}

                {/* Endorsements */}
                {item.endorsements?.map((endorsement: any, endIndex: number) => (
                  <div
                    key={`endorsement-${endIndex}`}
                    className="floating-endorsement"
                    style={{
                      top: `${endorsement.position.top}%`,
                      left: `${endorsement.position.left}%`
                    }}
                  >
                    <div className="endorsement-content">
                      <div className="endorsement-quote">"{endorsement.quote}"</div>
                      <div className="endorsement-author">- {endorsement.author}</div>
                    </div>
                  </div>
                ))}

                {/* Tech Insights */}
                {item.techInsights?.map((tech: any, techIndex: number) => (
                  <div
                    key={`tech-${techIndex}`}
                    className="floating-tech-chip"
                    style={{
                      top: `${tech.position.top}%`,
                      left: `${tech.position.left}%`,
                      borderColor: tech.color
                    }}
                    title={tech.insight}
                  >
                    <div className="tech-chip-content">
                      <div className="tech-chip-name" style={{ color: tech.color }}>
                        {tech.chip}
                      </div>
                      <div className="tech-chip-tooltip">
                        {tech.insight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <style>{`
        /* Scroll magic - smooth wheel navigation */
        html, body { 
          scroll-behavior: smooth;
        }
        
        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          html, body {
            scroll-behavior: auto !important;
          }
        }

        .timeline-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 1.2s ease-in-out;
          z-index: -1;
          pointer-events: none;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .timeline-container {
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .timeline {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        /* Central vertical line */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          /* Use the warm gradient in dark mode, but a solid dark stroke in light mode for visibility */
          background: ${isDarkMode ?
            'linear-gradient(to bottom, #F5CB5C, #CFDBD5)' :
            'linear-gradient(to bottom, #333533, #333533)'
          };
          transform: translateX(-50%);
          z-index: 2;
          /* Subtle dark glow on light mode, warm glow on dark mode */
          box-shadow: 0 0 10px ${isDarkMode ?
            'rgba(245, 203, 92, 0.4)' :
            'rgba(36, 36, 35, 0.35)'
          };
        }

        /* Timeline items - each occupies full viewport height */
        .timeline-item {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 2rem;
          box-sizing: border-box;
        }

        /* Timeline dot */
        .timeline-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent, #64748b);
          border: 4px solid #ffffff;
          box-shadow: 0 0 0 0 var(--accent, #64748b), 0 0 20px rgba(255, 255, 255, 0.5);
          z-index: 5;
        }

        .timeline-item.active .timeline-dot {
          box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.5);
        }

        /* Content positioning based on side */
        .timeline-content {
          position: relative;
          width: 40%;
          z-index: 2;
        }

        .timeline-item.right .timeline-content {
          margin-left: 60%; /* Content on right side, away from center line */
        }

        .timeline-item.left .timeline-content {
          margin-left: 0;
          margin-right: 60%; /* Content on left side, positioned from left edge */
          width: 40%;
        }

        .content {
          background: ${isDarkMode ? 
            'rgba(51, 53, 51, 0.85)' : 
            'rgba(232, 237, 223, 0.9)'
          };
          border: 1px solid ${isDarkMode ? 
            'rgba(245, 203, 92, 0.3)' : 
            'rgba(36, 36, 35, 0.2)'
          };
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px ${isDarkMode ? 
            'rgba(36, 36, 35, 0.6)' : 
            'rgba(0, 0, 0, 0.15)'
          };
          opacity: 0;
          transform: translateY(60px);
          width: 100%;
        }

        /* Timeline Card Styles */
        .timeline-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.8rem;
          letter-spacing: 0.5px;
          color: ${isDarkMode ? '#E8EDDF' : '#242423'};
          text-shadow: ${isDarkMode ? 
            '0 2px 4px rgba(36, 36, 35, 0.8)' : 
            '0 2px 4px rgba(232, 237, 223, 0.8)'
          };
          font-weight: 600;
        }

        .timeline-card h4 {
          margin: 0 0 1.5rem;
          font-size: 1.2rem;
          color: ${isDarkMode ? '#F5CB5C' : '#333533'};
          text-shadow: ${isDarkMode ? 
            '0 2px 4px rgba(36, 36, 35, 0.8)' : 
            '0 2px 4px rgba(232, 237, 223, 0.8)'
          };
          font-weight: 400;
        }

        .timeline-card p {
          margin: 0 0 1.5rem;
          line-height: 1.6;
          font-size: 1rem;
          color: ${isDarkMode ? '#CFDBD5' : '#242423'};
          text-shadow: ${isDarkMode ? 
            '0 2px 4px rgba(36, 36, 35, 0.8)' : 
            '0 2px 4px rgba(232, 237, 223, 0.8)'
          };
          opacity: 0.95;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: ${isDarkMode ? 
            'rgba(245, 203, 92, 0.2)' : 
            'rgba(51, 53, 51, 0.15)'
          };
          color: ${isDarkMode ? '#E8EDDF' : '#242423'};
          padding: 0.3rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid ${isDarkMode ? 
            'rgba(245, 203, 92, 0.4)' : 
            'rgba(51, 53, 51, 0.3)'
          };
        }

        .project-actions {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid ${isDarkMode ? 
            'rgba(245, 203, 92, 0.2)' : 
            'rgba(51, 53, 51, 0.2)'
          };
        }

        .project-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${isDarkMode ? 
            'rgba(245, 203, 92, 0.15)' : 
            'rgba(51, 53, 51, 0.1)'
          };
          color: ${isDarkMode ? '#E8EDDF' : '#242423'};
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid ${isDarkMode ? 
            'rgba(245, 203, 92, 0.3)' : 
            'rgba(51, 53, 51, 0.2)'
          };
          transition: all 0.3s ease;
        }

        .project-button:hover {
          background: ${isDarkMode ? 
            'rgba(245, 203, 92, 0.25)' : 
            'rgba(51, 53, 51, 0.15)'
          };
          border-color: ${isDarkMode ? 
            'rgba(245, 203, 92, 0.5)' : 
            'rgba(51, 53, 51, 0.4)'
          };
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${isDarkMode ? 
            'rgba(245, 203, 92, 0.2)' : 
            'rgba(36, 36, 35, 0.15)'
          };
        }

        .button-icon {
          font-size: 1rem;
        }

        .achievements ul,
        .project-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievements li,
        .project-features li {
          padding: 0.3rem 0;
          color: ${isDarkMode ? '#CFDBD5' : '#242423'};
          opacity: 0.95;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1rem;
        }

        .achievements li::before,
        .project-features li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: var(--accent, #64748b);
        }

        /* Floating Icons Area */
        .floating-icons-area {
          position: absolute;
          width: 35%;
          height: 60%;
          top: 20%;
          pointer-events: none;
          z-index: 1;
        }

        /* Position icons on opposite side of content */
        .timeline-item.right .floating-icons-area {
          left: 10%; /* Icons on left when content is on right */
        }

        .timeline-item.left .floating-icons-area {
          right: 10%; /* Icons on right when content is on left */
        }

        .floating-icon {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: scale(0);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 10;
          /* Width and height are now set dynamically via inline styles */
        }

        .floating-icon.round {
          border-radius: 50%;
        }

        .floating-icon.square {
          border-radius: 12px; /* Slightly rounded corners for square */
        }

        .floating-icon img {
          display: block;
          /* Sizing is now handled by inline styles with padding control */
        }

        /* High-Signal UI Elements */
        
        /* Achievement Badges */
        .floating-achievement {
          position: absolute;
          background: linear-gradient(135deg, var(--bg-color), rgba(255, 255, 255, 0.1));
          border: 2px solid;
          border-radius: 20px;
          padding: 8px 12px;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: scale(0.8);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          z-index: 12;
          max-width: 140px;
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .floating-achievement:hover {
          transform: scale(0.95);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .achievement-content {
          display: flex;
          align-items: center;
          gap: 6px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .achievement-icon {
          font-size: 0.9rem;
        }

        .achievement-text {
          line-height: 1.2;
        }

        /* Endorsements */
        .floating-endorsement {
          position: absolute;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 12px;
          backdrop-filter: blur(12px);
          opacity: 0;
          transform: scale(0.8);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          z-index: 11;
          max-width: 200px;
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .floating-endorsement:hover {
          transform: scale(0.95);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        .endorsement-content {
          color: white;
          text-align: left;
        }

        .endorsement-quote {
          font-size: 0.7rem;
          line-height: 1.3;
          font-style: italic;
          margin-bottom: 6px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .endorsement-author {
          font-size: 0.6rem;
          opacity: 0.8;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        /* Tech Insights */
        .floating-tech-chip {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid;
          border-radius: 24px;
          padding: 8px 12px;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: scale(0.8);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          z-index: 12;
          max-width: 120px;
          pointer-events: auto;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .floating-tech-chip:hover {
          transform: scale(0.95);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .tech-chip-content {
          color: white;
        }

        .tech-chip-name {
          font-size: 0.7rem;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .tech-chip-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.65rem;
          line-height: 1.3;
          white-space: nowrap;
          max-width: 200px;
          white-space: normal;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 20;
          margin-bottom: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .tech-chip-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: rgba(0, 0, 0, 0.9);
        }

        .floating-tech-chip:hover .tech-chip-tooltip {
          opacity: 1;
        }

        /* Set accent colors */
        .timeline-item[data-color="#60a5fa"] {
          --accent: #60a5fa;
        }

        .timeline-item[data-color="#34d399"] {
          --accent: #34d399;
        }

        @media (max-width: 768px) {
          /* Mobile Timeline Container - Match hero section width */
          .timeline {
            padding: 1rem;
            max-width: 100%;
            margin: 0;
            width: 100%;
          }

          /* Mobile Timeline Line - Left positioned */
          .timeline-line {
            left: 1.5rem;
            width: 3px;
            transform: none;
          }

          /* Mobile Timeline Items - Consistent height and spacing */
          .timeline-item {
            padding: 1.5rem 1rem 1.5rem 0;
            height: auto;
            min-height: 85vh;
            max-height: none;
            flex-direction: row;
            align-items: flex-start;
            padding-top: 2rem;
            /* Remove right margin to eliminate gap */
            margin-right: 0;
            width: 100%;
            box-sizing: border-box;
          }
          
          /* Mobile Timeline Content - Fixed width and positioning */
          .timeline-content {
            width: calc(100vw - 4rem);
            max-width: calc(100vw - 4rem);
            margin-left: 3rem !important;
            margin-right: 0 !important;
            /* Ensure content doesn't overflow */
            padding-right: 1rem;
            box-sizing: border-box;
          }

          /* Override left/right positioning on mobile - all cards same layout */
          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            width: calc(100vw - 4rem);
            max-width: calc(100vw - 4rem);
            margin-left: 3rem !important;
            margin-right: 0 !important;
            padding-right: 1rem;
            box-sizing: border-box;
          }

          /* Mobile Timeline Dots - Left positioned */
          .timeline-dot {
            left: 1.5rem;
            top: 2.5rem;
            transform: translateX(-50%);
            width: 14px;
            height: 14px;
            border: 2px solid #ffffff;
          }

          /* Mobile Content Cards - Fixed width and no stretching */
          .content {
            padding: 1rem;
            border-radius: 0.75rem;
            max-height: none;
            overflow: visible;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            box-shadow: 0 4px 20px ${isDarkMode ? 
              'rgba(36, 36, 35, 0.3)' : 
              'rgba(0, 0, 0, 0.1)'
            };
            /* Ensure consistent width and no overflow */
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            /* Prevent stretching into next item */
            margin-bottom: 0;
            position: relative;
          }

          /* Mobile Typography - Smaller titles */
          .timeline-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            line-height: 1.2;
          }

          .timeline-card h4 {
            font-size: 1rem;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }
          
          .timeline-card p {
            font-size: 0.9rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }

          /* Mobile Tech Tags */
          .tech-stack {
            gap: 0.3rem;
            margin-bottom: 0.75rem;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 0.2rem 0.5rem;
            border-radius: 0.6rem;
          }

          /* Mobile Project Buttons */
          .project-actions {
            margin-top: 0.75rem;
            padding-top: 0.75rem;
          }

          .project-button {
            font-size: 0.8rem;
            padding: 0.5rem 0.8rem;
            gap: 0.3rem;
            border-radius: 0.6rem;
          }

          .button-icon {
            font-size: 0.85rem;
          }

          /* Mobile Achievement Lists */
          .achievements li,
          .project-features li {
            font-size: 0.8rem;
            padding: 0.2rem 0;
            line-height: 1.3;
          }

          /* Mobile Images - Full image display */
          .timeline-card img,
          .content img,
          .floating-icon img,
          .floating-icon video {
            max-width: 100%;
            width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 0.5rem;
            margin: 0.5rem 0;
            /* Ensure full image is visible */
            object-position: center;
          }

          /* Mobile Floating Icons - Simplified */
          .floating-icons-area {
            display: none; /* Hide floating icons on mobile for cleaner look */
          }

          /* Mobile High-Signal UI - Simplified */
          .floating-achievement,
          .floating-endorsement,
          .floating-tech-chip {
            display: none; /* Hide for cleaner mobile experience */
          }

          /* Mobile Navigation - Positioned to avoid content overlap */
          .section-dots-nav {
            right: 6px;
            gap: 4px;
            top: 45%;
          }
          
          .section-dot {
            width: 6px;
            height: 6px;
            border-width: 1px;
          }

          /* Mobile Controls - Better positioning */
          .language-selector {
            top: 3px;
            left: 3px;
            gap: 4px;
            z-index: 1001;
          }

          .language-button {
            padding: 4px 8px;
            font-size: 0.7rem;
            border-radius: 4px;
          }

          .dark-mode-toggle {
            top: 10px;
            right: 10px;
            width: 38px;
            height: 38px;
            z-index: 1001;
            /* Ensure it doesn't interfere with content */
            position: fixed;
          }

          .dark-mode-toggle svg {
            width: 16px;
            height: 16px;
          }

          /* Mobile Container - Match hero width exactly */
          .timeline-container {
            width: 100%;
            max-width: 100vw;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        }

        /* Section Dots Navigation */
        .section-dots-nav {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--text-color);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.4;
          position: relative;
        }

        .section-dot:hover {
          opacity: 0.7;
          transform: scale(1.2);
          border-color: var(--accent-color);
        }

        .section-dot.active {
          background: var(--accent-color);
          border-color: var(--accent-color);
          opacity: 1;
          box-shadow: 0 0 8px rgba(96, 165, 250, 0.4);
        }

        @media (max-width: 768px) {
          .section-dots-nav {
            right: 15px;
            gap: 8px;
          }
          
          .section-dot {
            width: 10px;
            height: 10px;
          }
        }

        /* Monochrome Harmony Color Palette Variables */
        :global(html) {
          --bg-color: ${isDarkMode ? '#242423' : '#E8EDDF'};
          --text-color: ${isDarkMode ? '#E8EDDF' : '#242423'};
          --card-bg: ${isDarkMode ? '#333533' : '#CFDBD5'};
          --card-border: ${isDarkMode ? '#CFDBD5' : '#333533'};
          --timeline-line: ${isDarkMode ? '#F5CB5C' : '#F5CB5C'};
          --accent-color: ${isDarkMode ? '#F5CB5C' : '#F5CB5C'};
          --secondary-accent: ${isDarkMode ? '#CFDBD5' : '#333533'};
          --shadow-color: ${isDarkMode ? 'rgba(207,219,213,0.1)' : 'rgba(36,36,35,0.1)'};
        }

        /* Language Selector */
        .language-selector {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000;
          display: flex;
          gap: 8px;
        }

        .language-button {
          background: var(--card-bg);
          border: 2px solid var(--card-border);
          border-radius: 8px;
          padding: 8px 12px;
          cursor: pointer;
          color: ${isDarkMode ? 'var(--text-color)' : '#333533'};
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px var(--shadow-color);
        }

        .language-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--shadow-color);
        }

        .language-button.active {
          background: var(--accent-color);
          color: ${isDarkMode ? '#242423' : '#242423'};
          border-color: var(--accent-color);
        }

        /* Hero Section Styles */
        .hero-section {
          min-height: 100vh;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          text-align: center;
          position: relative;
          /* Use same background as body to avoid color transition */
          background: ${isDarkMode ? 
            'linear-gradient(135deg, #242423, #333533)' : 
            'linear-gradient(135deg, #E8EDDF, #CFDBD5)'
          };
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
          align-items: center;
          max-width: 1200px;
          width: 100%;
        }
        
        .hero-text {
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${isDarkMode ? 
            'linear-gradient(135deg, #333533, #CFDBD5)' : 
            'linear-gradient(135deg, #CFDBD5, #F5CB5C)'
          };
          border: 1px solid ${isDarkMode ? '#F5CB5C' : '#333533'};
          border-radius: 24px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: var(--text-color);
          margin-bottom: 1.5rem;
          animation: pulse 2s infinite;
        }

        .badge-icon {
          font-size: 1.1rem;
        }
        
        .hero-headline {
          font-size: 3.2rem;
          font-weight: 700;
          margin: 0 0 1rem;
          background: ${isDarkMode ? 
            'linear-gradient(135deg, #F5CB5C, #CFDBD5)' : 
            'linear-gradient(135deg, #F5CB5C, #333533)'
          };
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }
        
        .hero-subline {
          font-size: 1.2rem;
          line-height: 1.6;
          color: ${isDarkMode ? 'var(--text-color)' : '#333533'};
          opacity: 0.8;
          margin: 0 0 2.5rem;
          max-width: 600px;
        }

        .proof-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .proof-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: ${isDarkMode ? 
            'rgba(207, 219, 213, 0.1)' : 
            'rgba(207, 219, 213, 0.6)'
          };
          backdrop-filter: blur(15px);
          border: 1px solid ${isDarkMode ? 'rgba(245, 203, 92, 0.3)' : 'rgba(51, 53, 51, 0.3)'};
          border-radius: 12px;
          padding: 0.75rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .proof-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px ${isDarkMode ? 'rgba(245, 203, 92, 0.2)' : 'rgba(51, 53, 51, 0.15)'};
          background: ${isDarkMode ? 
            'rgba(207, 219, 213, 0.15)' : 
            'rgba(207, 219, 213, 0.8)'
          };
        }

        .proof-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .proof-text {
          flex: 1;
          font-size: 0.95rem;
          color: ${isDarkMode ? 'var(--text-color)' : '#242423'};
          opacity: 0.9;
        }

        .proof-number {
          font-weight: 700;
          color: ${isDarkMode ? '#F5CB5C' : '#F5CB5C'};
          font-size: 1rem;
        }

        .proof-badge {
          background: ${isDarkMode ? 
            'linear-gradient(135deg, #F5CB5C, #CFDBD5)' : 
            'linear-gradient(135deg, #F5CB5C, #E8EDDF)'
          };
          color: #242423;
          padding: 0.25rem 0.75rem;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
        }

        .cta-primary,
        .cta-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .cta-primary {
          background: ${isDarkMode ? 
            'linear-gradient(135deg, #F5CB5C, #CFDBD5)' : 
            'linear-gradient(135deg, #F5CB5C, #333533)'
          };
          color: ${isDarkMode ? '#242423' : '#E8EDDF'};
          box-shadow: 0 4px 15px ${isDarkMode ? 
            'rgba(245, 203, 92, 0.3)' : 
            'rgba(245, 203, 92, 0.4)'
          };
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px ${isDarkMode ? 
            'rgba(245, 203, 92, 0.4)' : 
            'rgba(245, 203, 92, 0.5)'
          };
        }

        .cta-secondary {
          background: ${isDarkMode ? 'transparent' : 'rgba(51, 53, 51, 0.1)'};
          color: ${isDarkMode ? 'var(--text-color)' : '#333533'};
          border: 2px solid ${isDarkMode ? '#F5CB5C' : '#333533'};
        }

        .cta-secondary:hover {
          background: ${isDarkMode ? 'rgba(245, 203, 92, 0.1)' : 'rgba(51, 53, 51, 0.2)'};
          transform: translateY(-2px);
        }

        .cta-icon {
          font-size: 1.1rem;
        }
        
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .profile-avatar {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        
        .avatar-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-radius: 50%;
          background: linear-gradient(135deg, #F5CB5C, #CFDBD5, #E8EDDF) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          -webkit-mask-composite: xor;
          animation: rotate 6s linear infinite;
        }
        
        .avatar-content {
          width: 160px;
          height: 160px;
          background: ${isDarkMode ? 
            'linear-gradient(135deg, #333533, #242423)' : 
            'linear-gradient(135deg, #CFDBD5, #E8EDDF)'
          };
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 1;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .floating-tech-icons {
          position: absolute;
          width: 120%;
          height: 120%;
          pointer-events: none;
        }

        .tech-icon {
          position: absolute;
          font-size: 1.5rem;
          background: ${isDarkMode ? 
            'rgba(207, 219, 213, 0.15)' : 
            'rgba(51, 53, 51, 0.1)'
          };
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 3s ease-in-out infinite;
        }

        .tech-icon:nth-child(1) { animation-delay: 0s; }
        .tech-icon:nth-child(2) { animation-delay: 0.5s; }
        .tech-icon:nth-child(3) { animation-delay: 1s; }
        .tech-icon:nth-child(4) { animation-delay: 1.5s; }
        .tech-icon:nth-child(5) { animation-delay: 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-color);
          opacity: 0.6;
          font-size: 0.9rem;
        }
        
        .scroll-arrow {
          animation: bounce 2s infinite;
          font-size: 1.5rem;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes jumpHint {
          0% { transform: translateY(0); }
          25% { transform: translateY(-26px); }
          50% { transform: translateY(-18px); }
          75% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        .hero-section.jump-hint {
          animation: jumpHint 1s ease-out;
        }
        
        /* Hero Section Mobile Styles */
        @media (max-width: 768px) {
          .hero-section {
            padding: 0.5rem 1rem 2rem 1rem;
            min-height: 100vh;
            height: 100vh;
            /* Ensure same background as body for seamless transition */
            background: ${isDarkMode ? 
              'linear-gradient(135deg, #242423, #333533)' : 
              'linear-gradient(135deg, #E8EDDF, #CFDBD5)'
            };
            /* Ensure all content fits in viewport */
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* Remove excessive top padding */
            padding-top: 1rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 0.3rem;
            text-align: center;
            max-width: 100%;
            padding: 0;
            /* Start closer to top */
            margin-top: -2rem;
          }
          
          .hero-text {
            text-align: center;
            order: 2;
            /* Ensure content doesn't overlap with controls */
            padding: 0 0.5rem;
          }

          .hero-visual {
            order: 1;
            margin-bottom: 0.1rem;
            /* Move avatar much higher */
            margin-top: -3rem;
          }

          .hero-badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            margin-bottom: 0.5rem;
            border-radius: 20px;
          }

          .badge-icon {
            font-size: 1rem;
          }
          
          .hero-headline {
            font-size: 1.5rem;
            line-height: 1.1;
            margin-bottom: 0.4rem;
          }
          
          /* Hide subtitle on mobile to save space */
          .hero-subline {
            display: none;
          }

          .proof-stats {
            gap: 0.3rem;
            margin-bottom: 0.6rem;
          }

          .proof-item {
            padding: 0.5rem 0.6rem;
            font-size: 0.8rem;
            border-radius: 6px;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            /* Simple layout - just icon and text */
            display: flex;
            align-items: center;
            gap: 0.4rem;
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
          }

          .proof-icon {
            font-size: 0.9rem;
            flex-shrink: 0;
          }

          .proof-text {
            font-size: 0.8rem;
            line-height: 1.2;
            flex: 1;
            text-align: left;
          }

          /* Hide numbers and badges on mobile to save space */
          .proof-number,
          .proof-badge {
            display: none;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            width: 100%;
            /* Ensure buttons are visible and don't go off screen */
            padding: 0 0.5rem;
            margin-bottom: 0.3rem;
          }

          /* Hide CV button on mobile */
          .cta-secondary {
            display: none;
          }

          .cta-primary {
            /* Match proof item styling exactly */
            padding: 0.5rem 0.6rem;
            font-size: 0.8rem;
            border-radius: 6px;
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
            /* Keep flex layout consistent with proof items */
            display: flex;
            align-items: center;
            gap: 0.4rem;
            justify-content: flex-start;
            text-align: left;
          }

          .cta-icon {
            font-size: 0.9rem;
            flex-shrink: 0;
          }
          
          .profile-avatar {
            width: 100px;
            height: 100px;
          }
          
          .avatar-content {
            width: 80px;
            height: 80px;
          }

          .avatar-ring {
            border-width: 2px;
          }

          .floating-tech-icons {
            display: none;
          }

          .scroll-indicator {
            bottom: 0.2rem;
            font-size: 0.65rem;
            /* Ensure it's visible within viewport */
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            /* Make it less prominent to save space */
            opacity: 0.7;
          }

          .scroll-arrow {
            font-size: 0.8rem;
          }
        }

        /* Dark Mode Toggle Button */
        .dark-mode-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          /* Use a warm gradient in dark mode for clear contrast, and the card background in light mode */
          background: ${isDarkMode ? 'linear-gradient(135deg, #F5CB5C, #CFDBD5)' : 'var(--card-bg)'};
          border: 2px solid ${isDarkMode ? 'rgba(245,203,92,0.85)' : 'var(--card-border)'};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          /* Ensure icon/text contrasts with background */
          color: ${isDarkMode ? '#242423' : 'var(--text-color)'};
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px ${isDarkMode ? 'rgba(245,203,92,0.25)' : 'var(--shadow-color)'};
        }

        .dark-mode-toggle:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px ${isDarkMode ? 'rgba(245,203,92,0.35)' : 'rgba(36,36,35,0.18)'};
        }

        .dark-mode-toggle:active {
          transform: scale(0.96);
        }

        /* Update existing styles to use CSS variables */
        .timeline-container {
          background: var(--bg-color);
          color: var(--text-color);
        }

        .timeline-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-color);
        }

        .timeline-line {
          background: var(--timeline-line);
        }

        .timeline-connector {
          background: var(--timeline-line);
        }
      `}</style>
    </>
  );
};

export default Timeline;
