import { useState, type MouseEvent } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { CodeIcon, GithubIcon, ExternalLinkIcon, CheckIcon } from './icons/Icons';
import './Projects.css';

export const Projects = () => {
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, url: string, type: 'GitHub' | 'Live Demo') => {
    if (url.includes('placeholder')) {
      e.preventDefault();
      setActiveNotice(`Notice: "${type}" link is a placeholder. You can insert your live URL in src/data/portfolioData.ts`);
      setTimeout(() => setActiveNotice(null), 4000);
    } else if (url.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(url.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <CodeIcon size={14} />
            Practical Work
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Selected applications developed to practice core software development concepts, React component architectures, and responsive styling.
          </p>
        </div>

        {/* Global Toast for Placeholder Clicks */}
        {activeNotice && (
          <div
            style={{
              maxWidth: '650px',
              margin: '0 auto 2rem auto',
              padding: '0.85rem 1.25rem',
              borderRadius: '10px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: 'var(--text-main)',
              fontSize: '0.875rem',
              textAlign: 'center',
            }}
            role="status"
          >
            {activeNotice}
          </div>
        )}

        <div className="projects-grid">
          {PROJECTS_DATA.map((project: Project) => (
            <article key={project.id} className="glass-card project-card">
              {/* Visual Banner Placeholder */}
              <div
                className="project-banner-placeholder"
                style={{ background: project.imagePlaceholder.gradient }}
              >
                <div className="banner-backdrop-pattern"></div>
                <span className="project-category-pill">
                  {project.imagePlaceholder.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc" style={{ marginTop: '0.5rem' }}>
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <ul className="project-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-feature-bullet">
                      <span className="feature-bullet-icon">
                        <CheckIcon size={14} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => handleLinkClick(e, project.githubUrl, 'GitHub')}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target={project.liveDemoUrl.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    onClick={(e) => handleLinkClick(e, project.liveDemoUrl, 'Live Demo')}
                    aria-label={`View ${project.title} live demonstration`}
                  >
                    <ExternalLinkIcon size={15} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
