import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCapIcon, LayersIcon, ShieldSecurityIcon, CodeIcon, SparklesIcon } from './icons/Icons';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="section" aria-label="About Mohammed Saad">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCapIcon size={14} />
            Background & Mindset
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A passionate CSE undergraduate at IIUC, honing web engineering fundamentals with Programming Hero to build interactive, resilient applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Narrative */}
          <div className="about-text-content">
            <p className="about-paragraph">
              I am an undergraduate student studying <strong>Computer Science & Engineering (CSE)</strong> at the{' '}
              <strong>International Islamic University Chittagong (IIUC)</strong>. Alongside university coursework in computing, data structures, and algorithms, I am actively leveling up my practical web development capabilities through{' '}
              <strong>Programming Hero</strong>.
            </p>

            <p className="about-paragraph">
              I enjoy translating real-world requirements into clean, responsive user interfaces. I work comfortably with <strong>JavaScript (ES6+)</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, building modular component trees, handling state and props, and fetching asynchronous data from APIs.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <CodeIcon size={18} />
                </div>
                <div>
                  <h4 className="about-feature-title">Modern React & UI Development</h4>
                  <p className="about-feature-desc">
                    Structuring reusable React components, managing state with hooks, and styling responsive interfaces quickly with Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <SparklesIcon size={18} />
                </div>
                <div>
                  <h4 className="about-feature-title">Project-Driven with Programming Hero</h4>
                  <p className="about-feature-desc">
                    Building practical web applications and assignments, from dynamic dashboards to auction simulators with real-time computations.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <LayersIcon size={18} />
                </div>
                <div>
                  <h4 className="about-feature-title">Full-Stack Ambition</h4>
                  <p className="about-feature-desc">
                    Extending frontend expertise to connect with backend environments (PHP, Node concepts) and relational databases (MySQL).
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <ShieldSecurityIcon size={18} />
                </div>
                <div>
                  <h4 className="about-feature-title">Cybersecurity Long-Term Focus</h4>
                  <p className="about-feature-desc">
                    Aiming for a specialized career in web security, safe auth workflows, and defending web systems against modern threats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Overview Card */}
          <div className="glass-card about-side-card">
            <div>
              <h3 className="side-card-title">
                <GraduationCapIcon size={18} style={{ color: 'var(--accent-cyan)' }} />
                Academic & Training Tracks
              </h3>
              <ul className="goals-list" style={{ marginTop: '1rem' }}>
                <li className="goal-item">
                  <span className="goal-dot"></span>
                  <span><strong>University:</strong> IIUC (CSE Undergraduate)</span>
                </li>
                <li className="goal-item">
                  <span className="goal-dot"></span>
                  <span><strong>Web Dev Training:</strong> Programming Hero</span>
                </li>
                <li className="goal-item">
                  <span className="goal-dot"></span>
                  <span><strong>Core Skills:</strong> JavaScript, React, Tailwind CSS</span>
                </li>
                <li className="goal-item">
                  <span className="goal-dot"></span>
                  <span><strong>Career Trajectory:</strong> Full-Stack Engineering & Cybersecurity</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Active Study Focus
              </h4>
              <div className="learning-tags-wrapper">
                {PERSONAL_INFO.currentFocus.map((focus, idx) => (
                  <span key={idx} className="learning-tag">
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Location:</span>
                <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{PERSONAL_INFO.location}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                <span style={{ color: 'var(--text-dim)' }}>Status:</span>
                <span style={{ color: '#34d399', fontWeight: 600 }}>Ready for Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
