'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'dhrupesh840@gmail.com',
      link: 'mailto:dhrupesh840@gmail.com',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/dhrupesh-brahmbhatt',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] mb-6">
            Get in Touch
          </h2>
          <p className="font-text text-[21px] font-normal leading-[1.19] tracking-[0.231px] text-[rgba(0,0,0,0.56)] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {/* Contact Methods */}
          <div className="md:col-span-1 space-y-5">
            <div>
              <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-[12px] p-5 hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0071e3]/10 rounded-[12px] flex items-center justify-center text-[#0071e3] flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-[#1d1d1f] mb-1">
                          {method.title}
                        </h4>
                        <p className="font-text text-[14px] leading-[1.29] tracking-[-0.224px] text-[rgba(0,0,0,0.56)] break-all">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-6">
              <h4 className="font-text text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-[#1d1d1f] mb-3">
                Open to Opportunities
              </h4>
              <p className="font-text text-[14px] leading-[1.29] tracking-[-0.224px] text-[rgba(0,0,0,0.56)]">
                I&apos;m currently open to freelance projects and full-time
                opportunities. Let&apos;s build something amazing together.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-[12px] p-8">
              <h3 className="font-display text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f] mb-8">
                Send Me a Message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-[#f5f5f7] rounded-[8px] flex items-center gap-3 text-[#1d1d1f]">
                  <CheckCircle className="w-5 h-5 text-[#0071e3]" />
                  <p className="font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px]">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#1d1d1f] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f5f5f7] rounded-[8px] text-[#1d1d1f] font-text text-[17px] leading-[1.47] tracking-[-0.374px] border-none focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#1d1d1f] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#f5f5f7] rounded-[8px] text-[#1d1d1f] font-text text-[17px] leading-[1.47] tracking-[-0.374px] border-none focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#1d1d1f] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#f5f5f7] rounded-[8px] text-[#1d1d1f] font-text text-[17px] leading-[1.47] tracking-[-0.374px] border-none focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-text text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#1d1d1f] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#f5f5f7] rounded-[8px] text-[#1d1d1f] font-text text-[17px] leading-[1.47] tracking-[-0.374px] border-none focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0071e3] text-white font-text text-[17px] font-normal rounded-[8px] hover:bg-[#0077ed] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
