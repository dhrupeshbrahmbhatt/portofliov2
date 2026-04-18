'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/dhrupeshbrahmbhatt',
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhrupesh-brahmbhatt-a45656237/',
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: 'Email',
      href: 'mailto:dhrupesh840@gmail.com',
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1d1d1f] text-white/80">
      {/* Top divider */}
      <div className="max-w-[980px] mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      <div className="max-w-[980px] mx-auto px-6 py-10">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-text text-[12px] font-normal leading-[1.33] tracking-[-0.12px] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-text text-[12px] font-normal leading-[1.33] tracking-[-0.12px] text-white/30">
            Copyright &copy; {currentYear} Dhrupesh Brahmbhatt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
