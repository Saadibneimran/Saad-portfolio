import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCapIcon, MapPinIcon } from './icons/Icons';
import './Education.css';

export const Education = () => {
  return (
    <section id="education" className="section" aria-label="Education & Learning Journey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCapIcon size={14} />
            Academic Timeline
          </span>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-description">
            My formal computer science curriculum alongside deliberate self-directed study tracks.
          </p>
        </div>

        <div className="education-timeline">
          {EDUCATION_DATA.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-node" aria-hidden="true">
                <div className="timeline-node-inner"></div>
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <p className="timeline-institution">{item.institution}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.3rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                      <MapPinIcon size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span className="timeline-period-badge">{item.period}</span>
                    <span className="timeline-status-badge">{item.status}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="timeline-highlight-item">
                        <span className="highlight-dot" aria-hidden="true"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
