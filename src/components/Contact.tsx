import { useState, type ChangeEvent, type FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MailIcon, SendIcon, MapPinIcon, GithubIcon, LinkedinIcon, TwitterIcon, CheckIcon } from './icons/Icons';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean client-side validation without faking server delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedName(formData.name.trim());
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="section" aria-label="Contact Section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MailIcon size={14} />
            Let's Talk
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Whether you have an internship opportunity, a project idea, or simply want to connect with a fellow CSE student, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Social Links */}
          <div className="contact-info-col">
            <p className="contact-info-desc">
              I am actively seeking fresher web development roles, software internships, and collaborative project opportunities. Feel free to contact me via email or check out my profiles below.
            </p>

            <div className="direct-contact-cards">
              <div className="direct-card">
                <div className="direct-icon-wrap">
                  <MailIcon size={20} />
                </div>
                <div>
                  <div className="direct-label">Email Placeholder</div>
                  <div className="direct-value">{PERSONAL_INFO.socials.email}</div>
                </div>
              </div>

              <div className="direct-card">
                <div className="direct-icon-wrap">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <div className="direct-label">Current Location</div>
                  <div className="direct-value">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600 }}>
                CONNECT ON SOCIALS
              </h4>
              <div className="social-links-row">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  aria-label="GitHub Profile Placeholder"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  aria-label="LinkedIn Profile Placeholder"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  aria-label="X (Twitter) Profile Placeholder"
                >
                  <TwitterIcon size={16} />
                  <span>Twitter / X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            {submittedName ? (
              <div className="feedback-banner success">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 700, fontSize: '1rem', color: '#34d399' }}>
                  <CheckIcon size={18} />
                  Message Form Validated Successfully!
                </div>
                <p>
                  Thank you, <strong>{submittedName}</strong>!
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.825rem', color: '#94a3b8' }}>
                  <strong>Note:</strong> This is a client-side portfolio demonstration. Since no mail delivery server is hooked up, messages are validated on the client. To reach Mohammed directly, use the email address listed on the left or integrate your preferred service (such as Formspree or EmailJS).
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '1rem' }}
                  onClick={() => setSubmittedName(null)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Alex Rahman"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="name-error" className="field-error-msg">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="email-error" className="field-error-msg">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="message-error" className="field-error-msg">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Validating...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
