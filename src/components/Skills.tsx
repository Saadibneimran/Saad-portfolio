import { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillCategory } from '../types/portfolio';
import { CodeIcon, CheckIcon, SparklesIcon } from './icons/Icons';
import './Skills.css';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'all', label: 'All Technologies' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'styling', label: 'Styling & UI' },
    { key: 'backend', label: 'Backend & DB' },
    { key: 'tools', label: 'Tools & Workflow' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  const getCategoryCount = (cat: SkillCategory) => {
    if (cat === 'all') return SKILLS_DATA.length;
    return SKILLS_DATA.filter((s) => s.category === cat).length;
  };

  return (
    <section id="skills" className="section" aria-label="Skills & Technologies">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <CodeIcon size={14} />
            Technical Arsenal
          </span>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-description">
            A transparent overview of the technologies I build with, clearly categorizing core tools from active areas of study.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="skills-filter-container" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <span>{cat.label}</span>
                <span className="filter-count">{getCategoryCount(cat.key)}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const isProficient = skill.status === 'proficient';
            return (
              <div key={skill.name} className="glass-card skill-card">
                <div className="skill-card-header">
                  <div>
                    <h3 className="skill-title">{skill.name}</h3>
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                  <span
                    className={`skill-status-badge ${
                      isProficient ? 'status-proficient' : 'status-learning'
                    }`}
                  >
                    {isProficient ? (
                      <>
                        <CheckIcon size={12} />
                        <span>Proficient</span>
                      </>
                    ) : (
                      <>
                        <SparklesIcon size={12} />
                        <span>Learning</span>
                      </>
                    )}
                  </span>
                </div>

                {skill.description && (
                  <p className="skill-description">{skill.description}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend Indicator */}
        <div className="skills-legend">
          <div className="legend-item">
            <span className="skill-status-badge status-proficient">
              <CheckIcon size={12} />
              Proficient
            </span>
            <span>Technologies I currently use comfortably in projects</span>
          </div>
          <div className="legend-item">
            <span className="skill-status-badge status-learning">
              <SparklesIcon size={12} />
              Learning
            </span>
            <span>Actively practicing, taking courses, and expanding mastery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
