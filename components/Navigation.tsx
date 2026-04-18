'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            {/* Logo/Name */}
            <a
              href="#hero"
              className="text-white text-xs font-medium tracking-wide hover:opacity-80 transition-opacity"
            >
              Dhrupesh Brahmbhatt
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-xs font-normal hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-medium hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
