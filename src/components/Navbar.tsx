import { useState, useEffect, type MouseEvent } from 'react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';
import { MenuIcon, CloseIcon, SendIcon } from './icons/Icons';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background density on scroll
      setIsScrolled(window.scrollY > 30);

      // Identify active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, '#home')}
          aria-label="Mohammed Saad Ibne Imran Chowdhury Portfolio"
        >
          <div className="brand-badge" aria-hidden="true">
            {PERSONAL_INFO.initials}
          </div>
          <div className="brand-text">
            <span className="brand-name">{PERSONAL_INFO.preferredName}</span>
            <span className="brand-subtitle">Fresher Web Dev</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-desktop">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop">
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <span>Let's Connect</span>
            <SendIcon size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mobile-drawer-cta">
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <span>Let's Connect</span>
            <SendIcon size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};
