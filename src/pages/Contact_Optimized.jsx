import React, { useState } from 'react';
import Layout from '../components/Layout';
import { CONTACT_INFO, CEO_INFO, SOCIAL_LINKS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      const formDataObj = new FormData(e.target);
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formDataObj).toString(),
        });
        if (response.ok) {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        }
      } catch (error) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Compact */}
        <section className="py-10 md:py-14 px-6" style={{ backgroundColor: 'var(--forest-dark)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-3 text-white"
              style={{ letterSpacing: '0.02em' }}
            >
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-white/85">
              Have a question, partnership opportunity, or volunteer inquiry? Reach out and let's connect.
            </p>
          </div>
        </section>

        {/* Main Contact Section - Optimized */}
        <section className="py-10 md:py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {/* Contact Form - Left Column */}
              <div id="contact-form">
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: 'var(--forest-dark)' }}
                >
                  Send us a Message
                </h2>
                <p 
                  className="text-sm md:text-base mb-6"
                  style={{ color: 'var(--forest)', fontStyle: 'italic' }}
                >
                  We typically respond within 24-48 hours
                </p>

                {submitted && (
                  <div className="mb-5 p-3 rounded-lg border-2 border-green-400 bg-green-50">
                    <p className="text-green-700 font-semibold text-sm flex items-center gap-2">
                      <span>✓</span> Thank you! We'll be in touch soon.
                    </p>
                  </div>
                )}

                <form 
                  name="contact-form" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <input type="hidden" name="bot-field" />

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--forest)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-white text-sm transition-all duration-200 focus:outline-none ${
                        errors.name
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100'
                      }`}
                      style={{ color: 'var(--forest-dark)' }}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--forest)' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-white text-sm transition-all duration-200 focus:outline-none ${
                        errors.email
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100'
                      }`}
                      style={{ color: 'var(--forest-dark)' }}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--forest)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Partnership, Volunteering"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-white text-sm transition-all duration-200 focus:outline-none ${
                        errors.subject
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100'
                      }`}
                      style={{ color: 'var(--forest-dark)' }}
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-xs mt-1 font-medium">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--forest)' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows="4"
                      className={`w-full px-4 py-2.5 rounded-lg border-2 bg-white text-sm transition-all duration-200 focus:outline-none resize-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100'
                      }`}
                      style={{ color: 'var(--forest-dark)' }}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full font-bold text-white text-base py-2.5 px-6 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-4"
                    style={{ 
                      backgroundColor: 'var(--forest-dark)',
                      letterSpacing: '0.03em'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--forest)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--forest-dark)'}
                  >
                    ✓ SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Contact Info - Right Column */}
              <div className="flex flex-col justify-start">
                {/* Contact Cards */}
                <div className="space-y-3 mb-6">
                  {/* Location Card */}
                  <div 
                    className="rounded-lg p-4 border-l-4 transition-all duration-200 hover:shadow-sm"
                    style={{ 
                      backgroundColor: 'var(--surface-offwhite)',
                      borderLeftColor: 'var(--forest)'
                    }}
                  >
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl">📍</span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>Location</h3>
                        <p className="text-sm" style={{ color: 'var(--text-gray)' }}>{CONTACT_INFO.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div 
                    className="rounded-lg p-4 border-l-4 transition-all duration-200 hover:shadow-sm"
                    style={{ 
                      backgroundColor: 'var(--surface-offwhite)',
                      borderLeftColor: 'var(--forest)'
                    }}
                  >
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl">✉️</span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>Email</h3>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-sm font-semibold hover:underline transition-colors duration-200"
                          style={{ color: 'var(--forest)' }}
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div 
                    className="rounded-lg p-4 border-l-4 transition-all duration-200 hover:shadow-sm"
                    style={{ 
                      backgroundColor: 'var(--surface-offwhite)',
                      borderLeftColor: 'var(--forest)'
                    }}
                  >
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl">📞</span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-1" style={{ color: 'var(--forest-dark)' }}>Phone</h3>
                        <a
                          href={`tel:${CONTACT_INFO.phone}`}
                          className="text-sm font-semibold hover:underline transition-colors duration-200"
                          style={{ color: 'var(--forest)' }}
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CEO Card */}
                  <div 
                    className="rounded-lg p-4 border-l-4 transition-all duration-200 hover:shadow-sm"
                    style={{ 
                      backgroundColor: 'var(--surface-offwhite)',
                      borderLeftColor: 'var(--forest)'
                    }}
                  >
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl">👔</span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--forest-dark)' }}>{CEO_INFO.name}</h3>
                        <p className="text-xs mb-2" style={{ color: 'var(--text-gray)' }}>{CEO_INFO.title}</p>
                        <div className="space-y-1">
                          <div>
                            <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--forest)' }}>MAIN</p>
                            <a
                              href={`tel:${CEO_INFO.phone}`}
                              className="text-xs font-semibold hover:underline transition-colors duration-200 block"
                              style={{ color: 'var(--forest)' }}
                            >
                              {CEO_INFO.phone}
                            </a>
                          </div>
                          <div>
                            <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--forest)' }}>ALT</p>
                            <a
                              href={`tel:${CEO_INFO.alternatePhone}`}
                              className="text-xs font-semibold hover:underline transition-colors duration-200 block"
                              style={{ color: 'var(--forest)' }}
                            >
                              {CEO_INFO.alternatePhone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Badge - Compact */}
                <div 
                  className="rounded-lg p-4 border-2 mb-6"
                  style={{ 
                    backgroundColor: 'var(--champagne)',
                    borderColor: 'var(--forest)'
                  }}
                >
                  <h3 className="text-base font-bold mb-3" style={{ color: 'var(--forest-dark)' }}>Why Reach Out?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-0" style={{ color: 'var(--forest)' }}>✓</span>
                      <span className="text-xs" style={{ color: 'var(--text-gray)' }}>Response within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-0" style={{ color: 'var(--forest)' }}>✓</span>
                      <span className="text-xs" style={{ color: 'var(--text-gray)' }}>Direct communication with team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-0" style={{ color: 'var(--forest)' }}>✓</span>
                      <span className="text-xs" style={{ color: 'var(--text-gray)' }}>Multiple contact options</span>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--forest-dark)' }}>FOLLOW US</p>
                  <div className="flex gap-3">
                    {[
                      { icon: '🔗', url: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                      { icon: '𝕏', url: SOCIAL_LINKS.twitter, label: 'Twitter' },
                      { icon: '📷', url: SOCIAL_LINKS.instagram, label: 'Instagram' },
                      { icon: 'ƒ', url: SOCIAL_LINKS.facebook, label: 'Facebook' },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-200 hover:scale-110"
                        style={{ 
                          borderColor: 'var(--forest)',
                          color: 'var(--forest)'
                        }}
                        aria-label={social.label}
                      >
                        <span className="text-sm">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section className="py-10 md:py-12 px-6 bg-white" id="volunteer">
          <div className="max-w-5xl mx-auto">
            {/* Hero Statement */}
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide"
                style={{ color: 'var(--forest-dark)', letterSpacing: '0.04em' }}
              >
                Volunteer With Us
              </h2>
              <p 
                className="text-base md:text-lg max-w-2xl mx-auto mb-3"
                style={{ color: 'var(--forest)', fontStyle: 'italic' }}
              >
                Your skills, passion, and time can change lives
              </p>
              <p 
                className="text-sm max-w-3xl mx-auto"
                style={{ color: 'var(--text-gray)' }}
              >
                From research and mentorship to storytelling and advocacy, volunteers are the heartbeat of our community-led programs. Whether you have 5 hours a month or can commit weekly, we'll find a role that matches your passion.
              </p>
            </div>

            {/* Volunteer Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: '📊',
                  title: 'Research & Documentation',
                  description: 'Help us document impact, analyze data, and build evidence that shapes policy.',
                  benefits: ['Learn research methods', 'Build analytics skills', 'Contribute to publications'],
                  bgColor: 'var(--white)',
                  borderColor: 'var(--forest)'
                },
                {
                  icon: '🎓',
                  title: 'Mentorship & Training',
                  description: 'Share your expertise by mentoring youth and facilitating skill-building workshops.',
                  benefits: ['Develop leadership skills', 'Build meaningful connections', 'Make direct impact'],
                  bgColor: 'var(--mint-surface)',
                  borderColor: 'var(--forest)'
                },
                {
                  icon: '📢',
                  title: 'Communications & Stories',
                  description: 'Tell powerful stories through writing, design, photography, or social media.',
                  benefits: ['Showcase your creativity', 'Build your portfolio', 'Amplify youth voices'],
                  bgColor: 'var(--white)',
                  borderColor: 'var(--forest)'
                }
              ].map((role, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                  style={{
                    backgroundColor: role.bgColor,
                    border: `2px solid ${role.borderColor}`
                  }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--forest)' }}
                  >
                    {role.title}
                  </h3>
                  
                  <p 
                    className="text-xs mb-3 leading-relaxed"
                    style={{ color: 'var(--text-gray)' }}
                  >
                    {role.description}
                  </p>
                  
                  <div className="space-y-1">
                    {role.benefits.map((benefit, idx) => (
                      <p 
                        key={idx}
                        className="text-xs font-semibold flex items-center gap-1.5"
                        style={{ color: 'var(--forest-dark)' }}
                      >
                        <span style={{ color: 'var(--forest)' }}>✓</span> {benefit}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Strip */}
            <div 
              className="rounded-lg p-6 md:p-8 mb-12"
              style={{ 
                backgroundColor: 'var(--champagne)',
                borderLeft: '4px solid var(--forest)'
              }}
            >
              <div className="max-w-3xl">
                <p 
                  className="text-base italic leading-relaxed mb-3"
                  style={{ color: 'var(--forest-dark)' }}
                >
                  "Volunteering with YoNISeRD gave me the chance to apply my skills to something meaningful. I've learned so much about community-led development, and seeing the impact we create together — that's what keeps me coming back."
                </p>
                <p 
                  className="font-bold text-sm"
                  style={{ color: 'var(--forest)' }}
                >
                  — Sarah M., Youth Mentor
                </p>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--text-gray)' }}
                >
                  Volunteered for 8 months | Mentorship & Training
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="mb-6">
                <a
                  href="mailto:info@youthintegrated.org?subject=Volunteer%20with%20YoNISeRD"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm text-white transition-all duration-300 hover:shadow-md hover:scale-105"
                  style={{ backgroundColor: 'var(--forest-dark)', color: 'var(--white)' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--forest)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--forest-dark)'}
                >
                  <span>Become a Volunteer</span>
                  <span>→</span>
                </a>
              </div>

              {/* Secondary CTA */}
              <p className="mb-3">
                <a
                  href="#contact-form"
                  className="text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                  style={{ color: 'var(--forest)' }}
                >
                  Questions? Jump to the contact form ↓
                </a>
              </p>

              {/* Info Text */}
              <p 
                className="text-xs max-w-2xl mx-auto"
                style={{ color: 'var(--text-gray)' }}
              >
                No experience necessary. All training and support provided. We'll work with you to find a volunteer opportunity that matches your interests, schedule, and expertise.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
