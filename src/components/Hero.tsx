import { PERSONAL_INFO } from '../data/portfolioData';
import { SparklesIcon, CodeIcon, SendIcon, GraduationCapIcon } from './icons/Icons';
import profilePhoto from '../assets/profile.jpg';
import './Hero.css';

export const Hero = () => {
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introductions and Actions */}
          <div className="hero-content">
            <div className="hero-badge-wrapper">
              <span className="status-indicator">
                <span className="pulse-dot"></span>
                Available for internships & junior roles
              </span>
              <span className="section-tag">
                <GraduationCapIcon size={14} />
                CSE Student @ IIUC
              </span>
            </div>

            <div>
              <h1 className="hero-name">
                Hi, I'm <span className="gradient-text">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className="hero-subtitle">{PERSONAL_INFO.role}</p>
            </div>

            <p className="hero-bio">
              Undergraduate Computer Science & Engineering student at{' '}
              <strong style={{ color: 'var(--text-main)' }}>
                International Islamic University Chittagong (IIUC)
              </strong>
              , currently advancing web development skills with{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>Programming Hero</strong>. Focused on modern JavaScript, React, and Tailwind CSS with a long-term goal in full-stack systems and cybersecurity.
            </p>

            {/* Core Tech Stack Pills */}
            <div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.5rem', fontWeight: 600 }}>
                CORE TECHNOLOGIES
              </p>
              <div className="hero-tech-pills">
                {['JavaScript (ES6+)', 'React 19', 'Tailwind CSS', 'HTML5 & CSS3', 'Git & GitHub', 'REST APIs'].map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleScrollTo('projects')}
              >
                <span>View My Projects</span>
                <CodeIcon size={18} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleScrollTo('contact')}
              >
                <span>Contact Me</span>
                <SendIcon size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: User Portrait Presentation */}
          <div className="hero-photo-wrapper">
            <div className="photo-frame-container">
              <div className="photo-glow-effect" aria-hidden="true"></div>
              
              <div className="photo-card-surface">
                <img
                  src={profilePhoto}
                  alt={PERSONAL_INFO.fullName}
                  className="hero-profile-image"
                  loading="eager"
                />
                
                {/* Floating Info Tag */}
                <div className="photo-floating-badge">
                  <div>
                    <div className="floating-badge-title">{PERSONAL_INFO.preferredName}</div>
                    <div className="floating-badge-sub">IIUC CSE &bull; Web Developer</div>
                  </div>
                  <span className="floating-badge-tag">
                    <SparklesIcon size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
