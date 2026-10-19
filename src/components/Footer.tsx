import { type MouseEvent } from 'react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';
import { ChevronUpIcon, GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from './icons/Icons';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <h3 className="footer-brand-title">{PERSONAL_INFO.fullName}</h3>
            <p className="footer-brand-desc">
              {PERSONAL_INFO.role} & CSE undergraduate student at {PERSONAL_INFO.university}. Dedicated to building clean, accessible, and resilient web solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="footer-link"
                    onClick={(e) => handleSectionClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <TwitterIcon size={16} />
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <MailIcon size={16} />
                  <span>Email Directly</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {currentYear} {PERSONAL_INFO.fullName}. Built with React & TypeScript.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={handleScrollTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ChevronUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
